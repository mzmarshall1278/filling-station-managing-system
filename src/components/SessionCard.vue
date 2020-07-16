<template>
    <div class="container">
        <b-card  class="mt-2">
          <h3>{{session.session}}</h3>
          <!-- <p>{{GetSession}}</p> -->
          <p>{{pp}}</p>
      </b-card> 
    </div>
</template>
<script>
export default {
    props: ['session'],
    mounted(){
        return this.$store.getters.getAllSessions
    },
    computed : {
        GetSession(){
            return this.$store.state.duties
        },
        pp(){
            
        }
    }
}
</script>