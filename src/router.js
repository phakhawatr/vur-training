import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Form from './views/Form'
import Photo from './views/Photo'
import User from './views/User'
import VueRouter from 'vue-router'
import Userprofile from './views/Userprofile'
import Search from './views/Search'
import Props from './views/Props'

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/about', component: About 
    },
    {
        path: '/contact', component: Contact 
    },
    {
        path: '/form', component: Form 
    },
    {
        path: '/Photo', component: Photo
    },
    {
        path: '/User', component: User
    },
    {
        path: '/Search', component: Search
    },
    {
        path: '/Props', component: Props
    },
    {
        path: '/User/:id', component: Userprofile
    }

]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})
export default router