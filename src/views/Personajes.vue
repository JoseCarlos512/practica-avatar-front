<template>
  <v-row style="margin-top: 10px">
    <v-col cols="12" class="text-h4 text--primary mt-12 mx-6">
      Lista de Actores que participaron en la pelicula
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
      v-for="(producto, index) in listaPersonajes"
      :key="index"
    >
      <PersonajeRow :rowProducto="producto" />
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import PersonajeRow from "../components/Personaje";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Personajes",
  components: {
    PersonajeRow,
  },
  data: () => ({
    listaPersonajes: [],
    reveal: false,
  }),

  methods: {
    // eslint-disable-next-line no-unused-vars
    getListaPersonajes(id_pelicula) {
      console.log(id_pelicula);

      axios.get("http://localhost:8080/api/peliculas").then((element) => {
        element.data.forEach((row) => {
          if (id_pelicula.toString() === row.episode_id) {
            this.listaPersonajes = row.characters;
          }
        });
      });
    },
  },

  mounted() {
    this.getListaPersonajes(this.$route.params.id);
  },
};
</script>
