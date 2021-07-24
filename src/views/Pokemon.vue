<template>
      <section class="section">
        <div class="container">
            <h1 class="title has-text-primary-light">
            Lista Pokemones<!--  <router-link class="button is-warning" :to="`/crear/`">Agregar </router-link> -->
            </h1>

                <div class="columns is-multiline is-centered">
                    <div class="column is-6 is-narrow">
                        <div class="card box has-background-info-light">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-128x128">
                                        <img src="../assets/pokebola.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">name</p>
                                        <p class="subtitle is-6">url</p>
                                        <div class="level">
                                            <div class="buttons level-item has-text-centered">
                                                <router-link class="button is-warning" :to="`/contacts/${name}`">Detalle </router-link>
                                            </div>  
                                        </div>                               
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </section>
</template>

<script>
import {mapActions} from 'vuex'
import {mapState} from 'vuex';
export default {
    data(){
        return{
            pokemones:[],
            pokemon:{},
        };
    },
    computed:{
        ...mapState(['pokemon']),
    },
    methods:{
        ...mapActions(['getPokemonUnoAction']),
        async obtenerPokemonUno(){
            const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            const info = await data.json();
            this.pokemon = info;
            console.log(this.pokemon);
            this.getPokemonUnoAction(this.pokemon);
        }
    },
    created(){
        this.obtenerPokemonUno();
        console.log('metodo creado');
    },
   
};
</script>

<style>

</style>