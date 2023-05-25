<template>
    <div class="entry-info-bar">
        <input name="title" type="text" v-model="title" placeholder="Title" class="entry-title" maxlength="50"/>
        <p class="entry-date">{{ currentDate() }}</p>
    </div>
</template>

<style>
.entry-info-bar {
    height: 100%;
    width: 100%;
    font-family: sans-serif;
    box-sizing: border-box;
    padding-left: 3vw;
    padding-right: 2vw;
    display: flex;
    flex-direction: row;
    color:#a3a3a3;


    /* glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.7px);
    -webkit-backdrop-filter: blur(14.7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.entry-title, .entry-title:focus, .entry-title::placeholder {
    color: inherit;
    font-size: 1.1em;
    letter-spacing: 0.20em;
    caret-color: white;
    font-weight:600;
    width: 65%;

    background: transparent;
    border: none;
    outline: none;
}

.entry-date {
    margin-left: auto;
    font-weight: 540;
    font-size: 1em;
    letter-spacing: 0.1em;
}
</style>

<script setup>
    import { ref } from 'vue'
    import moment from 'moment';

    /* ------- ENTRY INFO BAR ------------------------------------------*/
    const title = ref("")

    function currentDate() {
        let now = moment().format('LLL')
        return now        
    }
</script>