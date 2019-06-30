<template>
<el-steps  :active="step" process-status="finish" class="mysteps" align-center>
    <el-step title="Prep." icon="el-icon-date">
    </el-step>

    <el-step title="Ideation">
        <strong  slot="icon">1</strong>
    </el-step>

    <el-step title="Capture">
    <strong  slot="icon">2</strong></el-step>

    <el-step title="Creation">
        <strong  slot="icon">3</strong>
    </el-step>

    <el-step title="Feedback">
        <strong  slot="icon">4</strong>
    </el-step>
     <el-step title="Use" icon="el-icon-share">
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