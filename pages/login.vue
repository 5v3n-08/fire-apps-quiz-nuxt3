<template>
  <div class="h-screen w-screen">
    <div class="bg-image" />
    <div class="h-full flex justify-center align-center p-5">
      <v-card class="text-center w-sm">
        <v-card-title class="flex justify-center">Anmeldung</v-card-title>
        <v-card-subtitle class="flex justify-center">
          Bitte melde dich mit deinem Account an oder erstelle einen neuen.
        </v-card-subtitle>
        <div class="p-4">
          <v-text-field
            label="E - Mail"
            hide-details="auto"
            v-model="email"
            :rules="[validateRequired]"
          />
          <v-text-field
            label="Passwort"
            hide-details="auto"
            v-model="password"
            :rules="[validateRequired]"
            :type="showPassword ? 'text' : 'password'"
          >
            <template v-slot:append>
              <v-icon
                :icon="!showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
                @click="showPassword = !showPassword"
              ></v-icon>
            </template>
          </v-text-field>

          <v-btn color="primary" @click="login">Anmelden</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// TODO: Remove empty space between VTextField by adding 'hide-details="auto"' not working.
// TODO: Remove password append icon slot with ':append-icon' and '@click:append'.
import {
  ERequestAuthenticationMode,
  useAuthentication,
} from "@/stores/authentication";
import { validateEmail, validateRequired } from "~~/helpers/validation";

const email = useState<string>("email", () => "");
const password = useState<string>("password", () => "");
const showPassword = useState<boolean>("showPassword", () => false);
const isLoading = useState<boolean>("isLoading", () => false);

const authenticationStore = useAuthentication();
const login = async () => {
  if (validateRequired(email.value) && validateEmail(password.value)) {
    isLoading.value = true;
    await authenticationStore.requestAuthentication(
      ERequestAuthenticationMode.login,
      { email: email.value, password: password.value }
    );
    isLoading.value = false;
  }
};
</script>

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
