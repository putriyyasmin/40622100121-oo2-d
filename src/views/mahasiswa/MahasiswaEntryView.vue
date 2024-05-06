<template>
  <div style="width: 100%" class="mt-5">
    <div style="margin-left: -140px">
      <div class="bordered pa-2" style="width: fit-content">
        <h1><b>Entry Data Mahasiswa</b></h1>
        <v-sheet class="mx-auto" width="745">
          <v-container>
            <v-row>
              <v-text-field label="Npm" variant="outlined" v-model="mhs.npm"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field label="Nama" v-model="mhs.nama" variant="outlined"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field label="Ipk" v-model="mhs.ipk" variant="outlined"></v-text-field>
            </v-row>
            <v-row>
              <v-btn color="blue" @click="submitMahasiswa">SUBMIT</v-btn>
            </v-row>
          </v-container>
        </v-sheet>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Mahasiswa } from '@/model/Mahasiswa'
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      mhs: new Mahasiswa('', '', 0)
    }
  },
  methods: {
    submitMahasiswa() {
      if (!this.mhs.npm &&!this.mhs.nama &&!this.mhs.ipk) {
        alert('Field NPM, Nama dan IPK belum diisi')
      } else if (!this.mhs.npm) {
        alert('Field NPM belum diisi')
      } else if (!this.mhs.nama) {
        alert('Field Nama belum diisi')
      } else if (!this.mhs.ipk) {
        alert('Field IPK belum diisi')
      } else if (this.mhs.ipk < 0 || this.mhs.ipk > 4) {
        alert('IPK harus diantara 0 sampai 4')
      } else {
        alert('Data Mahasiswa' + this.mhs.nama + 'berhasil disimpan')
      }
    }
  }
}
</script>


