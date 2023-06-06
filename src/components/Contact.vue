<script setup>

</script>

<template>
  <div class="heading-wrapper">
    <h1>MEET THE DEVELOPER</h1>
  </div>
</template>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';

div {
    @include main.route-placeholder();

    .heading-wrapper {
      width: 250px;
      height: 2em;
      -webkit-text-fill-color: transparent;
      background: transparent linear-gradient(180deg,#7549f2,#df58d2 50%,#ed787c);
      -webkit-background-clip: text;
      background-clip: text;
    }
}

</style>
