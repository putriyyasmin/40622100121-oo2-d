<template>

    <v-container>
        <v-row>
            <v-text-field label="NPM" 
            variant="outlined" v-model="mhs.npm"></v-text-field>
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

</template>



<script lang="ts">
import {Mahasiswa} from '@/model/Mahasiswa'
import { maxHeaderSize } from 'http'
export default {
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.
    data() {
      return {
        mhs: new Mahasiswa (' ', ' ', 0)
      }
    },
    methods:{
        submitMahasiswa(){
            if(this.mhs.ipk > 4){
                alert('Nilai Ipk salah, IPK harus antara 0 dan 4');
            } else {
                alert('Data mahasiswa berhasil disimpan');
            }
    
            
        }
    }
  }
</script>