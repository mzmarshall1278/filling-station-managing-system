<template>
    <div class="container mt-3">
        <h3 class="text-center">Operation</h3>
        <b-card>
            <h4>Pump:    head:  </h4>
            <h5>Session : </h5>
            <h5>Reservoir: {{reservoir}} Litres left</h5>
            <div v-if="warning" class="text-danger mb-3">
                {{warning}}
            </div> 
            <b-form @submit.prevent="onSubmit">
                <b-col sm="7" class="m-auto">
                    <b-form-group id="input-group-2" label="Price(NGN):" label-for="input-2">
                    <b-form-input
                    type="number"
                        id="input-2"
                        v-model="form.price"
                        required
                        placeholder="Price"
                    ></b-form-input>
                </b-form-group>
                </b-col>
                
                <b-col sm="7" class="m-auto">
                    <b-form-group id="input-group-2" label="Ammount(Litres):" label-for="input-2">
                    <b-form-input
                        id="input-2"
                        v-model="form.ammount"
                        required
                        placeholder="Ammont"
                    ></b-form-input>
                </b-form-group>
                </b-col>

                <b-col sm="7" class="m-auto">
                    <b-form-group id="input-group-2" label="Method of Payment:" label-for="input-2">
                    <b-form-radio value="cash" name="payment" v-model="form.payment" class="mt-1">Cash</b-form-radio>
                    <b-form-radio value="card" name="payment" v-model="form.payment" class="mt-1">Card</b-form-radio>
                </b-form-group>
                <b-form-group>
                    <b-button type="submit">Submit</b-button>
                </b-form-group>
                </b-col>
            </b-form>
        </b-card>
        
        <b-card class="mt-2">
            <h4>Logs</h4>
            <div v-for="(log, key) in getlogs" :key="key" class="mt-3" style="border-bottom:1px solid midnightblue">
                <h5>time: {{log.time}}</h5>
                <h5>Price: {{log.ammountPaid}}</h5>
                <h5>Liters: {{log.litresSold}}</h5>
                <h5>Payment method: {{log.payment}}</h5>
            </div>
        </b-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                price:'', ammount:'', payment:''
            },
            warning : null
        }
    },
    methods:{
        onSubmit(){
            let operation = {
                user : `${this.user.firstName} ${this.user.lastName}`,
                id: this.user.id,
                price : this.form.price,
                ammount : this.form.ammount,
                payment : this.form.payment

            }
            this.$store.dispatch('operation', operation);
            this.form.price = '';
            this.form.ammount = '';
            this.form.payment = '';
        },
        
    },
    computed: {
        user(){
            return this.$store.state.user
        },
        litre(){
            return this.$store.state.litre
        },
        reservoir(){
            return this.$store.state.reservoir
        },
        getlogs(){
            return this.$store.getters.getOperatorLogs(this.user.id)
        }
    },
watch:{
    reservoir(){
        if(this.reservoir < 500) this.warning = "Reservoir is less than 500 litres"
    }
}
}
</script>
