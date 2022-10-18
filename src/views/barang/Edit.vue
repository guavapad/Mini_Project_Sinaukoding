<script setup>
import Navbar from '../../components/Navbar.vue';
import NavbarBottom from '../../components/NavbarBottom.vue';
</script>
<template>
    <Navbar />
    <div class="container-fluid cont">
        <div class="row">
            <div class="col-12">
                <div class="card rounded shadow cd-size mt-5">
                    <div class="card-header text-center text-white bg-kaler">Edit</div>
                    <div class="card-body">
                        <form @submit.prevent="updateData()">
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
                                            <option :value="data" v-for="(data,index) in dataSupplier"
                                                v-bind:key="data.index">
                                                {{data.namaSupplier}}</option>
                                        </select>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="btn-st">
                                <div class="btn btn-secondary ">
                                    <router-link :to="{name : 'barang.index'}" class="text-white">kembali</router-link>
                                </div>
                                <button class="btn bg-kaler text-white">Submit</button>
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
a{
    text-decoration: none;
}
.cd-size {
    width: 600px;
}

.btn-st {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.cont {
    display: flex;
    justify-content: center;
    align-items: center;
}
.bg-kaler{
    background-color: #900C3F;
  }
</style>
<script>
import axios from 'axios'
export default {
    name: 'EditBarang',
    data: function () {
        return {
            dataSupplier: [],
            namaBarang: '',
            harga: '',
            stok: '',
            supplier: []
        }
    },
    created() {
        this.getData()
        this.getDataOption()
    },
    methods: {
        async getData() {
            const id = this.$route.params.id;
            // console.log('id', id);
            const { data } = await axios.get("http://159.223.57.121:8090/barang/find-by-id/" + id,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        offset: 0,
                        limit: 15
                    }
                })
                .then((res) => {
                    this.namaBarang = res.data.data.namaBarang,
                        this.harga = res.data.data.harga,
                        this.stok = res.data.data.stok,
                        this.supplier = res.data.data.supplier
                    // console.log('data yang akan diupdate:', res.data);
                })
                .catch((err) => {
                    console.log('error', err)
                })

        },
        async getDataOption() {
            const { data } = await axios.get('http://159.223.57.121:8090/supplier/find-all', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                params: {
                    offset: 0,
                    limit: 10,
                }
            })
            // console.log('data:', data.data);
            this.dataSupplier = await data.data;
        },
        async updateData() {
            const token = localStorage.getItem('token')
            // const id = this.$route.params.id
            console.log('id',this.$route.params.id)
            let body = {
                namaBarang: this.namaBarang,
                harga: this.harga,
                stok: this.stok,
                supplier: this.supplier
            }
            await axios.put('http://159.223.57.121:8090/barang/update/' + this.$route.params.id, body, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
                .then((response) => {
                    // const data = await response.data
                    console.log('response',response)
                    if(response.status === 'OK'){
                        alert('Data Berhasil di update')
                    }
                    console.log('update ke data :', data)
                    this.$router.push('/')
                })
                .error((error) => {
                    console.log('error', error)
                })
            // body = ((await data).data).data;
        }
    }
}
</script>
