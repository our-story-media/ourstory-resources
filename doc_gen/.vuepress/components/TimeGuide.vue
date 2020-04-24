<template lang="pug">
//- h2(id="time")
div
    .timeguide
        i(class="el-icon-timer")
        b &nbsp;&nbsp;
        span {{title}}
    slot
    div(style="clear:both")
</template>

<script>
module.exports = {
    props: ['title']
}
</script>

<style lang="stylus" scoped>
.timeguide
{
    font-size:14px;
    float:right;
    line-height: 2.4em;
    color: $accentColor;
}

h2
{
    // clear:both;
}

</style>