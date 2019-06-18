<template>
<div class="margin">
    <el-divider content-position="left" >
        <div class="options">
            <i class="el-icon-guide"/>
            {{title}}
            </div>
        </el-divider>
        <p>
            <slot>How you decide to apply some steps in the process are dependent on your particular context. These will be indicated in boxes like this.</slot>
        </p>
        <el-divider></el-divider>
    </div>
</template>

<script>
module.exports = {
    props: ['title']
}

</script>

<style lang="stylus" scoped>
.margin
{
    margin-top:3em;
    margin-bottom:3em;
}
.options
{
    color:$accentColor;
    font-size: 22px;
    
}
</style>
