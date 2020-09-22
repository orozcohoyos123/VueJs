<template>
<div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
</div>
</template>

<script>
export default {
    props: ['userAge'],
    methods: {
        editAge() {
            let newUserAge = this.userAge
            newUserAge = 30;

            this.$emit('ageWasEdited', newUserAge);
        }
    },
}
</script>

<style scoped>
div {
    background-color: lightgreen;
}
</style>
