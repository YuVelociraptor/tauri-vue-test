<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const a = ref(10);
const b = ref(20);
const result = ref<number | null>(null);

const calculate = async () => {
  result.value = await invoke<number>("add", {
    a: a.value,
    b: b.value,
  });
};
</script>

<template>
  <main>
    <h1>Rustで計算してVueで表示</h1>
    <input v-model.number="a" type="number" />
    <input v-model.number="b" type="number" />
    <button @click="calculate">計算</button>
    <p v-if="result !== null">
      結果: {{ result }}
    </p>
  </main>
</template>

<style scoped>

</style>