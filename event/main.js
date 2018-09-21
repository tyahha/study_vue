var app = new Vue({
  el: '#app',
  data: {
    count: 0,
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    },
    log(text) {
      console.log(text);
    }
  }
});

