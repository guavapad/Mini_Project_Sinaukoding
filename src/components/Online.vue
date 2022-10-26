<template>
    <div class="card rounded shadow my-2">
        <div class="card-header bg-kaler text-center text-white">
          Online
        </div>
        <div class="card-body bg-light">
          <p class="font"><strong> Online : </strong>
            <!-- <VueClock /> -->{{date}}
          </p>
          <p class="font" v-show="time"><strong>Waktu Online : </strong>{{time}}</p>
        </div>
      </div>
</template>
<style>
.bg-kaler{
  background-color: #900C3F;
}
.font{
  font-size: small;

}
</style>
<script>
// import VueClock from '@dangvanthanh/vue-clock'
export default {
  // components : {VueClock},
  data : function(){
    return{
      time : '',
      date : ''
    }
  },
  methods: {
    printTime: function(){
      return new Date().toLocaleTimeString();
    },
    printDate : function(){
      return new Date().toLocaleDateString();
    }

  },
  mounted : function(){
    this.time  = this.printTime()
    this.date = this.printDate()
  }
}
</script>