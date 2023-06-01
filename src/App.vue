<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import NavSidebar from './components/NavSidebar.vue'
</script>


<template>
  <div id="app">
    <div class="moving-background">
        <div class="slider-container">
            <div class="slider-image"></div>
            <div class="glass">
              <div class="page">
                <div class="sidebar">
                  <NavSidebar />
                </div>
                <div class="header-and-content">
                  <header>
                    <h1 id="page-title">Disappearing Diary</h1>
                  </header> 
                  <RouterView />
                </div> 
              </div>                           
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">

@use '@/assets/styles/scss/main';

.page {
  display: flex;
  flex-direction: row;

  margin-top: 2.5rem;
  column-gap: 2.5vw;

  .header-and-content {
    flex: 1;
    // margin-left: 1vw;
  }
}

/* -------BACKGROUND------- */
.moving-background {
  height: 100%;
  width: 100%;
  position: fixed; /* otherwise there's a gap at the bottom on certain zoom levels */
  background-image: url("@/assets/images/background.png");
  

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
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 0px; 
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
background: url("@/assets/images/background.png") repeat-x;
height: 100%;
width: 100%;
object-fit: cover;
animation: slide 400s linear infinite;
margin: 0;
}

/* -------END OF BACKGROUND MOVEMENT------- */


/* HEADER */

header {
    position: relative;
    /* magic number alert */
    /* the below position aligns the header to the center of the menu icon to its left */
    margin-top: 0.4rem; 
    // top: 20px;
    // left: 5vw;
    width: 100%;
    height: 80px;
    color: main.$site-title;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
}


/* -------END OF HEADER------- */

</style>


