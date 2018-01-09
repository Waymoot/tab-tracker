<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
          <panel title="Register">
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
              <v-btn
                  @click="register"
                  class="blue"
                  dark
                  >Register
              </v-btn>
          </panel>
        </v-flex>
    </v-layout>

</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/components/Panel";
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
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>

</style>