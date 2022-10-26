<template>
    <div class="card rounded shadow">
        <!-- <font-awesome-icon icon="fa-solid fa-shirt" class="fa-5x" /> -->
        <font-awesome-icon icon="fa-solid fa-circle-user" class="fa-6x my-2" />
        <div class="card-body text-center text-white bg-kaler">
          <h2 class="card-title">{{nama}}</h2>
        </div>
      </div>
</template>
<style>
.bg-kaler{
  background-color: #900C3F;
}
</style>
<script>
export default {
  data : function(){
    return {
      nama : localStorage.getItem('username')
    }
  },
  
}
</script>

