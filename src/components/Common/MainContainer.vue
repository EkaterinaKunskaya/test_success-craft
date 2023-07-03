<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MainContainer',
}
</script>

<style scoped lang="scss">
@import '../../styles/abstracts/breakpoints';

.wrapper {
    width: 87%;
    margin: 0 auto;
    overflow: hidden;

    @media(max-width: $desktop-xl) {
        width: 90%;
    }

    
    @media(max-width: $tablet-xlg) {
        width: 95%;
    }

    
    @media(max-width: $tablet-lg) {
        width: 98%;
    }

    @media(max-width: $mobile-sm) {
        width: 100%;
    }
}
</style>