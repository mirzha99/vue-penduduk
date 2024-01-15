<template>
    <div>
      <h1>Data User from Go Backend:</h1>
      <p>User : {{ user }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: '',
      };
    },
    mounted() {
      this.fetchDataFromBackend();
    },
    methods: {
      fetchDataFromBackend() {
        axios.get('http://localhost:3131/users',{withCredentials:true})
          .then(response => {
            this.mukim = response.data;
            console.log(response.data)
          })
          .catch(error => {
            console.error('Error fetching data from Go Backend', error);
          });
      },
    },
  };
  </script>
  