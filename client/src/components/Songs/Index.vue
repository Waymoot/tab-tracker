<template>
    <v-layout>
        <v-flex cs6>
            <songs-bookmarks />

        </v-flex>
        <v-flex xs6 class="ml-2">
            <songs-search-panel />
            <songs-panel class="mt-2" />
        </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsService from '@/services/SongsService'
export default {
    components: {
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks
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

</style>