<template lang="pug">
.citation
    .title {{citation.title}}
    .authors
        span.author(v-for="a in citation.author")
            span.name {{a.given}} {{a.family}}
    .venue {{citation["container-title"]}} 
        strong
            i {{citation.issued["date-parts"][0][0]}}
    a.doi(:href="citation.URL") {{citation.URL}}
</template>

<script>
// const Cite = require('citation-js');
import 'babel-polyfill';
import Cite from 'citation-js';

export default {
    computed:{
        citation: function(){
            let slot = this.$slots.default;
            var citation = new Cite(slot[0].children[0].text);
            return citation.get()[0];
        }
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


