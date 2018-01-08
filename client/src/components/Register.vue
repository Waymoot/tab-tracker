<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="blue" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                  <form 
                    name="tab-tracker-form"
                    autocomplete="off">
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
                    autocomplete="new-password"
                  ></v-text-field>
                  </v-layout>
                  </form>
                    <br/>
                    <div v-html="error" class="danger-alert"/>
                    <!-- <v-layout row>
                      <v-alert color="error" v-html="error"></v-alert>
                    </v-layout> -->
                    <v-btn
                        @click="register"
                        class="blue"
                        dark
                        >Register
                    </v-btn>
                  </div>
            </div>

        </v-flex>
    </v-layout>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>

</style>