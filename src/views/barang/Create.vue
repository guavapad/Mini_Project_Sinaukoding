<script setup>
import Navbar from '../../components/Navbar.vue';
import NavbarBottom from '../../components/NavbarBottom.vue';
</script>
<template>
    <Navbar />
    <div class="container cont">
        <div class="row">
            <div class="col-12">
                <div class="card rounded shadow cd-size">
                    <div class="card-header text-center">Tambah Barang</div>
                    <div class="card-body">
                        <form @submit.prevent="submitData()">
                            <div class="row mb-3 align-items-center">
                                <label class="col-form-label col-sm-2">Nama Barang</label>
                                <div class="col-sm-10">
                                    <input class="form-control" placeholder="Masukan Nama Barang" v-model="namaBarang">
                                </div>
                            </div>
                            <div class="row mb-3 align-items-center">
                                <label class="col-form-label col-sm-2">Harga Barang</label>
                                <div class="col-sm-10">
                                    <input class="form-control" placeholder="Masukan Harga Barang" v-model="harga">
                                </div>
                            </div>
                            <div class="row mb-3 align-items-center">
                                <label class="col-form-label col-sm-2">Stok Barang</label>
                                <div class="col-sm-10">
                                    <input class="form-control" placeholder="Masukan Jumlah Stok Barang" v-model="stok">
                                </div>
                            </div>
                            <div class="row mb-3 align-items-center">
                                <label class="col-form-label col-sm-2">Supplier Barang</label>
                                <div class="col-sm-10">
                                    <select class="form-select" aria-label="Default select example" v-model="supplier">
                                        <option :value="data" v-for="(data,index) in dataTable" v-bind:key="data.index">
                                            {{data.namaSupplier}}</option>
                                    </select>
                                </div>
                            </div>
                            <hr>
                            <div class="btn-st">
                                <div class="btn btn-secondary ">
                                    <router-link :to="{name : 'barang.index'}" class="text-white">kembali</router-link>
                                </div>
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <NavbarBottom />
</template>
<style>
.cd-size {
    width: 600px;
}

.btn-st {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.cont{
    display: flex;
    justify-content: center;
    align-items: center;
}  
</style>
<script>
import axios from 'axios';
export default {
    name: 'CreateBarang',
    data: function () {
        return {
            dataTable: [],
            namaBarang: '',
            harga: '',
            stok: '',
            supplier: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
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
        async submitData() {
            const token = localStorage.getItem('token')
            let body = {
                namaBarang: this.namaBarang,
                harga: this.harga,
                stok: this.stok,
                supplier: this.supplier
            }
            axios.post('http://159.223.57.121:8090/barang/create', body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
                .then((response) => {
                    console.log('response', response)
                    if (response.status === 200) {
                        this.$swal('data berhasil ditambah')
                    }
                    this.namaBarang = ''
                        this.harga = ''
                        this.stok = ''
                        this.supplier = ''
                    this.$router.push({ name: 'barang.index' })
                })
                .catch((error) => {
                    console.log('error', error)
                })
        }
    }
}
</script>