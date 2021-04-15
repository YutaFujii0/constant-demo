import axios from 'axios';
import Vue from 'vue/dist/vue.esm.js';

document.addEventListener('DOMContentLoaded', () => {
  Vue.component('v-dogs', {
    data: function () {
      return {
        dogs: []
      }
    },
    template: '<div>Dogs:<ul><li v-for="dog in dogs">{{ dog.name }}</li></ul></div>',
    created: function() {
      axios.get('/api/one/two/dogs')
           .then((res) => {
             this.dogs = res.data.dogs
           })
    }
  })

  new Vue({ el: '#data-dogs' })
})
