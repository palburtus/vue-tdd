<template>

    <form @submit.prevent="handleSubmit">
        
        <input type="text" id="fullName" v-model="fullName"/>
        
        <input type="email" id="email" v-model="email"/>

        <button type="submit">Submit</button>

        <p class="result">{{ errorMessage }}</p>

    </form>

</template>

<script>
import { Console } from 'console';

    export default {
        name: 'Registration',   
        data() {
            fullName: ''
            email: ''
            errorMessage: ''
        },  
        methods: {
            handleSubmit() {
                if(this.email){
                    if(!this.email.includes("@")){
                        this.errorMessage = 'Invalid Email Missing @';
                    }

                    if(!this.email.includes(".")){
                        this.errorMessage = 'Invalid Email Missing .';
                    }

                } else {
                    this.errorMessage = 'Email Required';
                }
            }
        }

    }
    
</script>

<style>

</style>