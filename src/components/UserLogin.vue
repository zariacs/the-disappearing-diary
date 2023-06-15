<template>
    <div class="outer-container" v-cloak>
        <div class="container">
            <h1>The Disappearing Diary</h1>
            <h2>Sign In</h2>
            <p>to access your journal</p>

            <input placeholder="Username or email" />
            <input v-bind:type="showPassword ? 'text' : 'password'" placeholder="Password" />
            <!-- <button v-on:click="showPassword = !showPassword" >
                <span v-if="!showPassword" class="material-symbols-rounded">visibility</span>
                <span v-else class="material-symbols-rounded">visibility_off</span>
            </button> -->
            <a class="forgot-password">Forgot password?</a>
            <div class="options">
                <button @click="$router.push('write')">Sign In</button>
                <button @click="$router.push('write')">Create Account</button>

            </div>
        </div>
    </div>
</template>

<script setup>
var showPassword = false;

// function toggleVisibility() {
//     hidePassword = !hidePassword;
// }

</script>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';

.outer-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
    @include main.glass();
    background: #bf479715;
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font: 3rem;
        letter-spacing: 0.2rem;
        color: white;
        color: main.$mauve;
        padding: 1rem;
    }

    h2 {
        color: main.$mauve;
    }

    p {
        color: main.$mauve;
    }

    input {
        @include main.glass();
        width: 60%;
        height: 3rem;
        font-size: 0.95rem;
        padding: 1rem;
        margin-top: 2rem;

        &:focus {
            outline: none;
            border: 2px white solid;
        }
    }

    button {
        .material-symbols-rounded {
            color: main.$mauve;
        }
    }

    .forgot-password {
            width: 60%;
            padding-top: 0.5rem;
            color: main.$mauve;
            text-align: end;
            font-size: 0.9rem;
            cursor: pointer;

        }

    .options {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 4rem;

        button {
            @include main.button();
            margin-bottom: 2rem;
            width: 50%;
        }
    }

    

}
}




</style>