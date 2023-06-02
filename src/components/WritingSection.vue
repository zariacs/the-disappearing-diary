<template>    
    <div class="writing-section">
        <textarea id="journal-text" class="text-box suggested" v-model="entry"></textarea>
    </div>                
</template>

<style scoped>

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

</style>


<script setup>
    import { onMounted, ref } from 'vue'


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

</script>