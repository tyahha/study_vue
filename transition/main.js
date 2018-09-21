var app = new Vue({
  el: '#app',
  data: {
    show: true,
    count: 0,
    order: false,
    list: [
      { id: 1, name: 'リンゴ', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'すいか', price: 300 },
    ]
  },
  computed: {
    sortedList: function() {
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    }
  }
});

