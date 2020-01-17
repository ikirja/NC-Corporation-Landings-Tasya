<template>
  <div id="app">
    <TheHeader />
    <TheLogos />
    <TheBlockOne />
    <TheBlockTwo />
    <TheBlockThree />
    <TheBlockFour />
    <TheBlockFive />
    <TheBlockSix />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheLogos from '@/components/TheLogos.vue'
import TheBlockOne from '@/components/TheBlockOne.vue'
import TheBlockTwo from '@/components/TheBlockTwo.vue'
import TheBlockThree from '@/components/TheBlockThree.vue'
import TheBlockFour from '@/components/TheBlockFour.vue'
import TheBlockFive from '@/components/TheBlockFive.vue'
import TheBlockSix from '@/components/TheBlockSix.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'app',
  components: {
    TheHeader,
    TheLogos,
    TheBlockOne,
    TheBlockTwo,
    TheBlockThree,
    TheBlockFour,
    TheBlockFive,
    TheBlockSix,
    TheFooter
  }
}
</script>

<style src="@/assets/css/main.css"></style>
