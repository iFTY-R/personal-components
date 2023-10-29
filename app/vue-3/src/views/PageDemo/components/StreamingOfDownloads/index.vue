<!--
下载的流式传输

当浏览器只要确认响应是成功的，把响应头接受完就可以触发下载了，不需要等待数据全部传输过来
数据直接流向文件


使用 a 标签下载
<a href="url">下载</a>
触发浏览器的下载行为
  第一种方式：服务器端添加响应头（设置为附件格式，并设置一个默认的文件名）：'Content-Disposition': 'attachment; filename=xxx.pdf'
    浏览器会自动触发下载行为
  第二种方式：在 a 标签上添加 download 属性：download="url.pdf"
    浏览器会自动触发下载行为

当文件需要鉴权之后才可以下载时：



使用 axios 下载文件，需要等待所有数据传输到客户端之后才可以进行保存为文件，
-->
<script setup>
defineOptions({
  name: 'StreamingOfDownloads',
})
</script>

<template>
  <div>
    123
  </div>
</template>

<style scoped>

</style>
