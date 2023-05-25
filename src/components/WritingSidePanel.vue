<template>    
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
        <!-- <div class="settings-tray">
            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
            <a class="settings-tray-icon"><img src="../assets/settings-tray-icons/settings-icon.png" alt=""></a>
        </div> -->
    </aside>            
</template>

<style>

/* -------ASIDE------- */

aside {
    height: 100%;
    width: 100%;
    font-family: sans-serif;
}


.aside-card-container {
    border-radius: 16px;
    padding: px;
    padding-top: 0px;
    padding-bottom: 0px;
    /* height: 65%; */
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    /* width: 106%; */
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    /* flex */
    display: flex;
    flex-direction: column;    

    /* scroll */
    overflow: auto;
    visibility: hidden; 
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

/* .settings-tray {
    margin-top: 17px; */
    /* height: 100%;
    width: 100%; */
    /* display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 15px;
    position: fixed;
    bottom: 5em;
    right: 4.5em;
} */

/* .settings-tray-icon {
    height: 100%;
    width: 30px;
} */

/* tray icons are this color: #EA9010 orange #809BCE blue #ce7b91 mauve*/
/* .settings-tray-icon > img {
    height: 100%;
    width: 100%;
} */


/* -------END OF SETTINGS TRAY------- */

</style>

<script setup>
    

</script>