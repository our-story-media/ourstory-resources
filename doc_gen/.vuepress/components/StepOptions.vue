<template>
<div class="margin">
    <el-divider content-position="left" >
        <div class="options">
            <i class="el-icon-guide"/>
            Bring Your Own Process
            </div>
        </el-divider>
        <p>
            <slot>Here are some options for content</slot>
        </p>
        <el-divider></el-divider>
    </div>
</template>



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
