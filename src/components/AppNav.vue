<template>
    <div class="avatar-container">
        <b-avatar id="avatar" :src="require('../assets/img/proficon2.png')"></b-avatar>
        <b-dropdown :text="currentUser.firstname + ` ` + currentUser.lastname" variant="secondary"
            class="user-dropdown m-2">
            <b-dropdown-item href="#"> Profile </b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
export default {
    
}
</script>