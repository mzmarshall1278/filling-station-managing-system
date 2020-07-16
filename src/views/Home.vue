<template>
  <div class="container">
    <b-card>
      <h3 class="mt3 text-center">Users Duty</h3>
      <b-btn >Save</b-btn>
      <card v-for="(session, key) in sessions" :key="key" :session="session"></card>
    </b-card>  
  </div>
</template>

<script>
// @ is an alias to /src
import sessionCard from '@/components/SessionCard.vue'

export default {
  name: 'home',
  components: {
  card : sessionCard
  },
  data(){
    return {
      
    }
  },
  computed: {
    sessions(){
    return this.$store.state.sessions
    },
  },
  
}
</script>
