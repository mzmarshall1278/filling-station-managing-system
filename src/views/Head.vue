<template>
    <div class="container mt-3">
        <b-card>
            <h3>Pump : {{getPump.number}} Head : {{getHead.name}} </h3>
            <b-card-body>
                <b-card class="container mt-2 col-md-8" v-for="(session, key) in getHead.sessions" :key="key">
                    <h5>{{session.session}}</h5>
                    <h6>{{session.time}}</h6>
                    <h6>{{session.operator}}</h6>

                </b-card>
            </b-card-body>
        </b-card>
    </div>
</template>
<script>
export default {
    props:['id', 'name'],
    data(){
        return {

        }
    },
    computed :{
        
        getPump(){
            
            return this.$store.getters.getPump(this.id);
        },
        getHead(){
            return this.$store.getters.getHead(this.id, this.name)
        }
    },
    created () {
       
    }
}
</script>
