<template>
<a :href="url">
    <el-button icon="el-icon-download" :type="type">
        <!-- <i class=""/> -->
        <slot>Download</slot>
    </el-button>
</a>
</template>

<script>
module.exports = {
    props: ['url','type']
}

</script>