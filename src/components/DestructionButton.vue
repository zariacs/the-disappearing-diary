<template>
    <div class="button-container">
        <!-- conclude feature is currently unavailable -->
        <a class="single-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <button class="conclude-button" :class="{ 'glass-button': zenMode}">Conclude</button>
        </a>   
        <a class="single-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <button class="destroy-button" :class="{ 'glass-button': zenMode}">Destroy</button>
        </a>    
    </div> 
</template>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';
.button-container {
    box-sizing: border-box;
    margin-left: 30px;
    margin-right: 40px; 
    display: flex;
    flex-direction: row;
    column-gap: 1rem;

    .single-button {
        flex: 1;

        .conclude-button {
            @include main.button();
        }
        .destroy-button {
            @include main.button(main.$hot-pink);
            // @include main.button(#ee4266);
            // @include main.button(#e43f6f);
        }

        .glass-button {
            @include main.glass();
            border-radius: 10px;
            transition: 0.7s ease-out;

            &:hover {
                box-sizing: border-box;
                border: none;
                transition: 0.2s ease-out;
            }
        }
    }   
}

</style>

<script setup>

import {onMounted, ref } from 'vue';

// Zen Mode Activation - mutes button colours -------------------------

const zenMode = ref(false);

function activateZenMode() {
    setTimeout(() => zenMode.value = !zenMode.value, 5000);
}

onMounted(() => {
  activateZenMode();
})

</script>