<template>

    <section class="section">
      <div class="container">
        <navbar />
        <h1 class="title">Application Online</h1>
        <router-view />
        </div>
    </section>
    
    
</template>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar'


export default {
  components: {
    navbar: Navbar
  },
  head: {
    title: {
      inner: 'Hellow World'
    },
    link: [
      {
        href: 'https://fonts.googleapis.com/css?family=Kanit&display=swap',
        rel: 'stylesheet'
  }
  ]
}
}
</script>
  
<style>
  body {
    font-family: 'Kanit';
  }
</style>
