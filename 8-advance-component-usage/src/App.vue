<template>
<div class="container">
    <br />
    <div class="row">
        <div class="col-xs-12">
            <button @click="selectedComponent = 'app-quote'">Quote</button>
            <button @click="selectedComponent = 'app-multiple-quote'">Multiple</button>
            <button @click="selectedComponent = 'app-default-quote'">Default</button>
        </div>
    </div>
    Component Tabs: {{selectedComponent}}
    <keep-alive>
        <!-- prevents to destroy the component, and preventing destroy the variables from it -->
        <component :is="selectedComponent">
            <h2>{{quoteTitle}} (MULTIPLE)</h2>
            <p>An awesome Quote! (DEFAULT SLOT)</p>
        </component>
    </keep-alive>
    <hr />
    <br />
    <br />SLOTS Components:
    <div class="row">
        <div class="col-xs-12">
            <app-quote>
                <h2>{{quoteTitle}}</h2>
                <p>An awesome Quote!</p>
            </app-quote>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <app-multiple-quote>
                <h2 slot="title">{{quoteTitle}} (MULTIPLE)</h2>
                <p slot="content">An awesome Quote! (MULTIPLE)</p>
            </app-multiple-quote>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <app-default-quote>
                <h2 slot="title">{{quoteTitle}} (MULTIPLE)</h2>
                <p>An awesome Quote! (DEFAULT SLOT)</p>
            </app-default-quote>
        </div>
    </div>
</div>
</template>

<script>
import Quote from "./components/Quote.vue";
import MultipleQuote from "./components/MultipleQuote.vue";
import DefaultQuote from "./components/DefaultQuote.vue";

export default {
    data() {
        return {
            quoteTitle: "Some Quote!",
            selectedComponent: "app-quote",
        };
    },
    components: {
        "app-quote": Quote,
        "app-multiple-quote": MultipleQuote,
        "app-default-quote": DefaultQuote,
    },
};
</script>

<style>
</style>
