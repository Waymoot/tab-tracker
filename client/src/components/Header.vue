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
            router to="login">
                Login
            </v-btn>
            <v-btn flat dark
            router to="register">
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