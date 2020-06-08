<template lang="pug">
el-col(:xs="24" :sm="12" :md="8")
    el-card(:body-style="{ padding: '0px', position:'relative' }")
        img(:src="img" class="image")
        div(class="body")
            strong {{title}}
            slot
        div(class="foot")
            div(style="float:left") 
                i(class="el-icon-map-location")
                span &nbsp;{{place}} 
            div(style="float:right")
                span {{date}}&nbsp;
                i(class="el-icon-date")
            div &nbsp;
</template>

<script>
module.exports = {
    props: ['title','place','date','img']
}
</script>

<style lang="stylus" scoped>
.foot
{
    border-top: 1px solid rgb(240, 240, 240);
    clear:both;
    display:block;
    padding: 1em;
    font-size: 80%;
}

.body
{
    padding:1em;
    p {
        font-size: 90%;
    }
}
</style>