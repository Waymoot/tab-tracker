<template>
  <panel title="Song Metadata" >
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
            {{song.title}}            
        </div>
        <div class="song-artist">
            {{song.artist}}
        </div>
        <div class="song-album">
            {{song.genre}}
        </div>
        <v-btn
          dark
          :to="{name: 'song-edit',
            params () {
              return {
                songId: song.id
                }
            }}"
          class="cyan">
            Edit
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br/>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
.song {
    padding: 20px;
    max-height: 300px;
    overflow: hidden;
}
.song-title {
    font-size: 30px;
}
.song-artist {
    font-size: 24px;
}
.song-album {
    font-size: 18px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>