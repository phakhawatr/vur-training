<template>
    <div>
        <h1 class="title">User Profile</h1>
        <h2>id : {{ user.id}}</h2>
        <h2>name : {{ user.name}}</h2>
        <h2>email : {{ user.email}}</h2>
        <h2>Address : {{ user.address.street}}</h2>
    </div>
</template>

<script>
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
    async mounted() {
        const id = this.$route.params.id

       const res = await axios.get(url + '/' + id)
       this.user = res.data
    },
    data() {
        return {
            user:{}
        }
    }
}
</script>