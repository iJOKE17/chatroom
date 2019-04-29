<template>
  <div class='home'>
    <h1>Home</h1>
    <div v-if="!username">
      You can't chat without a name. What's your name? <br />
          <input type="text" placeholder="Name" v-on:keyup.enter="updateUsername">
    </div>
    <div v-else>
        From : {{username}}<br />
        Message:<br />
    <textarea name="" id="" cols="30" rows="10" placeholder="New Message" v-on:keyup.enter="sendMessage"></textarea>
    </div>
    <hr>
    <div class="messages">
        <h3>Messages</h3>
        <div class="message" v-for="message in messages" :key="message.id">
            <strong>{{message.username}}</strong>
            <p>{{message.text}}</p>
        </div>
    </div>
  </div>
</template>
<script>
import fire from '../config/firebase'

export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      username: '',
      messages: []
    }
  },
  methods: {
    updateUsername (e) {
      e.preventDefault()
      if (e.target.value) {
        this.username = e.target.value
      }
    },
    sendMessage (e) {
      console.log('sendMessage', e)
      e.preventDefault()
      if (e.target.value) {
        const message = {
          username: this.username,
          text: e.target.value
        }
        // Push message to firebase reference
        fire.database().ref('messages').push(message)
      }
    }
  },
  mounted () {
    let vm = this
    const itemsRef = fire.database().ref('messages')
    itemsRef.on('value', snapshot => {
      let data = snapshot.val()
      let messages = []
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text
        })
      })
      vm.messages = messages
    })
  }
}
</script>
<style scoped>
</style>
