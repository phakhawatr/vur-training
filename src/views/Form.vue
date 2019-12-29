<template>
    <div>
        <h1 class="title">Form</h1>

        <div class="field">
            <input v-model="person.name" type="text" class="input is-danger" placeholder="name"/>
        </div>
        <div class="field">
            <input v-model="person.surname" type="text" class="input is-danger" placeholder="name"/>
        </div>
        <div class="field">
            <label Class="checkbox">
            <input v-model="person.isMarried" type="checkbox" /> Married
            </label>
        </div>
        <div class="field">
            <label Class="checkbox">
                <input v-model="person.hobbies" type="checkbox" value="music" /> Music  
            </label>
            <label Class="checkbox">
                <input v-model="person.hobbies" type="checkbox" value="reading" /> Reading  
            </label>
            <label Class="checkbox">
                <input v-model="person.hobbies" type="checkbox" value="hangout" /> hangout  
            </label>
        </div>
        <div class="field">
            <label Class="radio">
                <input v-model="person.gender" type="radio" value="M" /> Male
            </label>
            <label Class="radio">
                <input v-model="person.gender" type="radio" value="F" /> Female
            </label>
        </div>

        <div class="field">
            <div Class="select">
                <select v-model="person.language">
                <option v-for="each in languagus"  :value="each" :key="each">{{ each }}</option>
                </select>
          </div>
        </div>
            <div class="field">
                <input v-model="person.name" type="text" :class="'input ' + className('name')" placeholder="name" />
            </div>
            <div>
                <input v-model="person.surname" type="text" :class="'input ' + className('surname')" placeholder="surname" />
            </div>
    </div>
</template>

<script>
import 'animate.css/animate.min.css'

export default {
    // computed: {
    //     className() {
    //         return {
    //         name: this.person.name ? 'is-success' : 'is-danger',
    //         surname: 'is-success'
    //         }   
    //     }
    // },
    methods: {
        className(fieldName) {
            return this.person[fieldName] ? 'is-success' : 'is-danger animated shake'
        }
    },
    data() {
        return {
            languagus: ['JavaScript', 'PHP', 'C#', 'Java', 'Python'],
            person: {
                name: 'John' ,
                surname: 'Doe',
                isMarried: false,
                hobbies: [],
                gender: 'M'
            }
            
        }
    }
}
</script>