<template>
    <div>
        <input type="text" v-model="search" @keyup.enter="$emit('performSearch', search)">
        <button @click="cerca">Cerca</button>
    </div>
</template>

<script>
/* import {state} from '../store.js' */
export default {
        name: 'SearcBar',
    data(){
        return {
            search: '',
        }
    },
    computed:{
        /* mySearch(){
            return state.search
        } */
    },
    methods:{
        cerca(){
            this.$emit('performSearch', this.search)
        }
    }
}
</script>

<style lang="scss">
</style>