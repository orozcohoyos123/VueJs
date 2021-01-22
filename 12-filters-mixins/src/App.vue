<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase}}</p>
                <p>{{globalText | toLowercase}}</p>
                <p>{{textMultipleFilters | toUppercase | toLowercase}}</p>
                <input type="text" v-model="filterText">
                <ul>
                   <li v-for="(fruit, i) in filteredFruits" :key="i">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import {fruitMixin} from './fruitMixin';
import List from './List.vue';

    export default {
        mixins: [fruitMixin],
        data() { 
            return {
                text: 'local filter',
                globalText: 'GLOBAL FILTER',
                textMultipleFilters: 'Multiple filter text'
            }
        },
        filters: {
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
