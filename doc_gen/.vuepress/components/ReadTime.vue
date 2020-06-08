<template lang="pug">
.readingtime
    el-tag(class="readingtime" effect="plain" type="info")
        i(class="el-icon-reading")
        span &nbsp;{{text}}
</template>

<script>
export default {
    computed:{
        text:function(){
            return `${Math.round(this.$page.readingTime.minutes)} ${this.$site.themeConfig.locales[this.$localePath].readtime}`
        }
    }
}
</script>

<style>
.readingtime
{   
    text-align: end;
    margin-bottom:-4em;
    /* float: inline-end; */
    clear:both;
}
</style>    