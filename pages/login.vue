<template>
  <div class="h-screen w-screen">
    <div class="bg-image" />
    <div class="h-full flex justify-center align-center">
      <v-card class="text-center">
        <v-card-title>Anmeldung</v-card-title>
        <v-card-text>sas</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-image {
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("~/assets/images/auth_background.jpg");
  background-size: cover;
}
</style>
