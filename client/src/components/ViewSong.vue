<template>
    <div>
        
    </div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
    data () {
        return {
            song: null
        }
    },
    async mounted () {
        const songId = this.$store.state.route.params.songId
        this.song = await SongsService.show(songId)

    }
}
</script>

<style scoped>

</style>