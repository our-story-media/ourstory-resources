<template>

<el-steps  :active="step" process-status="finish" class="mysteps" align-center>
    
    <el-step :title="this.$site.themeConfig.locales[$localePath].steps[0]" icon="el-icon-date">
    </el-step>

    <el-step :title="this.$site.themeConfig.locales[$localePath].steps[1]">
        <strong  slot="icon">1</strong>
    </el-step>

    <el-step :title="this.$site.themeConfig.locales[$localePath].steps[2]">
    <strong  slot="icon">2</strong>
    </el-step>

    <el-step :title="this.$site.themeConfig.locales[$localePath].steps[3]">
        <strong  slot="icon">3</strong>
    </el-step>

    <el-step :title="this.$site.themeConfig.locales[$localePath].steps[4]">
        <strong  slot="icon">4</strong>
    </el-step>

     <el-step :title="this.$site.themeConfig.locales[$localePath].steps[5]" icon="el-icon-share">
    </el-step>
</el-steps>

</template>

<script>
module.exports = {
    props: ['step']
}

</script>

<style>
.mysteps
{
    margin-top:6em;
    margin-bottom:2em;
}
</style>