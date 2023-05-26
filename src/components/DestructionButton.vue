<template>
    <div class="button">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <button id="destroy-button">Destroy</button>
        </a>    
    </div> 
</template>

<style scoped>
.button {
    box-sizing: border-box;
    margin-left: 30px;
    margin-right: 40px; 
}
#destroy-button {
    background-color: #EA638C;
    height: 100%; 
    width: 100%;

    border-radius: 16px;
    border: 0px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    cursor: pointer;

    /* text */
    color: white;
    font-weight: bolder;
    font-size: larger;
    letter-spacing: 0.2em;
}

</style>

<script setup>

</script>