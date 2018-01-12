<template>
  <panel title="YouTube Video">
    <youtube 
      :video-id="youtubeId"
      :player-width="500"
      :player-height="281">
    </youtube>
  </panel>
</template>

<script>
  export default {
    props: [
      'youtubeId'
    ]
  }
</script>

<style scoped>

</style>