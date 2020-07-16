<template>
    <div class="container">
        <b-card>
            <h3 class="mt-3 text-center">Pump : {{id}}</h3>
            <h4 class="text-center">Head : {{name}}</h4>
            <b-card v-for="(session,key) in getHead.sessions" :key="key" class="mb-2">
                <h4>Session : {{session.session}}</h4>
                <h5>Operator : {{session.operator}}</h5>
            </b-card>
        </b-card>
    </div>
</template>
<script>
export default {
    props:['id', 'name'],
    computed:{
        getHead(){
            return this.$store.getters.getHead(this.id, this.name)
        }
    }
}
</script>
