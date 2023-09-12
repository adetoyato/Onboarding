<template>
    <header class="header">
       <h1>{{ title }}</h1> 
    </header>
</template>
<script>
    export default {
        name: 'Header', 
        data () {
            return {
                title: 'Lou Geh Travel'
            }
        }
    }
</script>
<style>
header {
    background-color: #e3580e;
    color: #fff;
    padding-top: 25px;
    padding-left: 100px;
    height: 100px;
    text-align: left;
}

body{
    background-color: #000;
    color: #fff;
}
</style>
