<script setup>
import Navbar from '../../components/Navbar.vue'
import NavbarBottom from '../../components/NavbarBottom.vue'
import Profile from '../../components/Profile.vue'
import Menu from '../../components/Menu.vue'
import Online from '../../components/Online.vue'
</script>
<template>
  <Navbar />
  <div class="cont">
    <div class="row justify-content-center left-menu">
      <div class="col-2 ">
        <Profile />
        <Menu />
        <Online />
      </div>
      <div class="col-10">
        <div class="card rounded shadow">
          <div class="card-header bg-kaler text-white">Dashboard</div>
          <div class="card-header">
            <div class="container-fluid tb-title">
              <h2>Barang</h2>
              <router-link :to="{ name: 'barang.create' }" class="btn bg-kaler btn-sm text-white rounded shadow mb-3">Tambah Barang
              </router-link>
            </div>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr class="text-center">
                  <th scope="col">No</th>
                  <th scope="col">Nama Barang</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Nama Supplier</th>
                  <th scope="col">Alamat Supplier</th>
                  <th scope="col">No. Telp Supplier</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data,index) in dataTable" v-bind:key="data.id">
                  <th scope="row">{{index+1}}</th>
                  <td>{{data.namaBarang}}</td>
                  <td>{{data.stok}}</td>
                  <td>{{data.harga}}</td>
                  <td>{{data.supplier.namaSupplier}}</td>
                  <td>{{data.supplier.alamat}}</td>
                  <td>{{data.supplier.noTelp}}</td>
                  <td>
                    <div class="btn-group">
                      <button @click="updateData(data.id)" class="btn btn-warning btn-sm rounded shadow mx-1">
                        Edit
                      </button>
                      <button @click="deleteData(data.id)" class="btn btn-danger btn-sm rounded shadow mx-1">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NavbarBottom />
</template>
<style>
.bg-kaler{
  background-color: #900C3F;
}
.tb-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cont{
  margin-top: 70px;
  margin-bottom: 70px;
}
.left-menu{
  margin: 0 10px 0 10px;
}
</style>
<script>
import axios from "axios";
export default {
  name: "BarangIndex",
  data: function () {
    return {
      dataTable: [],
    }
  },
  created() {
    this.getData();
    this.updateData()
  },
  methods: {
    async updateData(id){
      console.log('data-id',id )
      this.$router.push({name:'barang.edit', params: {id:id}})
    },
    async getData(){
      const token = localStorage.getItem('token')
      const data = axios.get('http://159.223.57.121:8090/barang/find-all', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
        params:{
          offset : 0,
          limit : 5
        }
      })
      this.dataTable = ((await data).data).data;
      console.log("data", this.dataTable);
    },
    async deleteData(id) {
            console.log('id:', id);
            await axios.delete("http://159.223.57.121:8090/barang/delete/" + id, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            }).then(async (response) => {
                const data = await response.data;

                if (data.status === 'OK') {
                    alert('Hapus Barang sukses');
                    this.getData();
                }
            });
        },   
  },
};
</script>
