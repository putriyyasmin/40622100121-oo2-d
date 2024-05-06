<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MhsForm from '@/components/MahasiswaForm.vue'
import LeftNav from '@/components/navbar/LeftNav.vue'
</script>

<template>
  <v-app style="margin-left: -50px;">
    <v-app-bar title="Aplikasi Penjadwalan Kuliah" dense></v-app-bar>
    <LeftNav />
    <v-main style="width: 100dvw;">
      <router-view />
    </v-main>
  </v-app>
</template>
