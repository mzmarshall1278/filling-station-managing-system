<template>
   
  <b-navbar toggleable="lg" type="dark" variant="info" >
    <b-navbar-brand href="#" class="m-auto">Fuel Manager</b-navbar-brand>
    <b-navbar-nav>
        <!-- <b-link v-for="(item,key) in navItems" :key="key">{{item.name}}</b-link> -->
    </b-navbar-nav>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
          <b-nav-item v-for="(item,key) in navItems" :key="key" :to="item.link">{{item.name}}</b-nav-item>
      </b-navbar-nav>
      <b-button size="sm" class="my-2 my-sm-0 col-sm-2 ml-auto" @click="logout">Logout</b-button>
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
                {name : 'Operate', link : '/operation'},
                {name : 'Records', link : '/records'},
                {name : 'Profile',  link : '/profile'},
                {name: 'Login', link: "/"}

            ]
        }
    },
    methods : {
        logout(){
            this.$store.dispatch('logout');
            this.$router.push('/');
        }
    }
}
</script>
