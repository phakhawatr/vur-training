<template>
    <div>
        <div :class="className">
            <div class="modal-background"></div>
            <div class="modal-content">
    
                <div class="box">
                    <h1 class="title">Model Windows</h1>
                </div>

            </div>
            <button @click="show=false" class="modal-close is-large" aria-label="close"></button>
        </div>

        <hr />
    <button @click="show=true" class="button is-primary">Show Model</button>

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
        className() {
            return this.show ? 'modal is-active' : 'modal'
        }
    }
}
</script>