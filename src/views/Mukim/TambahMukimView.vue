<template>
    <div>
      <h1>Tambah Mukim</h1>
      <form @submit.prevent="addMukim">
        <div class="mb-3">
          <label for="nama" class="form-label">Nama</label>
          <input v-model="nama" type="text" class="form-control" id="nama" placeholder="Nama Mukim" required>
        </div>
        <div class="mb-3">
          <label for="nama_imum_mukim" class="form-label">Nama Imum Mukim</label>
          <input v-model="nama_imum_mukim" type="text" class="form-control" id="nama_imum_mukim" placeholder="Nama Imum Mukim" required>
        </div>
        <button type="submit" class="btn btn-primary">Tambah Mukim</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nama: '',
        nama_imum_mukim: ''
      };
    },
    methods: {
      addMukim() {
        const endpoint = 'http://localhost:3131/mukim/'; // Ganti dengan URL endpoint Anda
        const data = {
          nama: this.nama,
          nama_imum_mukim: this.nama_imum_mukim
        };
  
        // Mengirim permintaan POST tanpa header autentikasi khusus
        axios.post(endpoint, data, { withCredentials: true })
          .then(response => {
            console.log(response.data);
            // Tambahkan logika setelah sukses menambahkan Mukim
            this.$router.push('/mukim')
          })
          .catch(error => {
            console.error('Error:', error.response.data);
            // Tambahkan logika untuk menangani kesalahan
            if (error.response.status == 409){
              alert(error.response.data.Message)
            }
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya CSS khusus untuk komponen ini */
  </style>
  