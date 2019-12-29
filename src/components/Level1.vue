<template>
    <div class="box">
        <h1 class="title">Level 1</h1>
        <p>Counter (prop): {{ x }}</p>
        <p>
            <button @click="$emit('reset')" class="button is-danger">Reset</button>
        </p>
        <level2 :counter="x" />
    </div>
</template>

<script>
import Level2 from './Level2'
export default {
    props: ['x'],
    components: {
        level2: Level2
    }
    
}
</script>