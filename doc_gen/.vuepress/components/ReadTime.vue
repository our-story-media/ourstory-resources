<template lang="pug">
.readingtime
    el-tag(class="readingtime" effect="plain" type="info")
        i(class="el-icon-reading")
        span &nbsp;{{$page.readingTime.text}}
</template>

<style>
.readingtime
{   
    text-align: right;
    margin-bottom:-4em;
}
</style>    