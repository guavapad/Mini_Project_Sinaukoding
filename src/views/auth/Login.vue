<template>
    <div class="row min-vh-100 rw-length">
        <div class="col-6 text-center justify-content-center">
            <img src="../../assets/sinau-koding.png" class="w-50" alt="">
            <h1 class="fw-bold">Selamat Datang</h1>
            <h5 class="fw-bold">MARKETPLACE Sinau Coding</h5>
        </div>
        <div class="col-6">
            <div class="card rounded shadow">
                <div class="card-header text-center bg-kaler text-white">Login</div>
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
                        <button @click="submitData()" type="submit" class="btn btn-primary text-white bg-kaler">Masuk</button>
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
    padding-right: 80px;
    padding-left: 80px;
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
                    localStorage.setItem("username", response.data.data.username)
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