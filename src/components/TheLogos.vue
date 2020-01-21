<template>
  <div class="content" id="header">
    <div class="logos">
      <img v-in-viewport.once @click="goToNcsemena" class="logos__item cursor__pointer logos__item-ro" src="@/assets/img/RO_logo.png" />
      <img v-in-viewport.once class="logos__item logos__item-lzh" src="@/assets/img/liniya_zhizni_logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToNcsemena: function(){
      window.open('https://www.ncsemena.ru/', '_blank')
    }
  }
}
</script>

<style scoped>
.logos {
  display: flex;
  justify-content: space-between;
  align-items: center
}

.logos__item {
  width: 45%;
}

.cursor__pointer {
  cursor: pointer;
}

.logos__item-ro {
  opacity: 0;
  transform: translateX(50px);
  transition: .3s ease-in;
}

.logos__item-ro.in-viewport {
  opacity: 1;
  transform: translateX(0);
}

.logos__item-lzh {
  opacity: 0;
  transform: translateX(-50px);
  transition: .3s ease-in;
}

.logos__item-lzh.in-viewport {
  opacity: 1;
  transform: translateX(0);
}
</style>