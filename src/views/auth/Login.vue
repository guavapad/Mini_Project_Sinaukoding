<template>
    <div class="row rw-length">
        <div class="col-6 text-center justify-content-center">
            <img src="../../assets/sinau-koding.png" class="w-100" alt="">
        </div>
        <div class="col-6">
            <div class="card rounded shadow">
                <div class="card-header text-center">Login</div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input class="form-control" placeholder="Enter Username" v-model="username">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="Enter Password" v-model="password">
                        </div>
                    </form>
                    <div class="text-center">
                        <button @click="submitData()" type="submit" class="btn btn-primary">Masuk</button>
                    </div>
                    <div class="text-center">
                        <router-link :to="{name : 'auth.register'}">Belum Punya Akun</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <NavbarBottom />
</template>
<style>
.rw-length{
    width: 100%;
}
</style>
<script>
import axios from 'axios'
import NavbarBottom from '../../components/NavbarBottom.vue'

export default {
    name: "AuthLogin",
    data: function () {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        async submitData() {
            const body = {
                username: this.username,
                password: this.password
            };
            axios.post("http://159.223.57.121:8090/auth/login", body)
                .then((response) => {
                    localStorage.setItem("token", response.data.data.token)
                    console.log("response", response);
                    alert("berhasil masuk");
                    
                    this.$router.push({ name: "barang.index" });
                    
                })
                .catch((error) => {
                    console.log("error nich", error);
                });
        }
    },
    components: { NavbarBottom }
}
</script>