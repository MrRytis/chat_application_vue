<template>
  <v-form v-model="valid">
    <v-container align-content="center">
      <v-row align-content="center">
        <v-col
          cols="5"
          md="4"
        >
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            :counter="30"
            label="Username"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="5"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="30"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="5"
          md="4"
        >
          <v-btn
            elevation="2"
            x-large
            color="primary"
            v-on:click="login"
          >Login</v-btn>
        </v-col>
        <v-col
          cols="5"
          md="4"
        >
          <v-btn
            elevation="2"
            outlined
            x-large
            color="primary"
            v-on:click="register"
          >Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormComponent',
  data: () => ({
    username: '',
    password: '',
    usernameRules: [
      v => !!v || 'Username is required',
      v => v.length <= 30 || 'Name must be less than 30 characters'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 30 || 'Name must be less than 30 characters'
    ]
  }),
  methods: {
    login: function () {
      axios.post('http://localhost:8000/api/login_check', {
        username: this.username,
        password: this.password
      }).then(function (respone) {
        this.store.state.token = respone.data.token
        this.router.push('/chats')
        console.log(respone)
      }).catch(function (error) {
        console.log(error)
      })
    },
    register: function () {
      axios.post('http://localhost:8000/api/register', {
        username: this.username,
        password: this.password
      }).then(function (respone) {
        console.log(respone)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
