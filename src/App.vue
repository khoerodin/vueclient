<template>
  <div>
    <form v-on:submit.prevent="handleLogInFormSubmit()">
      Email
      <div>
        <input type="text" v-model="login.email">
      </div>
      <hr>
      Password
      <div>
        <input type="text" v-model="login.password">
      </div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import {loginUrl} from './config';
import {clientId, clientSecret} from './env';
export default {
  name: 'app',
  data () {
    return {
      login: {
        email: 'leuschke.courtney@example.org',
        password: 'secret'
      }
    }
  },
  methods: {
    handleLogInFormSubmit() {
      const postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: this.login.email,
        password: this.login.password,
        scope: ''
      }

      this.$http.post(loginUrl, postData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="scss">
</style>
