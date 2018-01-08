<template>
    <v-toolbar fixed class="blue" dark>
        <v-toolbar-items>
            <v-btn flat dark
            router to="/">
                TabTracker
            </v-btn>
        </v-toolbar-items>
        <!-- <v-tooblar-title class="mr-3">
            TabTracker
        </v-tooblar-title> -->
        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark
                to="login"
                v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>
            <v-btn flat dark
                to="register"
                v-if="!$store.state.isUserLoggedIn">
                Sign up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>