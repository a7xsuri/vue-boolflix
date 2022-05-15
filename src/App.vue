<template>
  <div id="app">
    <header>
      <searc-bar @performSearch="search"/>
    </header>
    <main>
      <grid-list :items="movies" :loader="loading"/>
      <grid-list :items="tvSeries" :loader="loading"/>
    </main>
  </div>
</template>

<script>
import GridList from './components/GridList.vue'
import SearcBar from './components/SearcBar.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    SearcBar,
    GridList
  },
  data(){
    return{
      apiKey: 'e0a53276ef6f7cc6f535a6ada53d5b7d',
      apiPath: 'https://api.themoviedb.org/3/search/',
      movies:[],
      itemsList:[],
      tvSeries:[],
      loading: false,
    }
  },
  methods: {
    search(text){
      const queryParams = {
        params:{
          api_key: this.apiKey,
          query: text,
        }
      }
      this.loading = true;
      this.getAll(queryParams)
    },
    getSeries(queryParams){
      return axios.get(this.apiPath+'tv', queryParams)
    },
    getMovies(queryParams){
      return axios.get(this.apiPath+'movie', queryParams)
    },
    getAll(queryParams){
      Promise.all([this.getMovies(queryParams), this.getSeries(queryParams)]).then((res)=> {
        this.movies = res[0].data.results;
        this.tvSeries = res[1].data.results;
      }).catch((error)=>{
        console.log(error);
      })
    },
  }
}
</script>

<style lang="scss">
@import './style/general.scss'; 
header {
  background-color: $bgColor;
  height: 70px;
}
body {
  background-color: $bgColor;
}
</style>