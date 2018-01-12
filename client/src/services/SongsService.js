import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('songs', {
            params: {
                search: search
            }
        })
    },
    post (song) {
        return Api().post('songs', song)
    },
    show (songId) {
        return Api().get(`songs/${songId}`)
    },
    put (song) {
        return Api().put(`songs/${song.id}`, song)
    }
}
