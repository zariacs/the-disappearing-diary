<template>
</template>
<!-- <script setup>
    import AppHeader from './AppHeader.vue'
</script>

<template>
    <div class="background">
        <div class="slider-container">
            <div class="slider-image"></div>
            <div class="glass">
                <AppHeader />
            </div>
        </div>
    </div>
</template>



<style scoped>

/* -------BACKGROUND------- */
.background {
    top:0px;
    height: 100vh;
    width: 100%;
    background-image: url("../assets/images/background.png");
}

.background > img {
    width: 100%;
    height: 100%;
}

.glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* glass */
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 0px; 
}

body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100%;
    font-family: sans-serif;
}

/* -------END OF BACKGROUND------- */

/* -------BACKGROUND MOVEMENT------- */

.slider-container {
    overflow: hidden;
    height: 100vh;
    width: 900%;
    margin: 0;
}

@keyframes slide {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(-150%); 
  }
}

.slider-image {
  background: url("../assets/images/background.png") repeat-x;
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation: slide 400s linear infinite;
  margin: 0;
}

/* -------END OF BACKGROUND MOVEMENT------- */


/* HEADER */

header {
    position: absolute;
    top: 20px;
    left: 3%;
    width: 100%;
    height: 80px;
    color: #fff9ec;
    font-family: sans-serif;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
}

.header-menu-icon {
    height: 30%;
    align-self: center;
}

/* -------END OF HEADER------- */

</style>

<script setup>
    
</script> -->