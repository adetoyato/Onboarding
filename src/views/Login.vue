<template>
    <div>
        <form @submit.prevent="login">
            <label for="email">
                Email:
            </label>
            <input v-model="email" type="email" name="email" value>

            <label for="password">
                Password:
            </label>
            <input v-model="password" type="password" name="password" value>

            <button type="submit" name="button">
                Login 
            </button>
    </div>
</template>

<script>
    export default {
        data () {
            return{
                email: '',
                password: '',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>