<template>
    <div class="outer-container">
        <div class="inner-container">
            <h2>The disappearing diary Project</h2>
            <h3>Inspiration</h3>
            <p>
                I wanted to build a digital journaling experience. 
                <br><br>
                I realize that a lot of our digital writing tools are productivity based, akin to writing in an executive notebook, which is fine. But for people who journal, instead of going to the store and buying a JMD $300 notebook, these people are willing to spend $2000 on a beautiful hardcover journal with thick, gold-embossed pages and a tassel, then go home, choose their favourite pen, and write. 
                <br><br>
                I appreciate the benefits that software provides. We capture the core features of a product and add great things like ease of sharing, syncing across devices, and increased portability. But I am aware of what is lost in the translation of a real world activity into software. 
                <br><br>
                For example, when we wanted light, we would strike a match, feel the friction against the match box, smell the sulfur, hear the pop-sizzle of the flame lighting the wick for the first time, and then we have light. With software, we open our phones, slide down the top drawer, and press the torch button. The core feature is definitely there, but the experience is no longer as rich. With the use of software alternatives increasing, what is lost in the richness of our lived experiences? The romanticism and pleasure of our daily activities?
                <br><br>
            </p>
            <p class="quote">
                Supplementary - <i>completing or enhancing something</i>
            </p>
            <br><br>
            <p>
                This project is an experiment of supplementalism. In the same way that software supplements the physical world, so too can the real world supplement software. What is missing from software? What can be added? And how can people’s lives be richer instead of bland-er, experiential instead of exclusively functional?
            </p>
            <br><br><br><br>
        </div>
    </div>
</template>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';

.outer-container {
    @include main.glass();
    background: #7947bf15;
    background: #bf479715;


    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;

    .inner-container {
        width: 70%;
        height: 100%;
        padding: 3rem;
        padding-top: 5rem;

        letter-spacing: 0.2rem;

        h2 {
            padding-bottom: 4rem;
            font-size: 5rem;
            font-weight: 800;
            color: main.$blue;
            letter-spacing: 0.5rem;
            text-align: center;
            text-shadow: 0px 1px 5px main.$light-blue;
            text-transform: uppercase;
            line-height: 6rem;

        }

        h3 {
            padding-bottom: 2rem;
            font-size: 1.7rem;
            color: main.$blue;
            text-transform: uppercase;
            text-align: center;
            line-height: 6rem;

        }

        p {
            color: rgb(92, 154, 140);
            color: main.$blue;
            line-height: 2.5rem;
            font-weight:500;
            font-size: 1.2rem;
            letter-spacing: 0.18rem;

            &.quote {
                text-align: center;
            }
            
        }

        


    }
}

</style>