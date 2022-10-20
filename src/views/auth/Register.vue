<template>
    <div class="container-md">
        <div class="row rw-length min-vh-100">
                <div class="col-6 text-center">
                    <img src="../../assets/sinau-koding.png" class="w-50" alt="">
                    <h1 class="fw-bold">Selamat Datang</h1>
                    <h5 class="fw-bold">MARKETPLACE Sinau Coding</h5>
                </div>
                <div class="col-6">
                    <div class="card rounded shadow">
                        <div class="card-header text-center text-white bg-kaler">Register</div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label class="form-label">UserName</label>
                                    <input class="form-control" placeholder="Enter Username" v-model="username">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Profile Name</label>
                                    <input class="form-control" placeholder="Enter Profile Name" v-model="profileName">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder="Enter Password"
                                        v-model="password">
                                </div>
                            </form>
                            <div class="text-center">
                                <button @click="submitData()" class="btn bg-kaler text-white">Submit</button>
                            </div>
                            <div class="text-center">
                                <router-link :to="{name : 'auth.login'}">Sudah Punya Akun</router-link>
                            </div>
                        </div>
                    </div>
    
                </div>
            <NavbarBottom />
        </div>
    </div>
</template>
<style>
a{
    text-decoration: none;
}
.bg-kaler{
    background-color: #900C3F;
  }
.rw-length{
    display: flex;
    flex-direction: row;
    align-items: center;    
    justify-content: center;
}


</style>
<script>
import axios from 'axios'
import NavbarBottom from '../../components/NavbarBottom.vue'

export default {
    name: "AuthRegister",
    data: function () {
        return {
            username: "",
            profileName: "",
            password: "",
        };
    },
    methods: {
        async submitData() {
            const body = {
                username: this.username,
                profileName: this.profileName,
                password: this.password
            };
            axios.post("http://159.223.57.121:8090/auth/register", body)
                .then((response) => {
                console.log("response", response);
                this.$swal('Berhasil Membuat Akun')
                this.$router.push({ name: "auth.login" });
            })
                .catch((error) => {
                console.log("error nich", error);
            });
        }
    },
    components: { NavbarBottom }
}
</script>