<template lang="pug">
el-divider(content-position="right")
    .timeguide
        i(class="el-icon-timer")
        b &nbsp;Time Guide&nbsp;
        slot
</template>

<style>
.timeguide
{
    font-size:18px;
}
</style>