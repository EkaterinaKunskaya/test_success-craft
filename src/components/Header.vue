<template>
  <header class="header sticky">
    <MainContainer>
      <div class="header__content">
        <BurgerMenu />
        <div class="logo">
          <a
            class="logo__link link-reset"
            href="https://scr.by/"
            target="_blank"
          >
            <img src="../assets/images/logo.png" alt="logo__img" class="logo" />
          </a>
        </div>
        <nav class="navbar">
          <ul class="navbar__list">
            <li
                class="navbar__item list-reset"
                v-for="({ idKey, name, anchor }) in headerMenuList"
                :key="idKey"
              >
                <a
                  class="navbar__link link-reset"
                  :href="`${anchor}`"
                >
                  {{ name }}
                </a>
            </li>
          </ul>
        </nav>
      </div>
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from './Common/MainContainer';
import BurgerMenu from './BurgerMenu.vue';
import { headerMenuList } from '@/shared/data/data.header';

export default {
  name: 'HeaderComponent',
  components: {
    MainContainer,
    BurgerMenu,
  },
  data() {
    return {
      headerMenuList,
    };
  },
};
</script>