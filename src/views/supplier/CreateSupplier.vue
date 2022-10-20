<script setup>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue';
import NavbarBottom from '../../components/NavbarBottom.vue';
</script>
<template>
    <Navbar />
    <div class="container cont">
        <div class="row">
            <div class="col-12">
                <div class="card rounded shadow cd-size">
                    <div class="card-header text-center bg-kaler text-white">Tambah Suplier</div>
                    <div class="card-body">
                        <form @submit.prevent="submitData()">
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
                            <div class="btn-st">
                                <div class="btn btn-secondary ">
                                    <router-link :to="{name : 'supplier.list'}" class="text-white">kembali</router-link>
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
.bg-kaler{
    background-color: #900C3F;
  }
.cd-size{
    width: 600px;
}
.btn-st{
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
        submitData: async function () {
            let dataSupplier = {
                namaSupplier: this.namaSupplier,
                alamat: this.alamat,
                noTelp: this.noTelp,
            }
            await axios.post("http://159.223.57.121:8090/supplier/create", dataSupplier, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            }).then(async (response) => {
                    console.log('berhasil', response)
                    const data = await response.data;
                    if (response.status === 200) {
                        this.$swal('data berhasil di edit')
                    }
                    this.$router.push('/supplier');
                    this.namaSupplier = '',
                    this.alamat = '',
                    this.noTelp = ''
                });
        },
        
    }

}
</script>