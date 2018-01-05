import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register',credentials)
    }
}

// How it is used
// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })