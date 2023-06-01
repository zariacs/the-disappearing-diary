<script setup>
    import WritingSection from '@/components/WritingSection.vue'
    import DestructionButton from '@/components/DestructionButton.vue'
    import WritingSidePanel from '@/components/WritingSidePanel.vue'
    import EntryInfoBar from '@/components/EntryInfoBar.vue'
</script>

<template>
    <div class="container">
        <EntryInfoBar />
        <DestructionButton />
        <WritingSection />
        <WritingSidePanel />
    </div>

</template>

<style scoped lang="scss">
.container {
    position: relative;
    margin-right: 3vw;
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-template-rows: 50px 70vh;
    row-gap: 3.5vh;
    column-gap: 1vw;
}

</style>