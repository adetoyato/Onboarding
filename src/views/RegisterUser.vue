<template>
    <div>
        <div class="form-wrap">
        <form class="register">
            <h2> Login your account</h2>
            <div class="inputs">
                 <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                </div>
              <b-form-datepicker id="datepicker" v-model="newDate"
                        :date-format-options="{
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                          }" disabled>
              </b-form-datepicker>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
            <p class="login-register">
                Don't have an account? Sign up now!
            <router-link class="router-link" :to="{ name: 'register'}">
                Register
            </router-link>
            </p>
            </div>
            <button>Login</button>
            <div class="angle"></div>
        </form>
            <div class="background"></div>
        </div>
    </div>
</template> 

<script>
        export default {
            components: {
            },
    data() {
        return{
            newDate: new Date(),
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