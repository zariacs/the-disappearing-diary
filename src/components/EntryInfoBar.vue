<template>
    <div class="entry-info-bar">
        <input name="title" type="text" v-model="title" placeholder="Title" class="entry-title" maxlength="50"/>
        <p class="entry-date">{{ currentDate() }}</p>
    </div>
</template>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';

.entry-info-bar {
    @include main.glass;

    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 3rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: main.$entry-info-bar-text;
}

.entry-title, .entry-title:focus, .entry-title::placeholder {
    color: inherit;
    font-size: 1.2rem;
    letter-spacing: 0.25rem;
    caret-color: white;
    font-weight:500;
    width: 65%;

    /*text box */
    background: transparent;
    border: none;
    outline: none;
}

.entry-date {
    margin-left: auto;
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 0.1rem;
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