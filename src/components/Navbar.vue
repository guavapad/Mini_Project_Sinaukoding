<template>
    <nav class="navbar nav-edit bg-kaler  fixed-top">
        <div class="container-fluid">
          <div class="left-logo">
            <!-- <a class="navbar-brand text-primary" href="#">MARKETPLACE</a> -->
            <h3 class="text-white navbar-brand fw-bold">MARKETPLACE</h3>
            <img src="../assets/sinau-koding.png" class="img-size" alt="">
          </div>
          <button class="navbar-toggler btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end bg-kaler" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">MarketPlace Sinau Koding</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item login">
                  <font-awesome-icon icon="fa-solid fa-right-to-bracket" class="me-1 text-white" />
                  <router-link :to="{name:'auth.login'}" class="nav-link text-white" aria-current="page">Log in</router-link>                
                </li>
                <li class="nav-item login">
                  <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="me-1 log text-white" />
                  <router-link :to="{name : 'supplier.list'}" class="nav-link text-white" aria-current="page">Log out</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
</template>
<style scoped>
.bg-kaler{
  background-color: #900C3F;
}
.log{
  border-color: aliceblue;
}
.img-size{
  height: 35px;
  width: 100px;
  margin: 0 !important;
}
.left-logo{
  margin-top: 0;
  padding: 5px 0 5px 0;
  display: flex;
  flex-direction: row;
  
}
.nav-edit{
  padding: 0 !important;
}
.login{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
}
</style>