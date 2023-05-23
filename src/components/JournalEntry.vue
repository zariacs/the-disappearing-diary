<template>
    <div class="moving-background">
        <div class="slider-container">
            <div class="slider-image"></div>
            <div class="glass">
                <header>
                    <h1 id="page-title" v-if="title == ''">tempral</h1>
                    <h1 id="page-title" v-else>{{ title }}</h1>
                </header>
                <div class="writing-section">
                    <div class="entry-info-bar">
                        <input name="title" type="text" v-model="title" placeholder="Title" class="entry-title"/>
                    </div>
                    <textarea id="journal-text" class="text-box suggested" v-model="entry"></textarea>
                </div>
                <aside>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        <button id="destroy-button">Destroy</button>
                    </a>
                    <div class="aside-card-spacer"></div>
                    <div class="aside-card-container .aside-card-container-delayed" id="aside-card-container">
                        <div class="moods aside-card">
                            <h2 class="aside-card-heading">Moods</h2>
                        </div>
                        <div class="involved aside-card">
                            <h2 class="aside-card-heading"></h2>
                        </div>
                        <div class="involved aside-card">
                            <h2 class="aside-card-heading"></h2>
                        </div>                      
                    </div>
                    <div class="settings-tray">
                            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
                            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
                            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
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
    background-image: url("../assets/images/background.png");
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
  background: url("../assets/images/background.png") repeat-x;
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation: slide 400s linear infinite;
  margin: 0;
}

/* -------END OF BACKGROUND MOVEMENT------- */


/* HEADER */

header {
    position: absolute;
    top: 20px;
    left: 3%;
    width: 100%;
    height: 80px;
    color: #fff9ec;
    font-family: sans-serif;
}

/* -------END OF HEADER------- */


/* -------MAIN------- */

.writing-section {
    position: absolute;
    top: 80px;
    left: 3%;
    width: 69.5%;
    min-width: 700px;
    height: 100vh;
}

.entry-info-bar {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 50px;
    font-family: sans-serif;
    box-sizing: border-box;
    padding-left: 3%;
    padding-right: 3%;
    display: flex;
    flex-direction: row;

    /* glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.7px);
    -webkit-backdrop-filter: blur(14.7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.entry-title, .entry-title:focus, .entry-title::placeholder {
    color: #7698b3;
    font-size: 1em;
    letter-spacing: 0.10em;
    caret-color: white;

    background: transparent;
    border: none;
    outline: none;
    /* color: white; */
}



.text-box {
    /* structure */
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 70vh;
    font-family: sans-serif;
    background: linear-gradient(to bottom, white, #fff9ec) padding-box;
    border-radius: 10px;

    /* writing */
    box-sizing: border-box;
    padding: 50px;
    resize: none;
    font-size: 24px;
    color: #2a2f3c;

    /* border */
    border: 3px solid #ffafcc;
}

.text-box:focus {
    outline: none;
    background: linear-gradient(to bottom, white, #fff9ec) padding-box,
    linear-gradient(to right, #c8b6ff, #ffafcc) border-box;
    border: 4px solid transparent;
}

.suggested {
    color: #a3a3a3;
}

/* TEXT BOX SCROLLING */

.text-box::-webkit-scrollbar-track {
    border-radius: 10px;
}

.text-box::-webkit-scrollbar {
    width: 10px;
}

.text-box::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #ffafcc80;
}

/* -------END OF MAIN------- */


/* -------ASIDE------- */

aside {
    position: absolute;
    top: 120px;
    right: 3%;
    width: 23.5%;
    height: 100%;
    font-family: sans-serif;
}

#destroy-button {
    /* structure */
    margin-left: 30px;
    background-color: #EA638C;
    height: 50px;
    width: 90%;
    border-radius: 16px;
    border: 0px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    /* text */
    color: white;
    font-weight: bolder;
    font-size: larger;
    letter-spacing: 0.2em;
}

.aside-card-container {
    border-radius: 16px;
    padding: 30px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 65%;
    box-sizing: border-box;
    width: 106%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    /* flex */
    display: flex;
    flex-direction: column;    

    /* scroll */
    overflow: auto;
    visibility: hidden;
}

.aside-card-spacer {
    min-height: 30px;
    width: 100%;
    z-index: 10;
}

/* ASIDE CARD SCROLLING */

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(245, 245, 245,.1);
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 6px rgba(250,250,250,.8);
}

.aside-card {
    width: 100%;
    min-height: 280px;
    font-family: sans-serif;
    box-sizing: border-box;
    padding-left: 1.5em;
    padding-right: 1.5em;
    margin-bottom: 40px;

    /* glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.7px);
    -webkit-backdrop-filter: blur(14.7px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.aside-card, .aside-card-container:hover, .aside-card-container:focus {
    visibility: visible;
}

.aside-card-container-delayed {
    transition: visibility 0.2s;
}

.aside-card-container-delayed:hover {
    transition: visibility 0s 0.2s;
}

.aside-card-heading {
    color: #7698b3;
    border-bottom: 1px solid rgba(255,255,255,0.7);
    padding: 0.5em;
    width: 90%;
}

/* END OF ASIDE CARD SCROLLING */

/* -------END OF ASIDE------- */


/* -------SETTINGS TRAY------- */

.settings-tray {
    margin-top: 17px;
    /* height: 100%;
    width: 100%; */
    display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 15px;
    position: fixed;
    bottom: 5em;
    right: 4.5em;
}

.settings-tray-icon {
    height: 100%;
    width: 30px;
}

/* tray icons are this color: #EA9010 orange #809BCE blue #ce7b91 mauve*/
.settings-tray-icon > img {
    height: 100%;
    width: 100%;
}


/* -------END OF SETTINGS TRAY------- */

</style>

<script setup>
    import { onMounted, ref } from 'vue'

    const title = ref("")


    const songLyricsPrompt = [
        "Ain't no sunshine when she's gone.",
        "Ain't no mountain high enough.",
        "Billie Jean is not my girl and the kid is not my son.",
        "Girls just wanna have fun."
    ]

    function chooseSong() {
        const song = songLyricsPrompt[Math.floor(Math.random() * songLyricsPrompt.length)]
        return song
    }

    const greeting = "Dear Diary, \n\n"
    const journalPrompt = greeting + chooseSong()
    const entry = ref(journalPrompt)


    onMounted(() => {
        const textBox = document.getElementById("journal-text")
        

        function noUserEntry() {
            noUserEntry.value = (entry.value == journalPrompt || entry.value == greeting|| entry.value == "")
            return noUserEntry.value
        }

        function revertToGreeting() {
            if (noUserEntry()) {
                textBox.classList.remove("suggested")
                entry.value = greeting
            }        
        }

        function revertToBaseEntry() {
            if (noUserEntry()) {
                console.log("No user entry")
                textBox.classList.add("suggested")
                entry.value = journalPrompt
            }
        }

        textBox.onfocus = function() {revertToGreeting()}
        textBox.onblur = function() {revertToBaseEntry()}
    })

</script>