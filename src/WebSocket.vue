<template>
    <div>
        <input type="text" v-model="message" @keydown.enter="sendMessage">
        <ul>
            <li v-for="(message, index) in messages" :key="index">{{message}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        // Create WebSocket connection.
        this.socket = new WebSocket('ws://localhost:8080');

        // Listen for messages
        this.socket.addEventListener('message', (event) => {
            event.data.text().then(text => {
                console.log('Message from server ', text);
                this.messages.push(text);
            })
            
        });
    },
    data(){
        return {
            messages: [],
            socket: null,
            message: ''
        }
    },
    methods:{
        sendMessage(){
            this.socket.send(this.message);
            this.message = '';
        }
    }
}
</script>

<style>

</style>