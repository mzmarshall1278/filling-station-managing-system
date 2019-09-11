<template>
    <div class="container mt-3">
       <div>
        <b-card-group deck v-for="(pump, key) in  pumps" :key="key" class="mt-3">
        <b-card bg-variant="info" text-variant="white"  class="text-center" v-for="(head, key) in  pump.heads" :key="key" :header="pump.number" @click="loadHead(pump.id, head.name)" style="cursor:pointer">
            <b-card-text>Head {{head.name}}</b-card-text>
        </b-card>

        
        </b-card-group>
        
            <b-card-group deck class="mt-3 col-md-8 mx-auto">
            <b-card bg-variant="info " text-variant="white"  class="text-center" header="Add Pump" @click="addPump(++pumps.length)" style="cursor:pointer">
                <b-card-text></b-card-text>
            </b-card>
        
        </b-card-group>
      </div>
        
    </div> 
</template>
<script>
export default {
    data(){
        return {

        }
    },
    computed : {
        pumps(){
            return this.$store.state.pumps
        }
    },
    methods: {
        loadHead(id, name){
            this.$router.push('/pumps/head/'+ id+'/'+name)
        },
        addPump(l){
            //console.log(l)
            this.$store.dispatch('addPump', l)
        }
    }
}
</script>
<style scoped>
    .pump{
        display: block;
        max-width: 80%;
        background: cyan;
        color : midnightblue;
        margin: auto
    }
    .head {
        display: inline-block;
        margin : 3px 8px;
        padding: 5px;
        border: 2px solid black;
        border-radius: 8px;

    }
</style>

