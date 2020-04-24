<template lang="pug">
el-card(shadow="none" class="admin")
    div(slot="header")
        i(class="el-icon-user-solid")
        span &nbsp;{{title}}
    slot The lead facilitator should perform this action. In might need to be performed in the field, or at a later time.
</template>

<script>
module.exports = {
    props: ['title']
}
</script>

<style>
.admin
{
    border-left:5px solid #69ae7f;
    opacity: 0.6;
}
</style>
