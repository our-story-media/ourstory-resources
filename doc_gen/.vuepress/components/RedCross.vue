<template lang="pug">
a(:href="href" :class="{'pullout':!example}")
    el-button(type="danger" plain round)
        i(class="el-icon-document-copy")
        slot View Additional IFRC Materials
</template>

<script>
module.exports = {
    props: ['href','example']
}
</script>