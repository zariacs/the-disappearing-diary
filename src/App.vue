<!-- 5 columns 3 rows -->

<template>
  <div id="app">
    <div class="stationary-background"></div>
    <div class="slider-container">
      <div class="slider-image"></div>
    </div>
    <div class="glass">
      <div class="page">
        <div class="nav-sidebar">
          <div class="nav-toggle-wrap">
            <button class="nav-toggle" @click="ToggleNav">
                <span class="material-symbols-rounded">menu</span>
            </button>
        </div>
  
        <div class="nav-container" :class="{ 'nav-expanded': nav_expanded}">
            <div class="nav-menu">
                <router-link class="button" to="/">
                    <span class="material-symbols-rounded">home</span>
                    <span class="text">Home</span>
                </router-link>
                <router-link class="button" to="/login">
                    <span class="material-symbols-rounded">visibility</span>
                    <span class="text">Log In</span>
                </router-link>
                <router-link class="button" to="/wiki">
                    <span class="material-symbols-rounded">group</span>
                    <span class="text">Project Wiki</span>
                </router-link>
                <router-link class="button" to="/contact">
                    <span class="material-symbols-rounded">email</span>
                    <span class="text">Contact</span>
                </router-link>
            </div>
            
            <div class="flex"></div>

            <div class="nav-menu">
                <router-link class="button" to="/settings">
                    <span class="material-symbols-rounded">settings</span>
                    <span class="text">Settings</span>
                </router-link>
            </div>
        </div>
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
  }

  .nav-sidebar {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100vh;
    padding-bottom: 7rem;
    margin-left: 2rem;

    .nav-toggle {
        margin-left: 1.5vw;
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        transition: 0.2s ease-out;

        &:hover {
            background: rgba(255, 255, 255, 0.15);
        }    

        .material-symbols-rounded {
            color: main.$site-title;
            font-size: 2.25rem;
        }
    }

    .nav-container {
        @include main.glass();
        padding: 2rem;
        padding-top: 3rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        color: main.$nav-title;
        width: 20rem;
        margin-top: 2.5rem;
        transform: translateX(-25rem);
        transition: 0.25s ease-out;

        &.nav-expanded {

            transform: translateX(0);
            transition: 0.25s ease-out;
        }

        .nav-menu {
            display: flex;
            flex-direction: column;

            .button {
                text-decoration: none;
                color: main.$nav-link;
                border-radius: 10px;
                padding: 1rem;
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;
                border: 1px solid transparent; // without this the buttons jump a bit on hover due to the addition of the 1px glass border
                font-size: 1.1rem;
                text-transform: uppercase;

                &:hover, &.router-link-exact-active {
                    // @include main.glass();
                    // background: rgba(255, 255, 255, 0.1);
                    background: #fcd0a120;
                    border-radius: 14px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    // backdrop-filter: blur(14.7px);
                    // -webkit-backdrop-filter: blur(14.7px);
                }

                .material-symbols-rounded {
                    margin-right: 2rem;
                }
            }  
        }

        .flex {
            flex: 1;
        }
    }
  }
}


/* -------FIXED BACKGROUND------- */
.stationary-background {
  height: 100%;
  width: 100%;
  position: fixed; /* otherwise there's a gap at the bottom on certain zoom levels */
  background-image: url("@/assets/images/background.png");
}

.glass {
  position: fixed;
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

/* -------END OF FIXED BACKGROUND------- */

/* -------SLIDING BACKGROUND------- */

.slider-container {
  overflow: hidden;
  height: 100vh;
  width: 900%;
  margin: 0;

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
}
/* -------END OF SLIDING BACKGROUND------- */


/* HEADER */

header {
    position: relative;
    /* magic number alert */
    /* the below position aligns the header to the center of the menu icon to its left */
    margin-top: 0.4rem; 
    width: 100%;
    height: 80px;
    color: main.$site-title;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
}
/* -------END OF HEADER------- */

</style>


<script setup>
import { RouterView } from 'vue-router'

import { ref } from 'vue'

const nav_expanded = ref(localStorage.getItem('nav_expanded') === 'true')

const ToggleNav = () => {
    nav_expanded.value = !nav_expanded.value
    localStorage.setItem('nav_expanded', nav_expanded.value)
}

</script>