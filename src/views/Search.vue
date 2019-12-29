<template>
    <div>
        <h1 class="title">Search..</h1>
        <hr />
        <input @keyup="searchUsers()" v-model="search" type="text" class="input" />
        <pre>{{ users }}</pre>
    </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

// const new = _.debounce(old, 1000)

const url = 'https://jsonplaceholder.typicode.com/users?q=sin'
export default {
    create() {
        this.searchUsers = _.debounce(this.searchUsers, 1000)
    },
    methods: {
        async searchUsers() {
            const res = await axios.get(url + this.search)
            this.users = res.data
            
        }
    },
    data() {
        return {
            users: [],
            search: ''
        }
    }
}
</script>