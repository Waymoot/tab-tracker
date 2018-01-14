<template>
  <div>
    <!-- first row -->
    <v-layout>
      <!-- left column -->
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <!-- right column -->
      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <!-- second row -->
    <v-layout class="mt-2">
      <!-- left column -->
      <v-flex xs6>
        <lyrics :song="song" />
      </v-flex>
      <!-- right column -->
      <v-flex xs6 class="ml-2">
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SongsService from "@/services/SongsService";
import SongMetadata from "./SongMetadata"; // sub components we do relative
import YouTube from "./YouTube"; // sub components we do relative
import Lyrics from "./Lyrics"; // sub components we do relative
import Tab from "./Tab"; // sub components we do relative
import SongHistoryService from "@/services/SongHistoryService";

export default {
  data() {
    return {
      song: {}
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'])
  },
  async mounted() {
    const songId = this.route.params.songId;
    this.song = (await SongsService.show(songId)).data;

    // post to history that the user viewed this current song.
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId,
        userId: this.user.id
      });
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  font-size: 12px;
  padding-left: 10px;
}
</style>