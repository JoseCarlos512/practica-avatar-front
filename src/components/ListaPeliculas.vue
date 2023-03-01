<template>
  <v-row>
    <v-col cols="12" class="text-h4 text--primary mt-12 mx-6">
      Peliculas de Start Wars
    </v-col>
    <v-col cols="12" class="mt-12 mx-6">
      <v-card
        v-for="(pelicula, i) in listaPeliculas"
        :key="i"
        class="mx-auto mb-6"
        max-width="600"
        @click="goListaPersonajes(pelicula.episode_id)"
      >
        <v-card-text>
          <div>{{ pelicula.director }}</div>
          <p class="text-h4 text--primary">
            {{ pelicula.title }}
          </p>
          <p class="text-green">Productor: {{ pelicula.producer }}</p>
          <div class="text--primary">
            {{ pelicula.opening_crawl }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    show: false,
    listaPeliculas: [],
  }),

  methods: {
    loadAllMovies() {
      axios.get("http://localhost:8080/api/peliculas").then((element) => {
        this.listaPeliculas = element.data;
      });
    },
    goListaPersonajes(id_pelicula) {
      this.$router.push({
        name: "personajes",
        params: { id: id_pelicula },
      });
    },
  },

  mounted() {
    this.loadAllMovies();
  },
};
</script>
