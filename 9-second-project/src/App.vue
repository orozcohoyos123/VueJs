<template>
    <div class="container">
        <app-quote-grid></app-quote-grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'

    export default {
        data() {
            return {
                quotes: ['Some quote to see something'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
