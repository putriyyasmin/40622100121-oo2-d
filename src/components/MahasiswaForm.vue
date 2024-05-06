<template>
  <v-container>
    <div class="outer-box">
      <h2>Entry Data Mahasiswa</h2>
      <v-row>
        <v-text-field label="NPM" variant="outlined" v-model="mhs.npm"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field label="Nama" v-model="mhs.nama" variant="outlined"></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          label="IPK"
          v-model="mhs.ipk"
          variant="outlined"
          type="number"
          :rules="ipkRules"
        ></v-text-field>
      </v-row>
      <v-row> 
      </v-row>
    

      <v-row>
        <v-btn color="blue" @click="submitMahasiswa">SUBMIT</v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Mahasiswa } from '@/model/Mahasiswa';

export default {
  data() {
    return {
      mhs: new Mahasiswa('', '', 0),
      ipkRules: [
        (value: number) => value >= 0 && value <= 4 || 'IPK tidak bisa melebihi 4',
      ],
    };
  },
  methods: {
    submitMahasiswa() {
      if (!this.mhs.npm || !this.mhs.nama || !this.mhs.ipk) {
          alert('Field Semua Data Belum terisi')
      }else if (this.mhs.ipk > 4) {
        alert('IPK melebihi 4. Data tidak dapat disimpan.');  
        }else {
          alert('Data mahasiswa ' + this.mhs.nama + ' berhasil disimpan');
          this.resetForm();
        }
    },
    resetForm() {
      this.mhs = new Mahasiswa('', '', 0);
    },
  },
};
</script>

<style scoped>
h2 {
padding-bottom: 30px;
}

.outer-box {
border: 2px solid #ccc;
padding: 80px;
}
</style>