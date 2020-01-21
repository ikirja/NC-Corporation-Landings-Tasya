<template>
  <div class="navbar">
    <ul class="navbar-menu">
      <li class="navbar-menu__item">
        <a class="navbar-menu__item-link" href="#header" v-smooth-scroll>Главная</a>
      </li>
      <li class="navbar-menu__item">
        <a class="navbar-menu__item-link" href="#help" v-smooth-scroll>Поможем вместе!</a>
      </li>
      <li class="navbar-menu__item">
        <a class="navbar-menu__item-link" href="#about" v-smooth-scroll>О чём книга</a>
      </li>
      <li class="navbar-menu__item">
        <a class="navbar-menu__item-link" href="#buy" v-smooth-scroll>Купить</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'theheader'
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .7);
  z-index: 1000;
}

.navbar-menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.navbar-menu__item {
  margin-right: 20px;
  display: inline-block;
  font-size: 1rem;
}

.navbar-menu__item-link {
  color: #444;
}
</style>