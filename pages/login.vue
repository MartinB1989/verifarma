<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Contraseña

        <span
          class="text-caption text-decoration-none text-blue cursor-pointer"
          rel="noopener noreferrer"
          target="_blank"
          @click="forgotPassword"
        >
          ¿Olvidaste tu contraseña?
        </span>
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Ingresa tu contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        :loading="loading"
        @click="() => onLogin(email, password)"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useSnackbar } from '../stores/snackbar'
import { ref } from 'vue'
// const { loading, login } = useLogin()

definePageMeta({
  layout: 'clear',
})

const snackbar = useSnackbar()
const router = useRouter()
const password = ref('')
const email = ref('')
const loading = ref(false)

function forgotPassword() {
  snackbar.showSnackbar(
    'success',
    'Si olvidaste tu contraseña te recomiendo tomes algún suplemento para la memoria'
  )
}

async function onLogin(email: string, password: string) {
  console.log('Iniciando session')
  if (email && password) {
    router.push('/')
  } else {
    snackbar.showSnackbar('error', 'Debes completar los campos primero')
  }
  // const { data, error } = await login(email, password)
  // if (error) {
  //   const errorMessage =
  //     data?.message ||
  //     'Ocurrio un error al intentar iniciar sesión, intentalo nuevamente'
  //   snackbar.showSnackbar('error', errorMessage)
  // }
}

const visible = ref(false)
</script>

<style scoped></style>
