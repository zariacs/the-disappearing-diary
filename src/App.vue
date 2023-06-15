<template>
  <div id="app">
    <div class="stationary-background"></div>
    <div class="slider-container">
      <div class="slider-image"></div>
    </div>
    <div class="glass">
      <div class="page" :class="{ 'nav-expanded': nav_expanded}">
        <div class="left-spacer" id="left-spacer"></div>
          <div class="nav-toggle-wrap at-top-of-page" id="nav-toggle">
            <button class="nav-toggle" @click="ToggleNav" >
              <span class="material-symbols-rounded">menu</span>
            </button>
          </div>
          <div class="nav-container" :class="{ 'nav-expanded': nav_expanded}" id="nav-container">
            <div class="nav-menu">
              <router-link class="button" to="/">
                <span class="material-symbols-rounded">home</span>
                <span class="text">Home</span>
              </router-link>
              <router-link class="button" to="/write">
                <span class="material-symbols-rounded">edit</span>
                <span class="text">Write</span>
              </router-link>
              <router-link class="button" to="/login">
                <span class="material-symbols-rounded">person</span>
                <span class="text">Sign In</span>
              </router-link>
              <router-link class="button" to="/wiki">
                <span class="material-symbols-rounded">info</span>
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
          <header id="header" class="at-top-of-page">
            <h1 id="page-title">The Disappearing Diary</h1>
          </header> 
          <div class="content" id="content">
            <RouterView />
          </div>
        <div class="right-spacer" id="right-spacer"></div>
        <footer id="footer"></footer>                       
      </div>
    </div>
  </div>
</template>


<style lang="scss">

@use '@/assets/styles/scss/main';

.page {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 3vw 5vw 0 1fr 1fr 8vw;

  // the fourth column is for the login/out profile for the header
  // coming soon

  grid-template-rows: 13vh minmax(0, 78.5vh) 8.5vh;

  grid-template-areas:
      "left-spacer nav-toggle header header header right-spacer"
      "left-spacer nav-container nav-container content content right-spacer"
      "footer footer footer footer footer footer";

  transition: 0.1s ease-out;

  &.nav-expanded {
    grid-template-columns: 3vw 5vw 14.5vw 1fr 1fr 2vw;
    transition: 0.1s ease-out;    
  }
  
  .nav-toggle-wrap {
    @include main.vertical-center();
    justify-content: center;
    
    .nav-toggle {
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
  }

  .nav-container {
    @include main.glass();
    background-color: none;
    backdrop-filter: none;
    padding: 2rem;
    padding-top: 10rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 20rem;
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
        color: #c799a6;
        letter-spacing: 0.2rem;
        font-weight: 600;

        border-radius: 10px;
        padding: 1rem;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        border: 1px solid transparent; // without this the buttons jump a bit on hover due to the addition of the 1px glass border
        font-size: 0.9rem;
        text-transform: uppercase;

        &:hover, &.router-link-exact-active {
          // @include main.glass();
          background: rgba(255, 255, 255, 0.1);
          background: #ffaaaa10;
          border-radius: 14px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(1px);
          -webkit-backdrop-filter: blur(5px);
        }

        .material-symbols-rounded {
          margin-right: 3rem;
        }
      }  
    }

    .flex {
        flex: 1;
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
    @include main.vertical-center();
    color: main.$site-title;
    font-size: 1.4rem;    
    
    h1 {
      transition: 0.3s ease-in-out;
      &:hover {
        color: #ffffff20;
        transition: 0.2s ease-out;
      }
    }
}


/* -------END OF HEADER------- */

#nav-container {
  grid-area: nav-container;
}

#content {
  grid-area: content;

  main {
    height: 100%;
    width: 100%;
  }

}

#header {
  grid-area: header;
}

#nav-toggle {
  grid-area: nav-toggle;
}

#footer {
  grid-area: footer;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 8.5vh;
}

#left-spacer {
  grid-area: left-spacer;
  height: 100vh;
  width: 100%;
}

#right-spacer {
  grid-area: right-spacer;
  height: 100vh;
  width: 100%;
}

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