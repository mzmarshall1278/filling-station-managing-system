<template>
    <div class="container mt-3">
       <div class="row">
    <b-card-group deck v-for="(operator, key) in  operators" :key="key" class="mt-3 col-xs-12 col-sm-6 col-md-4"  @click="loadOperator(operator.id)" style="cursor:pointer">
      <b-card bg-variant="info" text-variant="white"  class="text-center" :header="operator.id">
        <b-card-text>{{operator.name}}</b-card-text>
      </b-card>

      
    </b-card-group>
  </div>
        
    </div> 
</template>

<script>
export default {
    methods : {
        loadOperator(id){
            this.$router.push('/staffs/'+id)
        }        
    },
    computed:{
        operators(){
            return this.$store.state.operators
        }
    },
    
}
</script>
