<template>
    <div class="container mt-3">
        <h3 class="text-center">Sessions</h3>
        <b-card>
            <b-card-body>
                <b-card class="container mt-2 col-md-8" v-for="(session, key) in sessions" :key="key">
                    <div>
                        <h5>{{session.session}}</h5>
                        <h6>{{session.time}}</h6>
                    </div>
                    <b-card class="ml-auto"><b>Edit</b></b-card>
                </b-card>
                <b-card class="container mt-2 col-md-8 text-center">
                    <b-button v-b-modal.addSession>add Session</b-button>
                    
                    <b-modal id="addSession" ref="modal" title="Add new session" @show="resetModal" @hidden="resetModal" @ok="handleOk" ok-variant="info" cancel-variant="danger">

                        <form ref="form" @submit="handleSubmit">
                            <b-col sm="7" class="m-auto">
                            <b-form-group id="input-group-2" label-for="input-2">
                            <b-form-input
                                id="input-2"
                                type="text"
                                v-model="form.name"
                                required
                                placeholder="Name"
                            ></b-form-input>
                            
                        </b-form-group>
                        </b-col>
                        <b-col sm="7" class="m-auto">
                            <b-form-group id="input-group" label-for="input">
                                <b-form-input 
                                type="text"
                                    id="input"
                                    v-model="form.start"
                                    required
                                    placeholder="Starting time"
                                ></b-form-input>
                                </b-form-group>
                        </b-col>
                        <b-col sm="7" class="m-auto">
                            <b-form-group id="input-group" label-for="input">
                                <b-form-input 
                                type="text"
                                    id="input"
                                    v-model="form.end"
                                    required
                                    placeholder="Ending time"
                                ></b-form-input>
                                </b-form-group>
                        </b-col>
                        </form>
                    </b-modal>
                </b-card>
            </b-card-body>
            
        </b-card>
    </div>
</template>
<script>
export default {
    data(){
    return {
        form : {
            name: '', start : '', end : ''
        }
    }
},
    computed : {
        sessions(){
            return this.$store.state.sessions
        },
    },
    methods : {
        
        resetModal(){
            this.form.name = ""
            this.form.start = ""
            this.form.end = ""
        },
        handleOk(e){
            e.preventDefault()
            this.handleSubmit()
        },
        handleSubmit(){
            if(!this.form.name || !this.form.start || !this.form.end  ) return
            this.addSession()
            this.$nextTick(() =>{
                this.$refs.modal.hide()
            })
        },
        addSession(){
           let newSession = {session: this.form.name, time : `${this.form.start} : ${this.form.end}`}
            this.$store.dispatch('addSession', newSession)
        },
    }
}
</script>
