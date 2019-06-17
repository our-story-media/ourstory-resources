---
title: What is Our Story?
---

<ReadTime />

# What is Our Story?

<Leader>

{{$ourstory}} is...

</Leader>

## The Steps

The {{$ourstory}} process consists of 

<el-steps direction="vertical" :active="1">
<el-step title="Step 1" description="test"></el-step>

<el-step title="Step 2"></el-step>

<el-step title="Step 3"></el-step>
</el-steps>

<!-- <div class="block"> -->
<el-timeline>
<el-timeline-item timestamp="Day 1" placement="top">

<h4>Update Github template</h4>
<p>Tom committed 2018/4/12 20:46</p>

</el-timeline-item>
<el-timeline-item timestamp="Day 2" placement="top">

<h4>Update Github template</h4>
<p>Tom committed 2018/4/3 20:46</p>

</el-timeline-item>
<el-timeline-item timestamp="Day 3" placement="top">

<h4>Update Github template</h4>
<p>Tom committed 2018/4/2 20:46</p>

</el-timeline-item>
<el-timeline-item timestamp="Day 4" placement="top">

<h4>Update Github template</h4>
<p>Tom committed 2018/4/2 20:46</p>

</el-timeline-item>
<el-timeline-item timestamp="Day 5" placement="top">

<h4>Update Github template</h4>
<p>Tom committed 2018/4/2 20:46</p>

</el-timeline-item>
</el-timeline>
<!-- </div> -->


## Technology Considerations

::: tip
Although advanced computer skills are not a requirement, some knowledge of using computers and software will be useful during the setup process.
:::

Our Story consists of an application running on a computer \(laptop\) which is present at the deployment location, alongside an Android application running on mobile devices which at various points communicate with the local computer over WiFi.

No upstream \(internet\) is required at the deployment location, and if appropriate batteries and power management is used, Our Story can be deployed in remote locations without power or connectivity.