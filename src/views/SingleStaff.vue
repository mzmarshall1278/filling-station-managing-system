<template>
    <div class="container mt-3">
        <b-card class="text-center">
            <h3>Id : {{getStaff.id}}</h3>
            <h3>Name : {{getStaff.name}}</h3>

            <b-card-body>
                <b-card class="container mt-2 col-md-8 text-left" v-for="(log, key) in logs" :key="key">
                    <h5><b>Time :</b> {{log.time}}</h5>
                    <h6><b>Pump Number :</b> {{log.pumpNumber}}</h6>
                    <h6><b>Head :</b> {{log.head}}</h6>
                    <h6><b>operator :</b> {{log.operator}}</h6>
                    <h6><b>Ammount Payed : NGN</b> {{log.ammountPaid}}</h6>
                    <h6><b>Payment Method :</b> {{log.payment}}</h6>

                </b-card>
            </b-card-body>
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
        }
    }
}

</script>
