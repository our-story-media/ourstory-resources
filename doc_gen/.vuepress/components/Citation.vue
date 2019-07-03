<template lang="pug">
.citation(:if="citation")
    .title {{citation.title}}
    .authors
        span.author(v-for="a in citation.author")
            span.name {{a.given}} {{a.family}}
    .venue {{citation["container-title"]}} 
        strong
            i {{citation.issued["date-parts"][0][0]}}
    a.doi(:href="citation.URL") {{citation.URL}}
        OutboundLink
</template>

<script>
import 'babel-polyfill';
// import Cite from 'citation-js';

export default {
    // props:['citation'],
    data() {
        return {citation:false}
    },
    mounted () {
        import('citation-js').then(module => {
            let slot = this.$slots.default;
            var citation = module.default(slot[0].children[0].text);
            this.citation = citation.get()[0];
        }).catch((err)=>
        {
            console.log(err);
        })
    }
}
</script>

<style lang="stylus" scoped>

.citation
{
    margin-top:2em;
    margin-bottom:2em;
}


.title
{
    font-weight: bold;
}

.venue
{
    font-style: italic;
}

.author + .author:before {
  content: ", ";
}

</style>


