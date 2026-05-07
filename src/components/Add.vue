<template>
    <Header />
    <h1> Hello {{name}} , Welcome on Add Restaurant Page</h1>
    <form class="add-form">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="cuisine" placeholder="Enter Cuisine" v-model="restaurant.cuisine" />
        <input type="text" name="location" placeholder="Enter Location" v-model="restaurant.location" />
        <input type="number" name="rating" placeholder="Enter Rating" v-model="restaurant.rating" />
        <button type="button" v-on:click="addRestaurant">Add Restaurant </button>
    </form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'AddRestaurantPage',
    components: {
        Header
    },
    data() {
        return {
            name: '',
            restaurant: {
                name: '',
                cuisine: '',
                location: '',
                rating: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurants", this.restaurant);
            if (result.status === 201) {
                this.$router.push({ name: "Home" });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
            return;
        }
        this.name = JSON.parse(user).name;
    }
}
</script>
