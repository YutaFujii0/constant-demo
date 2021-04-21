import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('data-dogs')) {
    new Vue({
      el: '#data-dogs',
      mounted: function() {
        fetch('/api/one/two/dogs')
      }
    })
  }
})
