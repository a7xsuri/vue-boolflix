import Vue from 'vue';

const _state = Vue.observable({
    search: 'a',
    species:[]
})

const state = ()=>({..._state});
const actions = {
    setSearch(val){
        _state.search = val;
    },
    SetSpecies(val){
        _state.species = val;
    }
};
export {state, actions};