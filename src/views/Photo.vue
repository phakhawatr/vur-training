<template>
    <div>
        <img @click="show=!show" :style="style" src="/photo.jpg" alt="Photo" />
        <p>{{ show}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    computed: {
        style() {
            return this.show ? { border: 'solid black 3px', cursor: 'pointer'} : { cursor: 'pointer' } 
        }
    }
       
}
</script>