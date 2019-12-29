<template>
    <div>
        <h1 class="title">Contact</h1>
      

        <div class="list is-hoverable">
            <a v-for="each in languages" :key="each.text" href="#" class="list-item">{{each.text}}</a>

        </div>
    </div>
</template>

<script>
export default {
        data() {
            return {
                languages: [
                    { text: 'JavaScript' }, 
                    { text: 'PHP' }, 
                    { text: 'Java' }, 
                    { text: 'C#' }, 
                    { text: 'Python' } 
                ]
            }
        }
}
</script>