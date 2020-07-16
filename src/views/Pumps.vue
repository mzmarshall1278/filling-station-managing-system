<template>

    <div class="container">
        <h3 class="text-center mt-3">Pumps</h3>
        <b-card>
            <b-card-group class="row" v-for="(pump, key) in pumps" :key="key">
                
                <b-card v-for="(head,key) in heads" :key="key" class="text-center m-1"  bg-variant="info" style="color:snow; cursor:pointer" @click="loadHead(pump.id,head.name)">
                    <h5>Pump : {{pump.number}}</h5>
                    <h4>Head : {{head.name}}</h4>
                    </b-card>
            </b-card-group>

             <b-card-group class="row">
                
                <b-card class="text-center m-1 col-md-6 mx-auto"  bg-variant="info" style="color:snow; cursor:pointer">
                    <h5 @click="showModal">Add Pump</h5>
                    
                    </b-card>
            </b-card-group>
        </b-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
            heads : [
                {name : "A"}, {name : "B"},
            ]
        }
    },
    computed : {
        pumps(){
            return this.$store.state.pumps
        }
    },
   
    methods : {
        showModal(){
        this.$bvModal.msgBoxConfirm('Are you sure you want to add a new pump??', {
            okTitle : "yes",
            okVariant: 'info',
            cancelTitle: "NO",
            cancelVariant: 'danger',
            centered : true
        }).then(
            value => {
                if(value) this.addPump()
            }
        ).catch(err => alert(err))
        },
        loadHead(id,name){
            this.$router.push('/pumps/head/'+id+'/'+name)
        },
        addPump(){
            
          this.$store.dispatch('addPump')  
        }
    }
}
</script>
