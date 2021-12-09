<template>
  <div>Test</div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), {
  msg: "hello",
  labels: () => ["one", "two"],
});
interface Props {
  msg?: string;
  labels?: string[];
}
</script>

<style scoped></style>
