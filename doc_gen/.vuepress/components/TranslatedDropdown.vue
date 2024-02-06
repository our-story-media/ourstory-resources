<template lang="pug">
el-dropdown(split-button type="danger")
    span.el-icon-download &nbsp;
    a(:href="linker(defaultlang)") {{title}} ({{defaultlang}})
    el-dropdown-menu(slot="dropdown")
        el-dropdown-item(v-for="loc in otherlocs")
            a(:href="linker(loc)") {{title}} ({{loc}})
</template>

<script>
  module.exports = {
    props: ["title", "langs", "link"],
    computed: {
      defaultlang: function() {
        let id = this.langs.indexOf(this.language);
        if (id == -1) return this.langs[0];
        else return this.language;
      },
      language: function() {
        return this.$lang.split("-")[0];
      },
      otherlocs: function() {
        let id = this.langs.indexOf(this.defaultlang);
        let ll = this.langs.splice(id, 1);
        return this.langs;
      },
    },
    methods: {
      linker: function(l) {
        return this.link.replace("%%", l);
      },
    },
  };
</script>
