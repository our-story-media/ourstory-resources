<template lang="pug">
a(:href="url")
  el-button(:type="type")
    slot Download
      i(class="el-icon-arrow-right")
</template>

<script>
module.exports = {
    name:'LinkButton',
    props: ['url','type']
}
</script>