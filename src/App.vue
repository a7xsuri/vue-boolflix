<template>
  <div id="app">
    <header>
      <SearcBar @perfomSearch="search"/>
      <h1 class="display-6">Boolflix</h1>
    </header>
    <main>
      <GridList/>
      <button @click="getMovies">carica</button>
      <ul>
        <li v-for="(movie) in movies" :key="movie.id">
          id: {{movie.id}}<br/>
          titolo originale: {{movie.original_title}}<br/>
          titolo: {{movie.title}}<br/>
          lingua: {{movie.original_language}}<br/>
          voto: {{movie.vote_average}}<br/>
        </li>
      </ul>
    </main>
    
  </div>
</template>

<script>
import SearcBar from './components/SearcBar.vue';
import GridList from './components/GridList.vue';
import axios from 'axios'

export default {
  name: 'App',
  components: {
    SearcBar,
    GridList
  },
  data(){
    return{
      apiKey:"e0a53276ef6f7cc6f535a6ada53d5b7d",
      apiPath: 'https://api.themoviedb.org/3/search/',
      movies:[]
    }
  },
  methods:{
    getMovies(queryParams){
      axios.get(this.apiPath+'movie', queryParams).then((res)=>{
      this.movies = res.data.results;  
      })
    },
    search(text){
      const queryParams = {
        params:{
          api_key: this.apiKey,
          query: text
        }
      }
      this.getMovies(queryParams)
    }
  }
}
</script>

<style lang="scss">
@import './style/general.scss';
@import './style/general.scss';
</style>
