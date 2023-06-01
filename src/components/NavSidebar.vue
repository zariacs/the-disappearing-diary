<template>
    <!-- <div class="exp" :class="{ 'nav-expanded': nav_expanded}"> -->
    <aside  >
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-rounded">menu</span>
            </button>
        </div>
  
        <div class="menu-container" :class="{ 'nav-expanded': nav_expanded}">
            <div class="menu">
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

            <div class="menu">
                <router-link class="button" to="/settings">
                    <span class="material-symbols-rounded">settings</span>
                    <span class="text">Settings</span>
                </router-link>
            </div>
        </div>
    </aside>
    <div class="placeholder"></div>
<!-- </div> -->
</template>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';

.exp {
    display: flex;
    flex-direction: row;

    .placeholder {
        height: 100px;
        width: 100px;
        background: black;
        flex: 1;
    }
}


aside {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100vh;
    padding-bottom: 7rem;
    margin-left: 2rem;
    
    .menu-toggle {
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

    .menu-container {
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

        .menu {
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



</style>

<script setup>
import { ref } from 'vue'

const nav_expanded = ref(localStorage.getItem('nav_expanded') === 'true')

const ToggleMenu = () => {
    nav_expanded.value = !nav_expanded.value
    localStorage.setItem('nav_expanded', nav_expanded.value)
}

</script>