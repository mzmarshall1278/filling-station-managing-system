<template>
   
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" class="m-auto">Fuel Manager</b-navbar-brand>
    <b-navbar-nav>
        
    </b-navbar-nav>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" @click="logout">Logout</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>
<script>
export default {
    data (){
        return {
            navItems : [
                {name : 'Home', link : '/home'},
                {name : 'Pumps', link : '/pumps'},
                {name : 'Staff', link : '/staffs'},
                {name : 'Schedules', link : '/schedules'},
                {name : 'Records', link : '/records'}

            ]
        }
    },
    methods : {
        logout(){
            // logout logic here
        }
    }
}
</script>
