<script>

</script>
<template>
    <div class="card rounded shadow my-2 ">
        <div class="card-header bg-kaler text-center text-white">
          Menu
        </div>
        <router-link :to="{name:'supplier.list'}" class="card-body menu">
          Supplier
        </router-link>
        <router-link :to="{name:'barang.index'}" class="card-body menu">
          Barang
        </router-link>
      </div>
</template>
<style>
.bg-kaler{
  background-color: #900C3F;
}
.menu{
  text-decoration: none !important;
}
</style>