<template>
  <div>{{ state.double }}</div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { useCounter } from "./stores/counter";
const state = useCounter();
</script>

<style scoped></style>
