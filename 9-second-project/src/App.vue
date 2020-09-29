<template>
<div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">
                Info: click on a quote to delete it
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NewQuote from './components/NewQuote.vue'
import QuoteGrid from './components/QuoteGrid.vue'
import Header from './components/Header.vue'

export default {
    data() {
        return {
            quotes: ['Some quote to see something'],
            maxQuotes: 10
        }
    },
    methods: {
        newQuote(quote) {
            if (quote != "") {
                if(this.quotes.length >= this.maxQuotes){
                    alert('please delete some quotes first!');
                    return;
                }
                this.quotes.push(quote);
            }
        },
        deleteQuote(index) {
            this.quotes.splice(index, 1);
        }
    },
    components: {
        appQuoteGrid: QuoteGrid,
        newQuote: NewQuote,
        appHeader: Header
    }
}
</script>

<style>
</style>
