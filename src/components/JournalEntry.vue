<template>
    <div class="moving-background">
        <div class="slider-container">
            <div class="slider-image"></div>
            <!-- <img src="../assets/images/rocks.jpg" alt="Image 1">
            <img src="../assets/images/rocks-mirrored.jpg" alt="Image 2"> -->
        </div>
        <!-- <img src="../assets/images/rocks.jpg" alt=""> -->
        <div class="glass">
            <header>
                <h1>tempral.</h1>
            </header>
            <div class="writing-section">
                <div class="editing-tools"></div>
                <textarea class="text-box"></textarea>
            </div>
            <aside>
                <button>Destroy</button>
                <div class="moods aside-card">
                    <h2>Moods</h2>
                </div>
                <div class="involved aside-card">
                    <h2></h2>
                </div>
            </aside>
        </div>
    </div>
</template>

<style>

/* -------BACKGROUND------- */
.moving-background {
    background-color: #EABAF6;
    height: 100vh;
    width: 100%;
}

.moving-background > img {
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
    backdrop-filter: blur(90px);
    -webkit-backdrop-filter: blur(90px);
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
/* #slider {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

#slider img {
  width: 100%; 
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: left is linear;
}

#slider img:first-child {
  left: 0;
}

#slider img:last-child {
  left: 99%;
} */

.slider-container {
    overflow: hidden;
    height: 100%;
    width: 500%;
}

@keyframes slide {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(-150%); /* The image width */
  }
}

.slider-image {
  background: url("../assets/images/rocks.jpg") repeat-x;
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation: slide 200s linear infinite;
}



/* -------END OF BACKGROUND MOVEMENT------- */



header {
    position: absolute;
    top: 20px;
    left: 40px;
    width: 100%;
    height: 80px;
    color: white;
    font-family: sans-serif;
}

/* -------MAIN------- */

.writing-section {
    position: absolute;
    top: 80px;
    left: 40px;
    width: 70%;
    min-width: 700px;
    height: 100vh;
}

.editing-tools {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 50px;
    font-family: sans-serif;

    /* glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.7px);
    -webkit-backdrop-filter: blur(14.7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}


.text-box {
    /* structure */
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 70vh;
    font-family: sans-serif;
    background-color: white;
    border-radius: 20px;
    border: 0px;
    /* end of structure */

    /* writing */
    box-sizing: border-box;
    padding: 30px;
    resize: none;
    /* end of writing */
}

/* -------ASIDE------- */

aside {
    position: absolute;
        top: 120px;
        left: 75%;
        width: 22%;
        height: 100%;
        font-family: sans-serif;
}

button {
    /* structure */
    background-color: #EA638C;
    height: 50px;
    width: 100%;
    border-radius: 16px;
    border: 0px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    /* end of structure */

    /* text */
    color: white;
    font-weight: bolder;
    font-size: larger;
    letter-spacing: 0.2em;
    /* end of text */
}


.aside-card {
    left: 0;
    width: 100%;
    height: 30vh;
    font-family: sans-serif;
    box-sizing: border-box;
    padding-left: 1.5em;

    /* glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.7px);
    -webkit-backdrop-filter: blur(14.7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.moods {
    position: absolute;
    top: 80px;
}

.involved {
    position: absolute;
    top: 42vh;
}

h2 {
    color: #4B4B4B;
}

</style>

<!-- <script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const slider = document.getElementById("slider");
  const images = slider.getElementsByTagName("img");
  let currentIndex = 0;

  setInterval(() => {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }, 2000);
})



</script> -->