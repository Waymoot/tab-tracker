<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Login">
              <v-layout row>
                <v-text-field
                label="Email"
                v-model="email"
              ></v-text-field>
              </v-layout>
              <v-layout row>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
              ></v-text-field>
              </v-layout>
                <br/>
                <div v-html="error" class="danger-alert"/>
                <v-btn
                    @click="login"
                    class="blue"
                    dark
                    >Login
                </v-btn>
            </panel>
        </v-flex>
    </v-layout>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>

</style>