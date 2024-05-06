<template>
  <div style="width: 100%;" class="mt-5">
    <div style="margin-left: -140px">
      <div class="bordered pa-2" style="width: fit-content;">
        <h1><b>Entry Data Dosen</b></h1>
        <v-sheet class="mx-auto" width="745">
          <v-container>
            <v-row>
              <v-text-field label="NIDN" variant="outlined" v-model="dsn.nidn"></v-text-field>
            </v-row>
            <v-row>
              <v-text-field label="Nama" v-model="dsn.nama" variant="outlined"></v-text-field>
            </v-row>
            <v-row>
              <v-btn color="blue" @click="submitDosen">SUBMIT</v-btn>
            </v-row>
          </v-container>
        </v-sheet>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Dosen } from '@/model/Dosen'
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      dsn: new Dosen(' ', '')
    }
  },
  methods: {
    submitDosen() {
      if (!this.dsn.nidn && !this.dsn.nama) {
        alert('Field NIDN dan Nama belum diisi')
      } else if (!this.dsn.nidn) {
        alert('Field NIDN belum diisi')
      } else if (!this.dsn.nama) {
        alert('Field Nama belum diisi')
      } else {
        alert('Data Dosen' + this.dsn.nama + 'berhasil disimpan')
      }
    }
  }
}
</script>

