<script setup lang="ts">
import { ref } from "vue";
const strComma = ref("");
</script>

<template>
  <h1>Menu02</h1>
  <input v-model="strComma" />
  <div v-if="strComma !== null">
    <p v-for="(item, index) in strComma.split(',')" :key="index">
      {{ item }}
    </p>
  </div>
  <p v-else>
    It's null.
  </p>
</template>

<style scoped>

</style>
