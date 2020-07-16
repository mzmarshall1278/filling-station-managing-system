<template>
    <div class="container">
         <h3 class="text-center mt-3">Stats</h3>
    <b-card class="mt-3">
      <h4>Reservoir : {{reservoir}} litres</h4>
      <h4>Litres Sold : </h4>
      <div>
          <h5>Today: {{new Date().toISOString()}}</h5>
          <h5>Morning : 800 litres</h5> 
          <h5>Afternoon : 900 litres</h5>
          <h5>Evening : 1004 litres</h5>
        
      </div>
    </b-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
     computed: {
    reservoir(){
      return this.$store.state.reservoir
    }
  }
}
</script>
