<template>
        <v-navigation-drawer expand-on-hover rail>
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Home" :to="'/'"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Dosen" :to="'/Dosen'"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Mahasiswa" :to="'/Mahasiswa'"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Ruangan" :to="'/Ruangan'"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
  </template>
  <script>
    export default {
      data () {
        return {
          drawer: true,
          rail: true,
        }
      },
    }
  </script>