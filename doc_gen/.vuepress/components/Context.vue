<template lang="pug">
div(:class="{'pullout':!example}" :style={'max-width':'200px'})
    el-card(:body-style="{ padding: '0px' }" shadow="never")
      img(src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image")
      div(style="padding: 14px;")
        span 
            i(class="el-icon-view")
            strong(slot="title") Ideation Cards
        div(class="bottom clearfix")
            slot Content
</template>

<script>
module.exports = {
    props: ['example']
}
</script>