<template>
  <v-container>
    <v-row>
      <v-col style="max-width: 250px">
        <chat-list-component></chat-list-component>
      </v-col>
      <v-col>
        <chat-list-component></chat-list-component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChatListComponent from '@/components/ChatListComponent'
export default {
  name: 'ChatView',
  components: { ChatListComponent }
}
</script>

<style scoped>

</style>
