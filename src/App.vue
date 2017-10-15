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
import {loginUrl, userUrl, getHeader} from './config';
import {clientId, clientSecret} from './env';
export default {
  name: 'app',
  data () {
    return {
      login: {
        email: '',
        password: ''
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

      const authUser = {}
      this.$http.post(loginUrl, postData)
      .then(response => {
        if ( response.status === 200 ) {
          authUser.access_token = response.data.access_token
          authUser.refresh_token = response.data.refresh_token
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          this.$http.get(userUrl, {headers: getHeader()})
          .then(response => {
            authUser.email = response.data.email
            authUser.name = response.data.name
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$router.push({name: 'dashboard'})
          })
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="scss">
</style>
