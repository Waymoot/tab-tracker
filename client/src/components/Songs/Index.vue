<template>
    <v-layout>
        <v-flex xs6 v-if="isUserLoggedIn">
            <songs-bookmarks />
            <recently-viewed-songs class="mt-2"/>
        </v-flex>
        <v-flex :class="{
            xs12: !isUserLoggedIn,
            xs6: isUserLoggedIn
            }" class="ml-2">
            <songs-search-panel />
            <songs-panel class="mt-2" />
        </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsBookmarks from './SongsBookmarks'
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'
export default {
    components: {
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks,
        RecentlyViewedSongs
    },
    computed: {
        ...mapState([
        'isUserLoggedIn'
        ])
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