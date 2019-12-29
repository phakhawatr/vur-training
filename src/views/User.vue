<template>
    <div>
        <h1 class="title">User</h1>

        <p>
            <button @click="getUsers()" class="button is-primary">Get Users</button>
        </p>
        
        <p>
            <input v-model="query" type="text" class="input" max="10" />
        </p>

        <table class="table">
            <tr>
                <th>#</th>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            <tr v-for="(each, idx) in filterUsers" :key="each.id">
                <td>{{ idx + 1 }}</td>
                <td>{{ each.id }}</td>
                <td>
                    <router-link :to="'/user/' + each.id">{{ each.name }}</router-link>
                </td>
                <td>{{ each.email }}</td>
                <td>{{ each.phone }}</td>
            </tr>
        </table>





        <!-- <p v-for="(each, idx) in users" :key="each.id">{{ idx + 1 }} {{ each.name }}</p>  -->
        
        <!-- <figure v-for="(each) in users" :key="each.id" class="image is-128x128">
           <img  :src="each.url" /> 
        </figure> -->
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        async getUsers() {
        try {  
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            this.updateUsers(res.data)
        } catch (e) {
            // console.log(e.message)
        }
        },
        updateUsers(data) {
            this.$store.commit('updateUsers' , data)
        }

    },
    computed: {
        users() {
            return this.$store.state.users
        },
        filterUsers() {
            const pattern = new RegExp(this.query, 'i')
            
            return this.users.filter(each => {
                return  pattern.test (each.name) || 
                        pattern.test (each.address.street) ||
                        pattern.test (each.email)

            })
        }
    },
    data() {
        return {
            // users: [],
            query: ''
        }
    }
}
</script>