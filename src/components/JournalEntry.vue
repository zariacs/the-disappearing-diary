<template>
    <div class="moving-background">
        <div class="slider-container">
            <div class="slider-image"></div>
            <div class="glass">
                <header>
                    <h1 id="page-title">tempral</h1>
                </header>
                <div class="writing-section">
                    <div class="editing-tools"></div>
                    <textarea id="journal-text" class="text-box suggested" v-model="intro" v-on:click="includeSuggestedText"></textarea>
                </div>
                <aside>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <button id="destroy-button">Destroy</button>
                    </a>
                    <div class="aside-card-container">
                        <div class="moods aside-card">
                        <h2>Moods</h2>
                        </div>
                        <div class="aside-spacer"></div>
                        <div class="involved aside-card">
                            <h2></h2>
                        </div>
                        <div class="settings-tray">
                            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
                            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
                            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
                        </div>
                        
                    </div>
                    
                </aside>
            </div>
        </div>
    </div>
</template>

<style>

/* -------BACKGROUND------- */
.moving-background {
    /* background-color: #EABAF6; */
    height: 100vh;
    width: 100%;
    background-image: url("../assets/images/rocks.jpg");
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
    transform: translate(-150%); /* The image width */
  }
}

.slider-image {
  background: url("../assets/images/rocks.jpg") repeat-x;
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation: slide 200s linear infinite;
  margin: 0;
}

/* -------END OF BACKGROUND MOVEMENT------- */


/* HEADER */

header {
    position: absolute;
    top: 20px;
    left: 40px;
    width: 100%;
    height: 80px;
    color: white;
    font-family: sans-serif;
}

/* -------END OF HEADER------- */


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
    border-radius: 10px;
    /* end of structure */

    /* writing */
    box-sizing: border-box;
    padding: 30px;
    resize: none;
    font-size: 24px;
    color: #4B4B4B;
    /* end of writing */

    /* border */
    border: 3px solid #ffafcc;
    /* end of border */
}

.text-box:focus {
    outline: none;
    background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #c8b6ff, #ffafcc) border-box;
    border: 4px solid transparent;
}

.suggested {
    color: #a3a3a3;
}

/* -------END OF MAIN------- */


/* -------ASIDE------- */

aside {
    position: absolute;
    top: 120px;
    left: 75%;
    width: 22%;
    height: 100%;
    font-family: sans-serif;
}

#destroy-button {
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

.aside-card-container {
    margin-top: 30px;

    /* flex */
    display: flex;
    flex-direction: column;    
}

.aside-card {
    width: 100%;
    height: 280px;
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

.aside-spacer {
    height: 25px;   
}

h2 {
    color: #4B4B4B;
}

/* -------END OF ASIDE------- */

/* -------SETTINGS TRAY------- */

/* tray icons are this color: #f9d4bb */
.settings-tray {
    margin-top: 17px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 15px;
}

.settings-tray-icon {
    height: 100%;
    width: 30px;
}

.settings-tray-icon > img {
    height: 100%;
    width: 100%;
    /* object-fit:scale-down; */
}


/* -------END OF SETTINGS TRAY------- */

</style>

<script setup>
    import { ref } from 'vue'

    const intro = ref("Dear Diary, \n\nThere's no sunshine when she's gone.")

    function includeSuggestedText() {
        const textBox = document.getElementById("journal-text")
        textBox.classList.remove("suggested")
        intro.value = "Dear Diary, \n\n"
    }

</script>