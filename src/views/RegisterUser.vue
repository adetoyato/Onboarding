<template>
    <div>
        <div class="form-wrap">
        <form class="register">
            <h2> Create an account now! </h2>
            <div class="inputs">
                 <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                </div>
                  <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                </div>
                   <div class="input">
                    <input type="number" placeholder="Age" v-model="number">
                </div>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                </div>
            <p class="login-register">
                Already have an account?
            <router-link class="router-link" :to="{ name: 'login'}">
                Login
            </router-link>
            </p>
            </div>
            <button>Sign Up</button>
            <div class="angle"></div>
        </form>
            <div class="background"></div>
        </div>
    </div>
</template> 

<script>
        export default {
            name: "Register",
            components: {
            },
    data() {
        return{
            firstName: '',
            lastName: '',
            age: '',
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

<style lang="scss" scoped>
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 900px) {
        width: 100%;
    }

    .login-register {
        left: 10px;
        margin-bottom: 32px;

        .router-link {
            color: #e65b0b;
        }
    }

    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        order: 2;
        @media(min-width: 900px) {
            padding: 0 50px;
        }

        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;
            @media (min-width: 900px) {
                font-size: 40px;
            }
        }

        .inputs {
            width: 100%;
            max-width: 350px;

            .input {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
                
                input {
                    width: 100%;
                    border: none;
                    background-color: #f2f7f8;
                    padding: 4px 4px 4px 30px;
                    height: 50px;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }

        .angle {
            display: none;
            position: absolute;
            background-color: #fff;
            transform: rotateZ(183deg);
            width: 60px;
            left: -30px;
            height: 101%;
            @media(min-width: 900px) {
                display: initial;
            }
        }
    }

    .background {
        display: none;
        flex: 2;
        background-size: cover;
        background-image: url("../assets/img/travel2.jpg");
        width: 100%;
        height: 100%;
        order: 1;
        @media (min-width: 900px) {
            display: initial;
        }
    }
}

</style> 