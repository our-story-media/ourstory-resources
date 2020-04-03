<template lang="pug">
//- div(:class="{'pullout':!example}")
el-card(:body-style="{ padding: '0px' }" shadow="never")
    //- img(src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image")
    //- span
        i(class="el-icon-view")
        strong(slot="title") Ideation Cards
    //- div(class="bottom clearfix")
    slot Content
    div(style="padding: 14px;")
        span {{title}}
</template>

<script>
module.exports = {
    props: ['title']
}
</script>

<style lang="stylus" scoped>
img
{
    margin-top:-2em;
}
</style>
