<script setup>
    import { onMounted, ref } from 'vue'
    import moment from 'moment';

/* ------- ENTRY INFO BAR ------------------------------------------*/
    const title = ref("")

    function currentDate() {
        let now = moment().format('LLL')
        return now        
    }

// Zen Mode Activation - mutes button colours -------------------------

    const zenMode = ref(false);

    function activateZenMode() {
        setTimeout(() => zenMode.value = !zenMode.value, 10000);
    }

    onMounted(() => {
    activateZenMode();
    })

/* ------- SONG LYRICS ENTRY PROMPT --------------------------------*/

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


    // convert entry to image

    import domtoimage from 'dom-to-image';
    function convertEntryToImage() {

    var node = document.getElementById('writing-section');
    var innerNode = document.getElementById('journal-text');

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            innerNode.remove();
            node.style.backgroundImage = "url('" + dataUrl.replace(/(\r\n|\n|\r)/gm, "") + "')" // removes line breaks in data url
            node.addEventListener("click", () => node.classList.add("punch"));
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }


</script>

<template>
    <div class="container">
        <div class="entry-info-bar">
            <input name="title" type="text" v-model="title" placeholder="Title" class="entry-title" maxlength="50"/>
            <p class="entry-date">{{ currentDate() }}</p>
        </div>

        <div class="button-container">
            <a class="single-button" id="conclude-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                <button class="conclude-button" :class="{ 'glass-button': zenMode}">Conclude</button>
            </a>   
            <a class="single-button" id="destroy-button" @click="convertEntryToImage()">
                <button class="destroy-button" :class="{ 'glass-button': zenMode}">Destroy</button>
            </a>    
        </div> 

        <div class="writing-section" id="writing-section">
            <textarea id="journal-text" class="text-box suggested" v-model="entry"></textarea>
        </div> 

        <aside>
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
        </aside> 
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
}

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


.writing-section {

    &.punch {
        -webkit-mask: radial-gradient(200px, #0000 50%, #000);
        mask: radial-gradient(200px, #0000 50%, #000);
    }
    .text-box {
        /* structure */
        height: 100%;
        width: 100%;
        background: linear-gradient(to bottom, white, #fff9ec) padding-box;
        border-radius: 10px;

        /* writing */
        box-sizing: border-box;
        padding: 3rem;
        resize: none;
        font-size: 1.2rem;
        color: #2a2f3c;
        letter-spacing: 0.2rem;
        line-height: 1.5;

        /* border */
        border: 3px solid #ffafcc;

        &:focus {
            outline: none;
            background: linear-gradient(to bottom, white, #fff9ec) padding-box,
            linear-gradient(to right, #c8b6ff, #ffafcc) border-box;
            border: 4px solid transparent;
        }

        &::-webkit-scrollbar-track {
            border-radius: 10px;
        }

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background-color: #ffafcc80;
        }
    }

    .suggested {
        color: #a3a3a3;
    }
}


aside {
    height: 100%;
    width: 100%;

    .aside-card-container {
        border-radius: 16px;
        padding: 30px;
        padding-top: 0px;
        padding-bottom: 0px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        /* flex */
        display: flex;
        flex-direction: column;    

        /* scroll */
        overflow: auto;
        visibility: hidden; 

        .aside-card {
            width: 100%;
            min-height: 300px;
            box-sizing: border-box;
            padding: 1.5rem;
            margin-bottom: 45px;

            /* glass */
            @include main.glass;

            &:last-child {
                margin-bottom: 5px;
            }

            .aside-card-heading {
                color: main.$blue;
                color: main.$nav-title;
                border-bottom: 1px solid main.$light-grey;
                padding: 0.5em;
                width: 100%;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 500;
            }
        }
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
}

.container {
    position: relative;
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-template-rows: 50px 70vh;
    row-gap: 3.5vh;
    column-gap: 1vw;
}
</style>

