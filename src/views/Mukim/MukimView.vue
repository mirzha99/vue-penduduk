<template>
  <div>
    <h1>Mukim</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <RouterLink class="btn btn-primary my-2" to="/mukimadd">Tambah Mukim</RouterLink>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Nama Imum Mukim</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(mukimItem,indek) in mukim" :key="mukimItem.nama">
            <td>{{indek +1 }} .</td>
            <td>{{ mukimItem.nama }}</td>
            <td>{{ mukimItem.nama_imum_mukim }}</td>
            <td>
              <RouterLink class="btn btn-warning my-2 mx-2" :to="'/mukimedit/' + mukimItem.id">Edit</RouterLink>
              <RouterLink class="btn btn-danger my-2 mx-2" to="/mukimhapus">Hapus</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mukim: [],
      loading: true,
    };
  },
  mounted() {
    this.in()
    this.fetchDataFromBackend();
  },
  methods: {
    in(){
      const data = {
        nama: "test ini",
        nama_imum_mukim :"test mukim" 
      }
      axios.post('http://localhost:3131/mukim',data, { withCredentials: true })
        .then(response => {
          this.mukim = response.data.mukim;
        })
        .catch(error => {
          console.error('Error fetching data from Go Backend', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    fetchDataFromBackend() {
      axios.get('http://localhost:3131/mukims', { withCredentials: true })
        .then(response => {
          this.mukim = response.data.mukim;
        })
        .catch(error => {
          console.error('Error fetching data from Go Backend', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
/* Add any custom styling for the component if needed */
</style>
