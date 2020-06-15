<template lang="pug">
.banner
    slot
</template>

<style lang="stylus" scoped>

.banner
    background-color #B2EBF2
    // position absolute
    // left 0
    display block
    // z-index 300
    // top 0
    padding .6em
    line-height 2em
    border-radius .6em;
    border 1px solid #26C6DA
    width 100%
    // height $navbarHeight
    p
        padding 0
        margin 0

</style>