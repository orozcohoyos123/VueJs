<template>
<div>
    <div class="title">
        <slot name="title"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
</div>
</template>

<script>
//slots without name its a default slot
export default {

}
</script>

<style scoped>
div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}

h2 {
    color: red;
}

.title {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style: italic;
}
</style>
