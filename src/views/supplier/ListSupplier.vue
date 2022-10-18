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
            <div class="col-2">
                <Profile />
                <Menu />
                <Online />
            </div>
            <div class="col-10">
                <div class="card rounded shadow">
                    <div class="card-header bg-kaler text-white">Dashboard</div>
                    <div class="card-header">
                        <div class="container-fluid tb-title">
                            <h2>Supplier</h2>
                            <router-link :to="{ name: 'supplier.create' }"
                                class="btn bg-kaler text-white btn-sm rounded shadow mb-3">Tambah Supplier
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Supplier</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">No. Telp</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, i) in dataTable" v-bind:key="data.id">
                                    <th scope="row">{{i + 1}}</th>
                                    <td>{{data.namaSupplier}}</td>
                                    <td>{{data.alamat}}</td>
                                    <td>{{data.noTelp}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click="updateData(data.id)" class="btn btn-warning btn-sm rounded shadow mb-3 mx-1">
                                                Edit
                                            </button>
                                            <button @click="deleteData(data.id)" class="btn btn-danger btn-sm rounded shadow mb-3 mx-1">
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
}
.left-menu{
    margin: 0 10px 0 10px;
  }
</style>
<script>
    import axios from "axios";
    export default {
      name: "ListSupplier",
      data: function () {
        return {
          dataTable: [],
        }
      },
      created() {
        this.getData();
      },
      methods: {
        async updateData(id){
            console.log('id',id)
            this.$router.push({name:'supplier.edit', query: {id:id}})
        },
        async getData() {
            const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        offset: 0,
                        limit: 15
                    }
                });
            console.log('data:', data.data);
            this.dataTable = await data.data;
        },
        async deleteData(id){
            console.log('id:',id);
            await axios.delete("http://159.223.57.121:8090/supplier/delete/" + id, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            }).then(async (response) => {
                const data = await response.data;
                if (data.status === 'OK') {
                    alert('Hapus  Supplier sukses');
                    this.getData();
                }
            });
        },
      }
    };
    </script>