<template>
<el-steps :active="step" class="mysteps">
    <el-step title="Preparation"></el-step>

    <el-step title="Ideation"></el-step>

    <el-step title="Capture"></el-step>

    <el-step title="Creation"></el-step>

    <el-step title="Presentation"></el-step>
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