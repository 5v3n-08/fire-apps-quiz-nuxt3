<template>
  <div>
    <div>{{ props.name }}</div>
    <v-btn @click="getAlert">Press me!</v-btn>
    <h4>Pokemon: {{ pokemon }}</h4>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  name: string;
}

const emits = defineEmits(["pressed"]);
const props = withDefaults(defineProps<IProps>(), {
  name: "UNKOWN",
});
// const props = defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
// });
const pokemon = useState<String | null>("pokemon", () => null);

const getAlert = async () => {
  const info = await (
    await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  ).json();
  pokemon.value = info.name;

  emits("pressed", pokemon.value);
};
</script>

<style scoped></style>
