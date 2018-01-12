<template>
    <v-toolbar fixed class="blue" dark>
        <v-toolbar-title class="mr-4">
            <router-link flat dark
            class="home"
            tag='span'
            :to="{
                name: 'songs'
            }">
                TabTracker
            </router-link>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat dark
                :to="{name: 'songs'}">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark
                :to="{name: 'login'}"
                v-if="!$store.state.isUserLoggedIn">
                Login
            </v-btn>
            <v-btn flat dark
                :to="{name: 'register'}"
                v-if="!$store.state.isUserLoggedIn">
                Sign up
            </v-btn>
            <v-btn flat dark
                @click="logout"
                v-if="$store.state.isUserLoggedIn">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      console.log("logging out!");
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'songs'
      });
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}
</style>