import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : null,
    reservoir: 5000,
    sales: [
      {pumpNumber : "02", head : "A", ammountPaid: 3000, operator: "staff03", time: "11:56am", payment : "cash"},
      {pumpNumber : "01", head : "A", ammountPaid: 12433, operator: "staff09", time: "10:15am", payment : "card"},
      {pumpNumber : "01", head : "B", ammountPaid: 200, operator: "staff01", time: "9:00pm", payment : "cash"},
      {pumpNumber : "01", head : "B", ammountPaid: 7500, operator: "staff01", time: "9:03pm", payment : "card"},
      {pumpNumber : "03", head : "B", ammountPaid: 2870, operator: "staff05", time: "3:38pm", payment : "cash"},
      {pumpNumber : "02", head : "B", ammountPaid: 1000, operator: "staff010", time: "12:00pm", payment : "cash"},
      {pumpNumber : "03", head : "A", ammountPaid: 1800, operator: "staff012", time: "11:58pm", payment : "card"},
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
      {id : 'staff013', name : 'ARden Cho'},
      {id : 'staff014', name : 'Tyler Posey'},
      {id : 'staff015', name : 'Tyler Hoechlin'},
      {id : 'staff016', name : 'Crystal Reed'},
      {id : 'staff017', name : 'Emilia Clarke'},
      {id : 'staff018', name : 'Nathalie Emanuel'},
      
    ],
    pumps : [
      {id: '01', number : '1' , heads: [
        {name : 'A', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/01"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/02"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/03"},
        ] },
        {name : 'B', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/04"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/05"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/06"},
        ] }, 
      ]},
      {id: '02', number : '2', heads: [
        {name : 'A', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/07"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/08"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/09"},
        ] },
        {name : 'B', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/010"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/011"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/012"},
        ] }, 
      ]},
      {id: '03', number : '3', heads: [
        {name : 'A', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/013"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/014"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/015"},
        ] },
        {name : 'B', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/016"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/017"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/018"},
        ] }, 
      ]}

    ],
    
    litrePrice : 143,
  },
  mutations: {
    addPump(state, payload){
      let newPump = {id: payload, number : payload, heads: [
        {name : 'A', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/013"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/014"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/015"},
        ] },
        {name : 'B', sessions : [
          {session : "Morning", time : "6:00am : 12:00pm", operator: "staff/016"},
          {session : "Afternoon", time : "12:00pm : 6:00pm", operator: "staff/017"},
          {session : "Morning", time : "6:00pm : 12:00am", operator: "staff/018"},
        ] }, 
      ]}
      console.log(newPump)
      //state.pumps.push({})
    }
  },
  actions: {
    addPump({commit}, payload){
      //reach out to the server
      commit('addPump', payload);
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
  }
})
