<template>
  <div class="about">
    <h1>ABOUT PAGE</h1>
  </div>
</template>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


div {
    @include main.route-placeholder();
}

</style>
