<template>
  <div style="width: 100%" class="mt-5">
    <div style="margin-left:-140px">
      <div class="bordered pa-2" style="width: fit-content">
        <h1><b>Entry Data Ruangan</b></h1>
        <v-sheet class="mx-auto" width="745">
          <v-container>
            <v-row>
              <v-text-field label="Kode" variant="outlined" v-model="rgn.kode"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field label="Nama" v-model="rgn.nama" variant="outlined"></v-text-field>
            </v-row>
            <v-row>
              <v-btn color="blue" @click="submitRuangan">SUBMIT</v-btn>
            </v-row>
          </v-container>
        </v-sheet>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Ruangan } from '@/model/Ruangan'
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      rgn: new Ruangan('', '')
    }
  },
  methods: {
    submitRuangan() {
      if (!this.rgn.nama && !this.rgn.kode) {
        alert('Field Nama dan Kode belum diisi ')
      } else if (!this.rgn.kode) {
        alert('Field Kode belum diisi')
      } else if (!this.rgn.nama) {
        alert('Field Nama belum diisi')
      } else {
        alert('Data Ruangan' + this.rgn.nama + 'berhasil disimpan')
      }
    }
  }
}
</script>

