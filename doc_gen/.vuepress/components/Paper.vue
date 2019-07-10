<template lang="pug">
el-tooltip(content="Use Printed Materials" placement="bottom" effect="light")
    span(:style="{color:'#0087F5'}" class="iconwrapper")
        span(class="fa-stack")
            font-awesome-icon(:icon="['far', 'circle']" class="fa-stack-2x " )
            font-awesome-icon(icon="scroll" class="fa-stack-1x")
        div
            slot
</template>