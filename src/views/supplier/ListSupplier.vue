<script setup>
import Navbar from '../../components/Navbar.vue'
import NavbarBottom from '../../components/NavbarBottom.vue'
import Profile from '../../components/Profile.vue'
import Menu from '../../components/Menu.vue'
import Online from '../../components/Online.vue'
import SearchBar from '../../components/SearchBar.vue'
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
                                class="btn bg-kaler text-white btn-sm rounded shadow mb-2">Tambah Supplier
                            </router-link>
                        </div>
                        <div class="page-top">
                         <div class="me-2">
                            <div class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
                            </div>
                         </div>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><button @click="prev()" class="page-link bt"
                                            href="#">Previous</button></li>
                                    <!-- <li class="page-item"><a class="page-link" href="#">1</a></li> -->
                                    <li class="page-item"><a class="page-link">{{offset}}</a></li>
                                    <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                                    <li class="page-item"><button @click="next()" class="page-link bt"
                                            href="#">Next</button></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr class="">
                                    <th scope="col" class="col-1">No</th>
                                    <th scope="col" class="col-3 ">Nama Supplier</th>
                                    <th scope="col" class="col-3">Alamat</th>
                                    <th scope="col" class="col-2">No. Telp</th>
                                    <th scope="col" class="col-2 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, i) in filteredPost" v-bind:key="data.id">
                                    <th scope="row">{{i + 1}}</th>
                                    <td>{{data.namaSupplier}}</td>
                                    <td>{{data.alamat}}</td>
                                    <td>{{data.noTelp}}</td>
                                    <td>
                                        <div class="btn-group">
                                            <button @click="updateData(data.id)"
                                                class="btn btn-warning btn-sm rounded text-white shadow mb-3 mx-1">
                                                Edit
                                            </button>
                                            <button @click="deleteData(data.id)"
                                                class="btn btn-danger btn-sm rounded shadow mb-3 mx-1">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <div class="page">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item"><a @click="prev()" class="page-link"
                                                        href="#">Previous</a></li>
                                                <!-- <li class="page-item"><a class="page-link" href="#">1</a></li> -->
                                                <li class="page-item"><a class="page-link" href="#">{{offset}}</a></li>
                                                <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                                                <li class="page-item"><a @click="next()" class="page-link"
                                                        href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
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
a {
    color: #900C3F !important;
}

.page {
    display: flex;
    justify-content: center;
}

.bg-kaler {
    border-color: #900C3F;
}

.tb-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 !important;
}

.cont {
    margin-top: 70px;
}

.left-menu {
    margin: 0 10px 0 10px;
}

.page-top {
    display: flex;
    justify-content: flex-end;
}

.bt {
    color: #900C3F !important;
}

a {
    color: #900C3F !important;
}
</style>
<script>
import axios from "axios";
export default {
    name: "ListSupplier",
    data: function () {
        return {
            dataTable: [],
            offset: 1,
            search :''
        }
    },
    created() {
        this.getData();
    },
    methods: {
        next() {
            console.log('test')
            this.offset++
            this.getData()
        },
        prev() {
            console.log('tost')
            if (this.offset <= 1) {
                this.offset = 1
            } else {
                this.offset--
                this.getData()
            }
        },
        async updateData(id) {
            console.log('id', id)
            this.$router.push({ name: 'supplier.edit', params: { id: id } })
        },
        async getData() {
            const { data } = await axios.get("http://159.223.57.121:8090/supplier/find-all",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        offset: this.offset,
                        limit: 15
                    }
                });
            console.log('data:', data.data);
            this.dataTable = await data.data;
        },
        async deleteData(id) {
            console.log('id:', id);
            await axios.delete("http://159.223.57.121:8090/supplier/delete/" + id, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            }).then(async (response) => {
                const data = await response.data;
                if (data.status === 'OK') {
                    this.$swal('data berhasil dihapus')
                    this.getData();
                }
            });
        },
    },
    computed  :{
        filteredPost(){
            return this.dataTable.filter(dataTable => dataTable.namaSupplier.toLowerCase().includes(this.search.toLowerCase()))
        }
    }
};
</script>