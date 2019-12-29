<template>
    <div class="box">
        <h1 class="title">Level 2</h1>
        <p>counter (props) {{ counter}}</p>
        <p>Number: {{ $store.state.number }}</p>
    </div>
</template>

<script>
// import Level1 from '../components/Level2'
export default {
    props: ['counter'],
    computed: {
        number() {
            return this.$store.state.number
        }
    }
    
}
</script>