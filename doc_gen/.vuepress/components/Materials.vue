<template lang="pug">
div(:class="{'pullout':!example}")
    el-card(shadow="never")
        div(slot="header")
            i(class="el-icon-tickets")
            strong &nbsp; Materials
        slot
</template>

<script>
module.exports = {
    props: ['example']
}
</script>

<style lang="stylus">
.el-card
{
    ul
    {
        margin: 0;
    }
}
</style>