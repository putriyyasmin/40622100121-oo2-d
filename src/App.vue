<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MhsForm from '@/components/MahasiswaForm.vue'
import LethNav from '@/components/navbar/LethNav.vue'
</script>

<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar title="Aplikasi penjadwalan kuliah"></v-app-bar>

      <LethNav> </LethNav>
  
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <RouterView> </RouterView>
      </v-main>
    </v-layout>
  </template>
