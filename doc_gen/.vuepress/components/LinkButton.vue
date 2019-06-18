<template>
<a :href="url">
    <el-button :type="type">
        <slot>Download</slot>
        <i class="el-icon-arrow-right"/>
    </el-button>
</a>
</template>

<script>
module.exports = {
    name:'LinkButton',
    props: ['url','type']
}
</script>