<template>
<a :href="theurl" >
    <el-button v-bind="$attrs" icon="el-icon-download" :type="type">
        <slot>Download</slot>
    </el-button>
</a>
</template>

<script>
module.exports = {
    props: ['url','type'],
    computed:{
        theurl:function(){
            if (typeof(this.$attrs.disabled)!='undefined')
            {
                return "#";
            }
            else
            {
                return this.$props.url;
            }
        }
    }
}

</script>