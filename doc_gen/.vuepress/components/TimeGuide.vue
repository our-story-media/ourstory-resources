<template lang="pug">
//- h2(id="time")
div
    .timeguide
        i(class="el-icon-timer")
        b &nbsp;Time Guide&nbsp;
        span {{time}}
    slot
    div(style="clear:both")
</template>

<script>
module.exports = {
    props: ['time']
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