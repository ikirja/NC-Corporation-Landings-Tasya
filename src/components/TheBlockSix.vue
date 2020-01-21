<template>
  <div class="content" id="buy">
    <div v-in-viewport.once class="block">
      <div class="block__item">
        <img class="block__item-header" src="@/assets/img/6_page_Header.png" />
      </div>
      <div class="block__item">
        <div v-in-viewport.once class="block__icon block__icon-1">
          <span class="block__icon-desc">В наличии на складе</span>
          <img class="block__icon-img" src="@/assets/img/6_page_Icon_1.png" />
        </div>
        <div v-in-viewport.once class="block__icon block__icon-2">
          <span class="block__icon-desc">Бесплатная доставка</span>
          <img class="block__icon-img" src="@/assets/img/6_page_Icon_2.png" />
        </div>
      </div>
      <div class="block__item">
        <div @click="goToNcsemena" class="block__call-to-action">
          <img class="block__call-to-action-img" src="@/assets/img/call-to-action.png" />
        </div>
      </div>
      <div class="block__item">
        <p class="block__item-desc">
          Книгу можно приобрести вместе с любым товаром. В случае, если вы покупаете книгу отдельно, мы доставим её Вам по территории РФ бесплатно.
        </p>
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