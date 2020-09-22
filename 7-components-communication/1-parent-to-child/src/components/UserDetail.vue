<template>
<div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Name: {{ switchName() }}</p>
    <p>Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button> <!-- Reset the name with an emit -->
    <button @click="resetFn()">Reset Name</button> <!-- Reset the name with a callback function provided from the parent-->
</div>
</template>

<script>
export default {
    props: {
        name: {
            type: String, //[String, Array] ///to be sure about the data type of the property
            required: true,
            //default: 'sebas'  // if the prop is not provided
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        switchName: function () {
            return this.name.split("").reverse().join("");
        },
        resetName: function () {
            let newName = this.name
            newName = 'sebas'

            this.$emit('nameWasReset', newName); /// custom event, which is emitted to the parent component
        }
    },
}
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
