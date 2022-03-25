<template lang="pug">
div
  a(:href="download")
    el-button(type="primary")
      slot Download ({{ realversion.trim() }})&nbsp;
        i.el-icon-download
</template>

<script>
module.exports = {
  props: ["file", "version"],
  data: () => {
    return {
      realversion: "??",
      download: "",
    };
  },
  async mounted() {
    let URL = `https://download.indaba.dev/${this.version}`;

    this.download = `https://download.indaba.dev/${this.file}`;

    // console.log(URL);
    let v = await fetch(URL);
    // console.log(v);
    this.realversion = await v.text();

    // let ff = await fetch(this.download, { method: "HEAD" });

    // console.log(ff);
  },
};
</script>