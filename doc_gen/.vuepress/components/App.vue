<template lang="pug">
el-tooltip(content="Use Mobile Application" placement="bottom" effect="light")
    div(:style="{color:'#a4c639'}" class="iconwrapper")
        span(class="fa-stack")
            font-awesome-icon(:icon="['far', 'circle']" class="fa-stack-2x ")
            font-awesome-icon(icon="tablet-alt" class="fa-stack-1x fa-rotate-270")
        div
            slot
</template>

<style lang="stylus" scoped>

</style>

