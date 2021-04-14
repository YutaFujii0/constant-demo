import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('data-cats')) {
    new Vue({
      el: '#data-cats',
      mounted: function() {
        fetch('/api/one/two/cats')
      }
    })
  }
})
