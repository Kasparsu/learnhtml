import Vue from 'vue/dist/vue.common.dev';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import App from './App.vue';

Vue.component('app', App);

new Vue({
    el: '#app',
    created(){
        setInterval(() => {
            this.date = new Date().toLocaleTimeString();
        }, 1000);
    },
    data: {
        message: '',
        date: '',
        newItem: '',
        items: ['Sai', 'Leib', 'Piim']
    },
    computed: {
        reverseMessage(){
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        addItem(){
            if(this.newItem.trim() != ''){
                this.items.push(this.newItem);
            }
            this.newItem = '';
        }
    }
});