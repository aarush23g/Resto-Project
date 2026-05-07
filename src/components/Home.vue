<template>
<Header />
<h1> Hello {{ name }} , Welcome on Home Page</h1>
<div class="table-container">
<table class="restaurant-table">
<thead>
<tr>
<th>Name</th> 
<th>Cuisine</th>
<th>Location</th>
<th>Rating</th> 
<th>Actions</th> 

</tr>
</thead>
<tbody>
<tr v-for="item in restaurants" :key="item.id">
<td>{{ item.name }}</td>
<td>{{ item.cuisine }}</td>
<td>{{ item.location }}</td>
<td>{{ item.rating }}</td>
<td class="action-cell">
<router-link class="action-button" :to="{ name: 'UpdatePage', params: { id: item.id } }">Update</router-link>
<button class="action-button" v-on:click="deletedRestaurant(item.id)">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    components: {
        Header
    },
    methods: {
        async deletedRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            console.warn(result)
            if(result.status === 200){
                this.loadData()
            }
        },
        async loadData()
        {
            let user = localStorage.getItem("user-info");
            if (!user) {
                this.$router.push({ name: "SignUp" });
            return;
            }
            this.name = JSON.parse(user).name;
            let result = await axios.get("http://localhost:3000/restaurants");
            console.warn(result);
            this.restaurants = result.data;
        }

    },
    async mounted() {
        await this.loadData();
    }
}
</script>
<style>
.table-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 25px;
}

.restaurant-table {
    width: 85%;
    max-width: 1100px;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 4px 14px rgba(44, 62, 80, 0.12);
}

.restaurant-table th,
.restaurant-table td {
    padding: 16px 18px;
    border: 1px solid #d7e3ea;
    font-size: 16px;
}

.restaurant-table th {
    background-color: #eaf8fd;
    color: #2c3e50;
    font-weight: 700;
}

.restaurant-table tr:nth-child(even) {
    background-color: #f8fcfe;
}

.action-cell {
    white-space: nowrap;
}

.action-button {
    min-width: 80px;
    height: 36px;
    padding: 8px 14px;
    margin: 0 6px;
    background-color: skyblue;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

.action-button:hover {
    background-color: #68bfe2;
}
</style>
