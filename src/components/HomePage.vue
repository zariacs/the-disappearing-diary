<template>
    <div class="outer-container">
        <div class="container">
            <h2>Ready to open your journal?</h2>
            <div class="options">
                <button @click="$router.push('write')">Write</button>
                <span class="spacer"></span>
                <button @click="$router.push('login')">Sign In</button>
            </div>
            <div class="info">
                <button @click="$router.push('wiki')">
                    <span class="material-symbols-rounded">info</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use '@/assets/styles/scss/main';

.outer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.container {
    height: 80%;
    width: 90%;
    padding: 5rem;

    @include main.glass();
    background: transparent;
    background: #7947bf15;
    background: #bf479715;

    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(2px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    h2 {
        color: white;
        font-weight:700;
        letter-spacing: 0.3rem;
        font-size: 2rem;
        text-shadow: 0px 1px 10px main.$light-blue;
        text-align: center;

        @media only screen and (max-width: 720px) {
            justify-content: center;
        }
    }

    .options {
        display: flex;
        flex-direction: row;
        padding-top: 4rem;
        padding-left: 5rem;
        padding-right: 5rem;

        @media only screen and (max-width: 720px) {
            flex-direction: column;
            padding-top: 5rem;
        }
    

        .spacer {
            width: 4rem;
            @media only screen and (max-width: 720px) {
                height: 3rem;        
            }
            
        }

        button {
            @include main.button();
        }
    }

    .info {
        position: absolute;
        bottom: 1rem;
        right: 2rem;
        button {
            color: white;
            text-transform:capitalize;
            
            span {
                // change info text color here
                // color: main.$mauve;
                font-size: 1.7rem;
            }         
        }
    }
}
</style>