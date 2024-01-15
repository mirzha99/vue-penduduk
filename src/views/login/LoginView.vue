<template>
    <div class="container">
      <h1 class="mt-5">Login</h1>
      <div class="card mt-4">
        <div class="card-body">
          <form @submit.prevent="logins">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input v-model="username" class="form-control" type="text" name="username" placeholder="Username">
            </div>
  
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="password" class="form-control" type="password" name="password" placeholder="Password">
            </div>
  
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      logins() {
        // Implementasi logika login di sini
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        const endpoint = 'http://localhost:3131/login'; // Ganti dengan URL endpoint autentikasi Anda
      const data = {
        username: this.username,
        password: this.password
      };
        axios.post(endpoint,data,{withCredentials : true}).then(response=>{
            console.log(response.data)
        }).catch(error => {
          console.error('Error:', error.response.data);
          // Tambahkan logika untuk menangani kesalahan di sini
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya CSS khusus untuk komponen ini */
  .container {
    max-width: 400px;
    margin: auto;
  }
  /* Gaya lainnya */
  </style>
  