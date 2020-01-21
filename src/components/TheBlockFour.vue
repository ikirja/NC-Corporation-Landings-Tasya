<template>
  <div class="content">
    <div v-in-viewport.once class="block">
      <div class="block__item">
        <img class="block__item-header" src="@/assets/img/4_page_header.png" />
      </div>
      <div class="block__item">
        <div v-in-viewport.once class="block__icon block__icon-rev-1">
          <span class="block__icon-desc">Оригинальные иллюстрации</span>
          <img class="block__icon-img" src="@/assets/img/4_page_icon_1.png" />
        </div>
        <div v-in-viewport.once class="block__icon block__icon-rev-2">
          <span class="block__icon-desc">Непередаваемая атмосфера детства</span>
          <img class="block__icon-img" src="@/assets/img/4_page_icon_2.png" />
        </div>
        <div v-in-viewport.once class="block__icon block__icon-rev-3">
          <span class="block__icon-desc">Одобрено нашими детьми</span>
          <img class="block__icon-img" src="@/assets/img/4_page_icon_3.png" />
        </div>
      </div>
      <div class="block__item">
        <div @click="goToNcsemena" class="block__call-to-action">
          <img class="block__call-to-action-img" src="@/assets/img/call-to-action.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToNcsemena: function(){
      window.open('https://www.ncsemena.ru/shop/katalogi_2017/kniga_tasya-id853075/', '_blank')
    }
  }
}
</script>