<template>
  <ListaPeliculas />
</template>

<script>
import { defineComponent } from "vue";

// Components
import ListaPeliculas from "../components/ListaPeliculas.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    ListaPeliculas,
  },
});
</script>
