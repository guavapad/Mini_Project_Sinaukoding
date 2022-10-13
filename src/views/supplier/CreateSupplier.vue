<script setup>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue';
import NavbarBottom from '../../components/NavbarBottom.vue';
</script>
<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card rounded shadow cd-size">
                    <div class="card-header text-center bg-info text-white">Tambah Suplier</div>
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
                        <div class="btn-st">
                            <div class="btn btn-secondary ">
                                <router-link :to="{name : 'supplier.list'}" class="text-white">kembali</router-link>
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
export default {
    name : 'CreateSupplier',
    data : function(){
        return {
            namaSupplier : '',
            alamat : '',
            noTelp : ''
        }
    },
    methods :{
        async submitData(){
            const token = localStorage.getItem('token')
            const body = {
                namaSupplier : this.namaSupplier,
                alamat : this.alamat,
                noTelp : this.noTelp
            }
            axios.post('http://159.223.57.121:8090/supplier/create',body,{
                headers : {
                    'content-type':'application/json',
                    'Authorization':'Bearer '+token
                }
            })
            .then((res)=>{
                console.log('response',res)
                alert('data berhasil ditambahkan')
                this.$router.push({name : 'supplier.list'})
            })
            .catch((err)=> {
                console.log('error', err)
            })
        }
        
    }

}
</script>