import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : null,
    reservoir: 5000,
    sales: [
      {pumpNumber : "02", head : "A", ammountPaid: 3000, litresSold: 20.979, operator: "staff03", time: "11:56am", payment : "cash"},
      {pumpNumber : "01", head : "A", ammountPaid: 12433, litresSold: 86.944, operator: "staff09", time: "10:15am", payment : "card"},
      {pumpNumber : "01", head : "B", ammountPaid: 200, litresSold: 1.399, operator: "staff01", time: "9:00pm", payment : "cash"},
      {pumpNumber : "01", head : "B", ammountPaid: 7500, litresSold: 52.45, operator: "staff01", time: "9:03pm", payment : "card"},
      {pumpNumber : "03", head : "B", ammountPaid: 2870, litresSold: 20.07, operator: "staff05", time: "3:38pm", payment : "cash"},
      {pumpNumber : "02", head : "B", ammountPaid: 1000, litresSold: 6.99, operator: "staff010", time: "12:00pm", payment : "cash"},
      {pumpNumber : "03", head : "A", ammountPaid: 1800, litresSold: 12.59, operator: "staff012", time: "11:58pm", payment : "card"},
    ],
    operators : [
      {id : 'staff01', name : 'Harry Potter'},
      {id : 'staff02', name : 'James Bond'},
      {id : 'staff03', name : 'Selena Gomez'},
      {id : 'staff04', name : 'Dwayne Johnson'},
      {id : 'staff05', name : 'Sean Bean'},
      {id : 'staff06', name : 'Ingrid Bolso'},
      {id : 'staff07', name : 'Selma Hayek'},
      {id : 'staff08', name : 'Adam Sandler'},
      {id : 'staff09', name : 'Chris Rock'},
      {id : 'staff010', name : 'Kevin Hart'},
      {id : 'staff011', name : 'Tom Cruise'},
      {id : 'staff012', name : 'Lena Hadey'},
      {id : 'staff013', name : 'Arden Cho'},
      {id : 'staff014', name : 'Tyler Posey'},
      {id : 'staff015', name : 'Tyler Hoechlin'},
      {id : 'staff016', name : 'Crystal Reed'},
      {id : 'staff017', name : 'Emilia Clarke'},
      {id : 'staff018', name : 'Nathalie Emanuel'},
      
    ],
    sessions : [
      {session : "Morning", time : "6:00am : 12:00pm",},
      {session : "Afternoon", time : "12:00pm : 6:00pm",},
      {session : "Evening", time : "6:00pm : 12:00am",},
    ],
    pumps : [
      {id: '01', number : '1' , heads: [
        {name : 'A', sessions : [
          {session : "Morning", operator: "staff01"},
          {session : "Afternoon", operator: "staff02"},
          {session : "Evening", operator: "staff03"},
        ] },
        {name : 'B', sessions : [
          {session : "Morning", operator: "staff04"},
          {session : "Afternoon", operator: "staff05"},
          {session : "Evening", operator: "staff06"},
        ] }, 
      ]},
      {id: '02', number : '2', heads: [
        {name : 'A', sessions : [
          {session : "Morning", operator: "staff07"},
          {session : "Afternoon", operator: "staff08"},
          {session : "Evening", operator: "staff09"},
        ] },
        {name : 'B', sessions : [
          {session : "Morning", operator: "staff010"},
          {session : "Afternoon", operator: "staff011"},
          {session : "Evening", operator: "staff012"},
        ] }, 
      ]},
      {id: '03', number : '3', heads: [
        {name : 'A', sessions : [
          {session : "Morning", operator: "staff013"},
          {session : "Afternoon", operator: "staff014"},
          {session : "Evening", operator: "staff015"},
        ] },
        {name : 'B', sessions : [
          {session : "Morning", operator: "staff016"},
          {session : "Afternoon", operator: "staff017"},
          {session : "Evening", operator: "staff018"},
        ] }, 
      ]}

    ],
    
    litrePrice : 143,
    duties : [],
  },
  mutations: {
    addPump(state, payload){
     
    return state.pumps.push(payload);
     
    },
    addSession(state, payload){
      return state.sessions.push(payload)
    },
    newUser(state, payload){
      
     let newUser = {...payload, name: payload.firstName+' '+payload.lastName, id: 'staff19'}
      return state.operators.push(newUser);
    },
    operation(state, payload){
      let operation = {pumpNumber : "xx", head : "x", ammountPaid: payload.price, litresSold: payload.ammount, time: "11:56am", payment : payload.payment, operator: payload.id}
      state.reservoir -= payload.ammount;
      return state.sales.unshift(operation);
    },
    login(state, payload){
       state.user = { id:'staff03',email: payload.email, duty : {
         session: 'Evening', pump :'1', head:'A'
       }}
       
       
    },
    logout(state){
       state.user = null
       
    }
  },
          
  actions: {
    addPump({commit}){
      let num = this.state.pumps.length + 1;
      let newPump = {id: (num).toString(), number: (num).toString(), heads: [{name : 'A', sessions : [
        {session : "Morning", operator: ""},
        {session : "Afternoon", operator: ""},
        {session : "Evening", operator: ""},
        ] },
        {name : 'B', sessions : [
        {session : "Morning", operator: ""},
        {session : "Afternoon", operator: ""},
        {session : "Evening", operator: ""},
        ] }]}
     //reach out to the server and save it
      commit('addPump', newPump)
    },
    addSession({commit}, payload){
      //reach out to the server
      commit('addSession', payload)
    },
    newUser({commit}, payload){
      //reach out to the server
      commit('newUser', payload)
    },
    operation({commit}, payload){
      //reach out to the server
      commit('operation', payload)
    },
    login({commit},  payload){
      //reach out to the server
      commit('login', {payload})
    },
    logout({commit}){
      commit('logout')
    }
  },

  getters : {
    
    getOperatorLogs(state){
      return id => {
        return state.sales.filter(sales => {
          return sales.operator === id
        })
      }
    },
    getTenLogs(state, getters){
      return id => {
        return getters.getOperatorLogs(id).slice(0,10) 
      }
    },
    getOperator(state){
      return id => {
        return state.operators.find( operator => {
          return operator.id === id
        })
      }
    },
    getPump(state){
      return id =>{
        return state.pumps.find(pump => {
          return pump.id === id
        })
      }
    },
    getHead(state, getters){
      return ( id, name ) => {
        return getters.getPump(id).heads.find( head =>{
          return head.name === name
        })
      }
    },
    getPumpDuty(state){
      return id => {
        return state.pumps.find(pump => pump.heads.find(head => head.sessions.find(session => session.operator === id )))
      }
    },
    getHeadDuty(state, getters){
      return id => getters.getPumpDuty(id).heads.find( head => head.sessions.find(sesssion => sesssion.operator === id))
    },
    getSessionDuty(state, getters){
      return id => getters.getHeadDuty(id).sessions.find(session => session.operator === id)
  },
    getAllSessions(state){
      return state.pumps.filter(pumps => pumps.heads.filter(heads => state.duties.push(heads.sessions)))
    },
    getOneSession(state){
     
    }
  }
})
