<template>
    <section class="container">
        <div class="row">
            <single-elemnt :item="item" v-for="(item, index) in items" :key="index"/>
        </div>
    </section>
</template>

<script>
import SingleElemnt from './SingleElemnt.vue'

export default {
    name: 'GridList',
    components: {
        SingleElemnt
    },
    props:{
        items: Array
        },
    data(){
        
    },
    methods:{
    
    },
    computed:{
        
    }
}
</script>

<style lang="scss">
.grid {
    display: flex;
}
</style>