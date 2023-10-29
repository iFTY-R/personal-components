<script setup>
import useBrowserFingerprint from '@/hooks/useBrowserFingerprint.js';

defineOptions({
  name: 'BrowserFingerprint',
})

const fingerprint = useBrowserFingerprint();


</script>

<template>
  <div>{{ fingerprint }}</div>
</template>

<style scoped>

</style>
