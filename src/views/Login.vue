<template>
  <div class="container mt-3">
    <h3 class="text-center">Login</h3>
    <b-form @submit.prevent="onSubmit">
      <b-col sm="7" class="m-auto">
        <b-form-group id="input-group-2" label="User Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
         
      </b-form-group>
      </b-col>
      <b-col sm="7" class="m-auto">
        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
              <b-form-input 
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
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
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      redirect(){
        this.$router.push('/auth/createAccount')
      }
    }
  }
</script>