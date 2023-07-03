<template>
    <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
            <span></span>
        </label>
        <ul class="menu__box">
            <li
                class="navbar__item list-reset menu__item"
                v-for="{ idKey, name, anchor } in headerMenuList"
                :key="idKey"
            >
                <a class="navbar__link link-reset" :href="`${anchor}`">
                    {{ name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { headerMenuList } from "@/shared/data/data.header";

export default {
    name: 'BurgerMenu',
    data() {
        return {
            headerMenuList,
        };
    },
};
</script>