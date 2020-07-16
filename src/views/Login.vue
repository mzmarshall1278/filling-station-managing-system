<template>
  <div class="container mt-3">
    <h3 class="text-center">Login</h3>
    <b-form @submit.prevent="onSubmit">
      <b-col sm="7" class="m-auto">
        <b-form-group id="input-group-2" label="User Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="email"
            v-model="form.name"
            required
            placeholder="Enter Email"
          ></b-form-input>
         
      </b-form-group>
      </b-col>
      <b-col sm="7" class="m-auto">
        <b-form-group id="input-group" label="Password:" label-for="input-2">
              <b-form-input 
              type="password"
                id="input"
                v-model="form.password"
                required
                placeholder="Enter Password"
              ></b-form-input>
            </b-form-group>
      </b-col>
      

      <b-col class="text-center">
        <b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
      <b-button  variant="danger" class="ml-3" @click="redirect">Create Account</b-button>
      </b-col>

      
    </b-form>
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password:'',
          
        },
              }
    },
    computed:{
      user(){
        return this.$store.state.user
      }
    },
    watch:{
      user(val){
        if(val !== null && val !== undefined) this.$router.push('/home')
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('login', {name: this.form.name, password: this.form.password})
      },
      redirect(){
        this.$router.push('/auth/createAccount')
      }
    }
  }
</script>