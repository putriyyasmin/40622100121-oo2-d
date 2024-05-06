<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="projek" nav>
      <template v-slot:append>
        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail =!rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        :prepend-icon="`mdi-${item.icon}`"
        :title="item.title"
        :value="item.value"
        :to="item.to"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
      navItems: [
        { icon: 'folder', title: 'Home', value: 'home', to: '/' },
        { icon: 'account', title: 'Dosen', value: 'dosen', to: '/dosen' },
        {icon: 'star', title: 'Mahasiswa', value: 'mahasiswa', to: '/mahasiswa'},
        { icon: 'star', title: 'Ruangan', value: 'ruangan', to: '/ruangan' }
      ]
    }
  }
}
</script>