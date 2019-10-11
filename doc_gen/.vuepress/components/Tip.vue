<template lang="pug">
div.custom-block.tip
    p
     strong {{title}}
    slot
</template>

<script>
module.exports = {
    props: ['title']
}
</script>