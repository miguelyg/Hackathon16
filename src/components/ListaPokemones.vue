<template>
    <section class="section">
        <div class="container">
            <h1 class="title has-text-primary-light">
            Lista Pokemones<!--  <router-link class="button is-warning" :to="`/crear/`">Agregar </router-link> -->
            </h1>
            <div v-for="(pokemon,index) in pokemones" :key="index">
                <div class="columns is-multiline is-centered">
                    <div class="column is-6 is-narrow" v-for="(datos,index) in pokemones.results" :key="index">
                        <div class="card box has-background-info-light">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-128x128">
                                        <img src="../assets/pokebola.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">{{datos.name}}</p>
                                        <p class="subtitle is-6">{{datos.url}}</p>
                                        <div class="level">
                                            <div class="buttons level-item has-text-centered">
                                                <router-link class="button is-warning" :to="`/pokemon/`">Detalle </router-link>
                                            </div>  
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
    <div class="modal" id="video">
        <div class="modal-background"></div>
        <div class="modal-content">
            Lorem ipsum dolor sit amet
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
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
        ...mapState(['pokemones']),
    },
    methods:{
        ...mapActions(['getPokemonesAction']),
        async obtenerPokemones(){
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
            const info = await data.json();
            this.pokemones = info;
            console.log(this.pokemones);
            this.getPokemonesAction(this.pokemones);
        }
    },
    created(){
        this.obtenerPokemones();
        console.log('metodo creado');
    },
   
};

</script>

<style>

</style>