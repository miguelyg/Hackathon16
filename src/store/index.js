import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemones:[],
    pokemon:{},
  },
  mutations: {
    getPokemonesMutation(state,payload){
      state.pokemones = payload;
    },
    getPokemonUnoMutation(state,payload){
      state.pokemones = payload;
    }
  },
  actions: {
    getPokemonesAction({commit},pokemones){
      commit('getPokemonesMutation',pokemones);
    },
    getPokemonUnoAction({commit},pokemon){
      commit('getPokemonUnoMutation',pokemon);
    }
  },
  modules: {
  }
})
