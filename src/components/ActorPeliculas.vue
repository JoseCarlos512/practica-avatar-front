<template>
  <li>{{ nombre }}</li>
</template>

<script>
import axios from "axios";

export default {
  name: "ActorPeliculas",
  props: ["url"],
  data: () => ({
    nombre: "",
  }),
  methods: {
    showPeliculas() {
      axios.get(this.url).then((element) => {
        this.nombre = element.data.title;
      });
    },
  },

  mounted() {
    this.showPeliculas();
  },
};
</script>

<style scoped></style>
