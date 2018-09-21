var app = new Vue({
  el: '#app',
  data: {
    value: 'aaa',
    list: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' },
    ]
  },
  watch: {
    value: _.debounce(function(newValue, oldValue) {
      console.log(`newValue:${newValue}, oldValue:${oldValue}`);
    }, 500),
    current: function(val) {
      axios.get('https://api.github.com/search/repositories', {
        params: { q: 'topic:' + val }
      }).then(function(response) {
        this.list = response.data.items;
      }.bind(this))
    }
  }
});

