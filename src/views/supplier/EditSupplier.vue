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
                    <div class="card-header text-center bg-info text-white">Update Suplier</div>
                    <div class="card-body">
                        <form>
                            <div class="row mb-3 align-items-center">
                                <label class="col-form-label col-sm-2">Nama Supplier</label>
                                <div class="col-sm-10">
                                    <input class="form-control" placeholder="Masukan Nama Supplier"
                                        v-model="namaSupplier">
                                </div>
                            </div>
                            <div class="row mb-3 align-items-center">
                                <label class="col-form-label col-sm-2">Alamat Supplier</label>
                                <div class="col-sm-10">
                                    <input class="form-control" placeholder="Masukan Alamat Supplier" v-model="alamat">
                                </div>
                            </div>
                            <div class="row mb-3 align-items-center">
                                <label class="col-form-label col-sm-2">No. Telp Supplier</label>
                                <div class="col-sm-10">
                                    <input class="form-control" placeholder="Masukan No. Telp Supplier"
                                        v-model="noTelp">
                                </div>
                            </div>
                            <hr>
                        </form>
                        <div class='btn-st'>
                            <div class="btn btn-secondary ">
                                <router-link :to="{name : 'supplier.list'}" class="text-white">kembali</router-link>
                            </div>
                            <button @click="updateData()" class="btn btn-primary">Update</button>
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
    name: 'EditSupplier',
    data: function () {
        return {
            namaSupplier: '',
            alamat: '',
            noTelp: ''
        }
    },
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            const token = localStorage.getItem('token')
            const data = axios.get('http://159.223.57.121:8090/supplier/find-by-id/' + this.$route.query.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
                .then((response) => {
                    this.namaSupplier = response.data.data.namaSupplier
                    this.alamat = response.data.data.alamat
                    this.noTelp = response.data.data.noTelp
                })
                .catch((err) => {
                    console.log('error', err)
                })
        },
        async updateData(){
            const token = localStorage.getItem('token')
            const body = {
                namaSupplier : this.namaSupplier,
                alamat : this.alamat,
                noTelp : this.noTelp
            }
            axios.put('http://159.223.57.121:8090/supplier/update/'+this.$route.query.id,body,{
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':'Bearer '+token
                }
            })
            .then(()=>{
                this.$router.push('/supplier')
            })
            .catch((error)=>{
                console.log('error',error)
            })
        }

    }

}
</script>