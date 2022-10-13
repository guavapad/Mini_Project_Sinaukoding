<template>
    <nav class="navbar nav-edit bg-info fixed-top">
        <div class="container-fluid">
          <div class="left-logo">
            <!-- <a class="navbar-brand text-primary" href="#">MARKETPLACE</a> -->
            <h3 class="text-primary navbar-brand fw-bold">MARKETPLACE</h3>
            <img src="../assets/sinau-koding.png" class="img-size" alt="">
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-info" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title text-white" id="offcanvasDarkNavbarLabel">MarketPlace Sinau Koding</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <router-link :to="{name:'barang.index'}" class="nav-link text-white" aria-current="page">List Barang</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name : 'supplier.list'}" class="nav-link text-white" aria-current="page">List Supplier</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
</template>
<style scoped>
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
</style>