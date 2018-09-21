var app = new Vue({
  el: '#app',
  data: {
    price: 19800123456,
  },
  filters: {
    localeNum: function(val) {
      return val.toLocaleString();
    },
    round: function(val) {
      return Math.round(val * 100) / 100;
    },
    radian: function(val) {
      return val * Math.PI / 180;
    },
  }
});

