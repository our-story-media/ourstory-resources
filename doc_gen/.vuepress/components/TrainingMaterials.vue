<template lang="pug">
div(:class="{'pullout':!example}")
    el-card(shadow="never")
        div(slot="header")
            i(class="el-icon-data-board")
            b &nbsp; {{title}}
        slot ??
</template>

<script>
module.exports = {
    props: ['example','title']
}

</script>