<template>
    <Header />
    <h1> Hello User, Welcome on Update Restaurant Page</h1>
    <form class="add-form">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="cuisine" placeholder="Enter Cuisine" v-model="restaurant.cuisine" />
        <input type="text" name="location" placeholder="Enter Location" v-model="restaurant.location" />
        <input type="number" name="rating" placeholder="Enter Rating" v-model="restaurant.rating" />
        <button type="button" v-on:click="UpdateRestaurant">Update Restaurant </button>
    </form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'UpdatePage',
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                cuisine: '',
                location: '',
                rating: ''
            }
        }
    },
    methods: {
        async UpdateRestaurant() {
            let result = await axios.put(
                `http://localhost:3000/restaurants/${this.$route.params.id}`,
                this.restaurant
            );
            if (result.status === 200) {
                this.$router.push({ name: "Home" });
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
            return;
        }
        let result = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`);
        this.restaurant = result.data;
    }
}
</script>
