<template>
  <div>
      sono la grid list
      <button @click="leggi">clicca</button>
      {{myasearch}}
  </div>
</template>

<script>
import state from '../store.js'
export default {
    name: 'GridList',
    data(){
        return{
         
        }
    },
    computed:{
        myasearch(){
            return state.search   
        }
    },
    methods:{
        leggi(){
            state.search = "leggi"
        }
    }
}
</script>

<style>

</style>