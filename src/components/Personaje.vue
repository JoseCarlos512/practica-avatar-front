<template>
  <v-card class="mx-auto" width="400">
    <v-card-text @click="goListaPeliculasPersonaje(pelicula.episode_id)">
      <div>birth_year: {{ personaje.birth_year }}</div>
      <p class="text-h4 text--primary">{{ personaje.name }}</p>
      <p>Sexo: {{ personaje.gender }}</p>
      <p>Color de ojos: {{ personaje.eye_color }}</p>
      <p>Color de cabello {{ personaje.hair_color }}</p>
      <p>Altura {{ personaje.height }}</p>

      <p>Fecha Creacion {{ personaje.created }}</p>
      <p>Fecha Actualizacion {{ personaje.edited }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="teal-accent-4" @click="reveal = true">
        Leer mas...
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">Peliculas que participo</p>
          <p v-for="(pelicula, index) in personaje.films" :key="index">
            <ActorPeliculas :url="pelicula" />
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn variant="text" color="teal-accent-4" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
import axios from "axios";
import ActorPeliculas from "../components/ActorPeliculas";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PersonajeRow",
  components: {
    ActorPeliculas,
  },
  data: () => ({
    personaje: {},
    reveal: false,
  }),
  props: ["rowProducto"],
  methods: {
    // eslint-disable-next-line no-unused-vars
    getInformationPersonaje() {
      axios
        .get(
          "http://localhost:8080/api/actor/" +
            this.rowProducto.toString().split("/")[5]
        )
        .then((element) => {
          this.personaje = element.data;
        });
    },
  },

  mounted() {
    this.getInformationPersonaje();
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
