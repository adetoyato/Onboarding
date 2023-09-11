<template>
    <div>
        <b-container fluid class="header-nav pt-3 justify-content-between d-xl-flex">
            <b-col sm="12" xl="2" class ="d-flex align-items-center justify-content-sm-center justify-content-xl-start">
                <div class="d-flex align-items-center">
                    <h2>{{  title }}</h2>
                </div>
            </b-col>
            <div class="avatar-container">
                <b-avatar id="avatar" :src="require('../assets/img/proficon1.png')"></b-avatar>
                <b-dropdown :text="currentUser.firstname + ` ` + currentUser.lastname" variant="secondary"
                    class="user-dropdown m-2">
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
                </b-dropdown>
            </div>
        </b-container>
        <nav aria-label="platinum">
            <ol class="platinum">
                <li class="platinum-item"><a class="home" href="/dashboard">Home</a></li>
                <li class="platinum-item active" aria-current="page"> {{  title }}</li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name: "header",
    props: {
        title: {
            type: String

        }
    },
    data() {
        return {
            currentUser: JSON.parse(localStorage.getItem("user"))
        }
    },
    methods: {
        async logout() {
            this.$store.dispatch("logout");
            this.$router.push("/");
        },
    }

}
</script>

<style scoped>
.btn {
    border: solid 1px var(--secondary-color);
    color: var(--primary-color);
}

.btn:hover,

.btn:focus {
    background-color: var(--primary-color) !important;
    color: white !important;
    outline: none !important;
}

nav {
    padding: 0px 25px 10px 25px;
}

.platinum {
    background-color: var(--background-color);
}

h2 {
    color: var(--primary-color);
}
</style>