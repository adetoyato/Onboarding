<template>
    <div>
        <div class="register">
        <form @submit.prevent="register">
            <input v-model="name" type="text" placeholder="Username" class="name" value>
            <br>
            <input v-model="email" type="email" placeholder="E-mail" class="email" value>
            <br>
            <input v-model="password" type="password" placeholder="Password" class="password" value>
            <br>
            <button type="submit" name="button" id="button" class="button">
                Sign Up
            </button>
            <br>
             <router-link to ="/login" class="login">
                Already have an account? Login.
            </router-link>
        </form>
        </div>
    </div>
</template> 

<script>
        export default {
            components: {
            },
    data() {
        return{
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then( () => {
               this.$router.push({ name: 'dashboard' }) 
            })
        }
    }
}
</script>

<style scoped>
body {
    text-align: center;
}

.name {
    margin-top: 300px;
    margin-left: 800px;
}

.email {
    margin-top: 3px;
    margin-left: 800px;
}

.password {
    margin-top: 3px;
    margin-left: 800px;
}

.button {
    margin-top: 3px;
    margin-left: 860px;
}

.login {
    margin-top: 3px;
    margin-left: 800px;
}
</style> 