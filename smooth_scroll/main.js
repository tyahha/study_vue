var scroll = new SmoothScroll();
var app = new Vue({
  el: '#app',
  methods: {
    scrollTop: function() {
      scroll.animateScroll(0);
    }
  }
});

