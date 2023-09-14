<template>
    <div>
        <div class="login">
        <form @submit.prevent="login">
            <label for="email" class="email">
                Email: 
            </label>
            <input v-model="email" type="email" name="email" value>
            <br>
            <label for="password" class="password">
                Password: 
            </label>
            <input v-model="password" type="password" name="password" value>
            <br>
            <button type="submit" name="button" class="button">
                Login 
            </button>
            <router-link to ="/register">
                Don't have an account? Sign up now!
            </router-link>
        </form>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return{
                email:  '',
                password:  '',
            }
        },
        methods: {
            login () {
                this.$store.dispatch('login', {
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
.email {
    margin-top: 300px;
    margin-left: 800px;
}

.password {
    margin-top: 20px;
    margin-left: 800px;
}

.button {
    margin-top: 20px;
    margin-left: 800px;
}

</style>