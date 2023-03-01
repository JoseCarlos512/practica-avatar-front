<template>
  <v-card class="mx-auto" width="400">
    <v-card-text>
      <div>birth_year: {{ personaje.birth_year }}</div>
      <p class="text-h4 text--primary">{{ personaje.name }}</p>
      <p>Gender: {{ personaje.gender }}</p>
      <p>eye_color {{ personaje.eye_color }}</p>
      <p>hair_color {{ personaje.hair_color }}</p>
      <p>height {{ personaje.height }}</p>

      <p>created {{ personaje.created }}</p>
      <p>edited {{ personaje.edited }}</p>
    </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PersonajeRow",
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

<style scoped></style>
