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
                    <div class="card-header text-center">Tambah Barang</div>
                    <div class="card-body">
                        <form>
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
                                    <select  class="form-select" aria-label="Default select example" v-model="supplier">
                                        <option :value="data.supplier" v-for="data in dataTable" v-bind:key="data.id">{{data.namaSupplier}}</option>
                                    </select>
                                </div>
                            </div>
                            <hr>
                        </form>
                        <div class="btn-st">
                            <div class="btn btn-secondary ">
                                <router-link :to="{name : 'barang.index'}" class="text-white">kembali</router-link>
                            </div>
                            <button @click="submitData()" class="btn btn-primary">Submit</button>
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
import axios from 'axios';
export default {
    name: 'CreateBarang',
    data: function () {
        return {
            dataTable: [],
            namaBarang:'',
            harga:'',
            stok:'',
            supplier:[]
        }
    },
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            const token = localStorage.getItem('token')
            const data = await axios.get('http://159.223.57.121:8090/supplier/find-all', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                },
                params: {
                    offset: 0,
                    limit: 5
                }
            })
            this.dataTable = ((await data).data).data
            console.log('data', this.dataTable)
        },
        async submitData(){
            const token = localStorage.getItem('token')
            const body = {
                namaBarang : this.namaBarang,
                harga      : this.harga,
                stok       : this.stok,
                supplier   : this.supplier
            }
            axios.post('http://159.223.57.121:8090/barang/create',body,{
                headers : {
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+token
                }
            })
            .then((response)=>{
                if(response===201){
                alert('Data berhasil ditambah')
                this.namaBarang = '',
                this.harga = '',
                this.stok = '',
                this.supplier = {}
                this.$router.push({name:'barang.index'})
                }                
            })
            .catch((error)=>{
                console.log('error',error)
            })
        }
    }
}
</script>