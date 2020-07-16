<template>
    <div class="container mt-3">
        <h3 class="text-center">Staff's Profile</h3>
        <b-card class="pl-5">
            <h5>Id : {{id}}</h5>
            <h5>Name : {{getStaff.name}}</h5>
            <h5>Date of birth : {{getStaff.DOB}}</h5>
            <h5>Address : {{getStaff.address}}</h5>      
            <h5>Duty : Pump {{getPumpDuty.number}} Head {{getHeadDuty.name}}   </h5>
            <h5>Session : {{getSessionDuty.session}}</h5>
            <!-- <b-card-body>
                <b-card class="container mt-2 col-md-8 text-left" v-for="(log, key) in logs" :key="key">
                    <h5><b>Time :</b> {{log.time}}</h5>
                    <h6><b>Pump Number :</b> {{log.pumpNumber}}</h6>
                    <h6><b>Head :</b> {{log.head}}</h6>
                    <h6><b>operator :</b> {{log.operator}}</h6>
                    <h6><b>Ammount Payed : NGN</b> {{log.ammountPaid}}</h6>
                    <h6><b>Payment Method :</b> {{log.payment}}</h6>

                </b-card>
            </b-card-body> -->
        </b-card>
        
    </div>
</template>
<script>
export default {
    props : ['id'],
    data(){
        return {

        }
    },
    computed :{
        logs(){
            return this.$store.getters.getTenLogs(this.id)
        },
        getStaff(){
            return this.$store.getters.getOperator(this.id)
        },
         getPumpDuty(){
            return this.$store.getters.getPumpDuty(this.id)
         },
         getHeadDuty(){
            return this.$store.getters.getHeadDuty(this.id)
         },
         getSessionDuty(){
            return this.$store.getters.getSessionDuty(this.id)
         }
    },
    mounted(){
      //  console.log(this.getDuty)
    }
}

</script>
