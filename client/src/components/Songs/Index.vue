<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <songs-search-panel />
            <songs-panel/>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
    components: {
        SongsPanel,
        SongsSearchPanel
    },
    data () {
        return {
            songs: null
        }
    },
    // async mounted () {
    //     // TODO: a request to backen to fetch all songs
    //     this.songs = (await SongsService.index()).data
    // }
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