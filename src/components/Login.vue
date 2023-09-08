



<!---Alt Code---!>
<template>
    <article>
        <div class="container">
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-left">
                        <h2>Welcome!</h2>
                        <p>Please log in to continue.</p>
                        <button>Log In</button>
                    </div>
                    <div class="overlay-right">
                        <h2>Don't have an account?</h2>
                        <p>Make an account now!</p>
                        <button>Sign Up</button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
    
    }
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                0 10px 10px rgba(0, 0, 0, .2);
    background: linear-gradient(to bottom, #efefef, #ccc);

.overlay-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .5s ease-in-out;
    z-index: 100;
}

.overlay{
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #fa773e, #480cb0);
    transform: translateX(0);
    transition: transform .5s ease-in-out;
}

@mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px, 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform .5s ease-in-out;

}

.overlay-left {
    @include overlays(-20%);
  
}

.overlay-right {
   @include overlays(0);
   right: 0;
}
}
</style>