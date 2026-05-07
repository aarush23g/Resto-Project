<template>
<div class="nav">   
<router-link to="/">Home</router-link>
<router-link to="/add">Add Restaurant</router-link>
<router-link to="/about-us">About Us</router-link>
<a @click.prevent="logout" href="#">Logout</a>

</div>
</template>
<script>
export default {
    name: 'AppHeader',
    methods: {
        // Add any methods if 
        logout() {
            // Implement logout functionality
            localStorage.clear();
            this.$router.push({ name: 'LoginPage' }); // Redirect to login page after logout
        }
    }
}
</script>     
<style>
.nav {
    display: flex;
}
.nav a{
    color: black;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;

}
.nav a:hover {
    background-color: black;
    color: white;
}
</style>
