<template>
  <div>
    <v-app>
      <v-app-bar
        app
        color="primary"
        dark
      >
        <h1>Chat application</h1>
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
