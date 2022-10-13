<script setup>
import Navbar from '../../components/Navbar.vue';
import NavbarBottom from '../../components/NavbarBottom.vue';
</script>
<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card rounded shadow cd-size">
                    <div class="card-header text-center">Edit</div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <div class="row mb-3 align-items-center">
                                    <label class="col-form-label col-sm-2">Nama Barang</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" placeholder="Masukan Nama Barang"
                                            v-model="namaBarang">
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
                                        <input class="form-control" placeholder="Masukan Jumlah Stok Barang"
                                            v-model="stok">
                                    </div>
                                </div>
                                <div class="row mb-3 align-items-center">
                                    <label class="col-form-label col-sm-2">Supplier Barang</label>
                                    <div class="col-sm-10">
                                        <select class="form-select" aria-label="Default select example"
                                            v-model="supplier">
                                            <option :value="data.id" v-for="data in supplier" v-bind:key="data.id">{{data.namaSupplier}}</option>
                                        </select>
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </form>
                        <div class="btn-st">
                            <div class="btn btn-secondary ">
                                <router-link :to="{name : 'barang.index'}" class="text-white">kembali</router-link>
                            </div>
                            <button @click="updateData()" class="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <NavbarBottom />
</template>
<style>
.cd-size{
    width: 600px;
}
.btn-st{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
<script>
import axios from 'axios'
export default {
    name: 'EditBarang',
    data: function () {
        return {
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
            const token = localStorage.getItem('token')
            const data = axios.get('http://159.223.57.121:8090/barang/find-by-id/' + this.$route.params.id
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token
                    },
                    //     params: {
                    //     offset: 0,
                    //     limit: 5
                    // }
                })
                .then((response) => {
                    console.log('berhasil', response)
                    this.namaBarang = response.data.data.namaBarang
                    this.harga = response.data.data.harga
                    this.stok = response.data.data.stok
                    this.supplier = response.data.data.supplier
                })
                .catch(error => {
                    console.log('error', error)
                })
        },
        async updateData(){
            const token = localStorage.getItem('token')
            const body = {
                namaBarang : this.namaBarang,
                harga      : this.harga,
                stok       : this.stok,
                supplier   : this.supplier
            }
            axios.put('http://159.223.57.121:8090/barang/update/'+ this.$route.query.id, body, {
                headers : {
                    'Content-Type':'application/json',
                    'Authorization' : 'Bearer '+token
                }
            })
            .then((response)=>{
                alert('Data Berhasil di update')
                this.$router.push('/')
                // this.namaBarang = '',
                // this.harga = '',
                // this.stok = '',
                // this.supplier = ''
                // this.getData()
            })
            .error((error)=>{
                console.log('error', error)
            })
            // body = ((await data).data).data;
        }
    }
}
</script>
