<template>
    <div class="welcome-wrapper">
        <div class="welcome-content">
            <div>
                <h2 v-if="post.welcomeScreen"> {{post.title}} </h2>
                <h2 v-else> {{post.title}} </h2>
                <p v-if="post.welcomeScreen"> {{post.message}}</p>
                <p class="content-preview" v-else> {{podt.msgHTML}}</p>
                <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
                    Login or Sign Up now!
                </router-link>
                <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
                    Login or Sign Up now!
                </router-link>
                <router-link else></router-link>
            </div>
                <div class="welcome-photo">
                    <img v-if="post.welcomeScreen" :src="require(`../assets/img/${post.photo}.jpg`)" alt="">
                    <img v-else :src="require(`../assets/img/${post.coverPhoto}.jpg`)" alt="">
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Welcome",
    props: ["post"],
}
</script>

<style lang="scss" scoped>

</style>
