<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <songs-search-panel />
            <songs-panel class="mt-2" />
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

</style>