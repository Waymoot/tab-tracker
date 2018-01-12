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
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
            Set as Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
            Unset as Bookmark
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
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      isBookmarked: false,
      bookmark: {}
    }
  },
  methods: {
    async setAsBookmark() {
      try{
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (error) {
        console.log(error)
      }
    }, 
    async unsetAsBookmark(){
      try{
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (error) {
        console.log(error)
      }
    }
  },
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) { // dont do this unless the user is logged in
        return
      }

      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (error) {
        console.log(error)
      }
      }
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