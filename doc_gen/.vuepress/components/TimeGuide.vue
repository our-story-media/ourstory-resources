<template lang="pug">
h2
    slot
    //- el-divider(content-position="right")
    .timeguide
        i(class="el-icon-timer")
        b &nbsp;Time Guide&nbsp;
        span {{time}}
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
    line-height: 3em;
    color: $accentColor;
}

h2
{
    clear:both;
}

</style>