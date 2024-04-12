<script setup>
import HelloWorld from "@/components/HelloWorld.vue"
import TheWelcome from "@/components/TheWelcome.vue"
function showMsg() {
  console.log("You did it!")
}
</script>

<template lang="pug">
header
  img.logo(height="125", width="125", src="@/assets/logo.svg", alt="Vue logo")
  .wrapper
    HelloWorld(@click="showMsg", msg="You did it!")
main
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (width >= 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
