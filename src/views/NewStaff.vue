<template>
    <div class="container mt-3">
        <h3 class="text-center">Create staff</h3>

        <b-form @submit.prevent="onSubmit">
            
            <b-col sm="7" class="m-auto">
                <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.firstName"
                    required
                    placeholder="First Name"
                ></b-form-input>
            </b-form-group>
            </b-col>

            <b-col sm="7" class="m-auto">
                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                    <b-form-input 
                        id="input-2"
                        v-model="form.lastName"
                        required
                        placeholder="Last Name"
                    ></b-form-input>
                    </b-form-group>
            </b-col>

            <b-col sm="7" class="m-auto">
                <b-form-group id="input-group-2" label="Date of birth:" label-for="input-2">
                    <b-form-input 
                        id="input-2"
                        v-model="form.DOB"
                        required
                        placeholder="MM/DD/YYYY"
                    ></b-form-input>
                    </b-form-group>
            </b-col>

            <b-col sm="7" class="m-auto">
                <b-form-group id="input-group-2" label="Address:" label-for="input-2">
                    <b-form-textarea 
                        id="input-2"
                        v-model="form.address"
                        required
                        placeholder="Address"
                    ></b-form-textarea>
                    </b-form-group>
                    <b-form-group>
                        <b-button type="submit">Submit</b-button>
                    </b-form-group>
            </b-col>
        </b-form>      
    </div>
</template>
<script>
export default {
    data(){
        return {
            form : {
                firstName: '', lastName: '', DOB :'', address :'', 
            }
        }
    },
    methods : {
        
        onSubmit(){
            let newUser = {
            firstName : this.form.firstName,
            lastName : this.form.lastName,
            DOB : this.form.DOB,
            address : this.form.address,
        }
        this.$store.dispatch('newUser', newUser);
        this.$router.push('/staffs');
        }
        
    }
}
</script>
