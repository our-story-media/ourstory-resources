<template>
<div class="background">
<div class="margin">
    <el-divider content-position="left" >
        <div class="options">
            <i class="el-icon-guide"/> Options:
            {{title}}
            </div>
        </el-divider>
        <p class="content">
            <slot>How you decide to apply some steps in the process are dependent on your particular context. These will be indicated in boxes like this.</slot>
        </p>
        <el-divider></el-divider>
    </div>
    </div>
</template>

<script>
module.exports = {
    props: ['title']
}

</script>

<style lang="stylus" scoped>
.background
{
    border-left 1px solid #DCDFE6;
    border-right 1px solid #DCDFE6;
}
.margin
{
    margin-top:3em;
    margin-bottom:3em;
    
}
.options
{
    color:grayscale;
    font-size: 18px;
    
}
.content
{
    padding-left:1em;
    padding-right:1em;
    // margin-right:-2em;
}
</style>
