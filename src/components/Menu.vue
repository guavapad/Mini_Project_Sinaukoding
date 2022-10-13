<script>

</script>
<template>
    <div class="card rounded shadow my-2 ">
        <div class="card-header bg-info">
          Menu
        </div>
        <router-link :to="{name:'supplier.list'}" class="card-body bg-light menu">
          Supplier
        </router-link>
        <router-link :to="{name:'barang.index'}" class="card-body menu">
          Barang
        </router-link>
      </div>
</template>
<style>
.menu{
  text-decoration: none !important;
}
</style>