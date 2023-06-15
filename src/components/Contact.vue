<script setup>

</script>

<template>
  <div class="container">
    <a href="https://www.linkedin.com/in/zaria-chen-shui/" target="_blank">
      <img class="linkedin-profile" src="../assets/images/linkedin-profile.png" alt="" >
    <h2>Meet the Developer</h2>

    </a>

  </div>
</template>

<style scoped lang="scss">

@use '@/assets/styles/scss/main';

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h2 {
    color: main.$mauve;
    font-weight: 900;
    padding-top: 4.5rem;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    text-align: center;
  }

  a {
    text-decoration:none;
  }

  .linkedin-profile {
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.3);
    transition: 0.2s ease-in;


    &:hover {
      box-shadow: 0 4px 50px rgba(255, 0, 0, 0.3);
      transition: 0.2s ease-in;
    }
  }
}

</style>
