<template lang="pug">
.readingtime
    el-tag(class="readingtime" effect="plain" type="info")
        i(class="el-icon-reading")
        span &nbsp;{{$page.readingTime.text}}
</template>

<style>
.readingtime
{   
    /* display:inline-block; */
    text-align: right;
    margin-bottom:-4em;;
    /* float:right; */
    /* clear:both; */
}
</style>    