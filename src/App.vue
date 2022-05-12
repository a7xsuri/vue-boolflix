<template>
  <div id="app">
    <header>
      <SearcBar/>
      <h1 class="display-6">Boolflix</h1>
    </header>
    <main>
      <GridList/>
    </main>
    
  </div>
</template>

<script>
import SearcBar from './components/SearcBar.vue';
import GridList from './components/GridList.vue';

export default {
  name: 'App',
  components: {
    SearcBar,
    GridList
  }
}
</script>

<style lang="scss">
@import './style/general.scss';
@import './style/general.scss';
</style>
