<template>
<el-dropdown split-button type="danger"><a v-href="base">{{links}}</a>
<el-dropdown-menu slot="dropdown">
<el-dropdown-item><a href="https://github.com/our-story-media/ourstory-resources/raw/master/field-materials/stickers/L7163-oecd-stickers-template-ar.docx">Stickers Template (Word Docx) (ar)</a></el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
</template>

<script>
module.exports = {
    props: ['base','locs','name'],
    computed:{
        links:function(){
            var locs = this.locs;
            // var langs = locs.split(',');
            console.log("***"+locs);
            // var items = [];

            // for (var i=0;i<locs.length;i++)
            // {   
            //     items.push({
            //         name: this.$props.name + '(' + locs[i] + ')',
            //         url:this.$props.base.replace('***',locs[i])
            //     });
            // }

            // return items;
        }
    }
}

</script>