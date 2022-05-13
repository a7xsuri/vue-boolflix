<template>
  <div>
    <input type="text" v-model="search" @keyup.enter="$emit('perfomSearch', search)">
    <button @click="cerca">Cerca</button>
  </div>
</template>

<script>
export default {
    name: 'SearcBar',
    data(){
        return {
            search:''
        }
    },
    computed:{
        
    },
    methods:{
        cerca(){
            this.$emit('perfomSearch', this.search)
            this.search = ''
        }
    }
}
</script>

<style lang="scss">

</style>