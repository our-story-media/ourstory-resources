<template lang="pug">
div(:style="{color:'#962DFC'}" class="iconwrapper")
    span(class="fa-stack")
        font-awesome-icon(:icon="['far', 'circle']" class="fa-stack-2x ")
        font-awesome-icon(icon="laptop" class="fa-stack-1x")
    div
        slot
</template>