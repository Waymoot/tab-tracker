<template>
  <panel title="Songs">
      <v-btn
      slot="action"
      :to="{name: 'songs-create'}"
      fab
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle>
          <v-icon>add</v-icon>
      </v-btn>
      <div v-for="song in songs" 
          class="song"
          :key="song.id">
          <v-layout>
              <v-flex xs6>
                  <div class="song-title">
                      {{song.title}}            
                  </div>
                  <div class="song-artist">
                      {{song.artist}}
                  </div>
                  <div class="song-album">
                      {{song.album}}
                  </div>
                  <v-btn dark
                      class="light-blue"
                      :to="{name: 'song', params: {songId: song.id}}">
                      View
                  </v-btn>
              </v-flex>
              <v-flex xs6>
                  <img class="album-image" :src="song.albumImageUrl" />
              </v-flex>
          </v-layout>
      </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
    data () {
        return {
            songs: null
        }
    },
    async mounted () {
        // TODO: a request to backen to fetch all songs
        this.songs = (await SongsService.index()).data
    }
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