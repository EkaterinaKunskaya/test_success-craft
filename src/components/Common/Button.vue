<template>
    <button 
        :class="['button', {'button-transporent': transporent}]" 
        :disabled="disabled"
        v-bind="$attrs"
    >
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        transporent: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/abstracts/colors';
@import '../../styles/abstracts/mixins';

.button {
    @include font('GothicRegular', 1rem, $white-color);
    width: 13.4rem;
    height: 2.7rem;
    border-radius: 0.625rem;
    background-color: $blue-sky-color;
    border: 1px solid $blue-sky-color;
    text-align: center;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    &-transporent {
        background-color: transparent;
        color: $gray-dim-color;

        &:hover {
            color: $blue-sky-color;
            filter: brightness(1);
        }
    }
}
</style>