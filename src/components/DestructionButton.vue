<template>
    <div class="button-container">
        <!-- conclude feature is currently unavailable -->
        <a class="single-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <button class="conclude-button">Conclude</button>
        </a>   
        <a class="single-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <button class="destroy-button">Destroy</button>
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
    }

    .conclude-button {
        @include main.button();
    }
    .destroy-button {
        // @include main.button(main.$hot-pink);
        // @include main.button(#ee4266);
        @include main.button(#e43f6f);
        // width: 27rem;
    }
}






</style>

<script setup>

</script>