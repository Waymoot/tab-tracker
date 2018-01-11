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
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'   // sub components we do relative
import YouTube from './YouTube'             // sub components we do relative
import Lyrics from './Lyrics'               // sub components we do relative
import Tab from './Tab'                     // sub components we do relative
export default {
    data () {
        return {
            song: {}
        }
    },
    async mounted () {
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
    },
    components: {
        Panel,
        SongMetadata,
        YouTube,
        Lyrics,
        Tab
    }
}
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