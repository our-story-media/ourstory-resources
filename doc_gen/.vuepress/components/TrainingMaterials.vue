<template lang="pug">
div(:class="{'pullout':!example}")
    el-card(shadow="never")
        div(slot="header")
            i(class="el-icon-data-board")
            b &nbsp;Training Materials
        slot ??
</template>

<script>
module.exports = {
    props: ['example']
}

</script>