import axios from 'axios';
import Vue from 'vue/dist/vue.esm.js';

document.addEventListener('DOMContentLoaded', () => {
  Vue.component('v-cats', {
    data: function () {
      return {
        cats: []
      }
    },
    template: '<div>Cats:<ul><li v-for="cat in cats">{{ cat.name }}</li></ul></div>',
    created: function() {
      axios.get('/api/one/two/cats')
           .then((res) => {
             this.cats = res.data.cats
           })
    }
  })

  new Vue({ el: '#data-cats' })
})
