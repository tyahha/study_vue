var app = new Vue({
  el: '#app',
  data: {
    width: 800,
    height: 600,
    budget: 300,
    limit: 2,
    order: false,
    list: [
      { id: 1, name: 'リンゴ', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 400 },
      { id: 4, name: 'おれんじ', price: 300 },
      { id: 5, name: 'めろん', price: 500 },
    ],
  },
  computed: {
    halfWidth: {
      get: function() {
        return this.width / 2;
      },
      set: function(val) {
        this.width = val * 2;
      },
    },
    halfHeight: function() {
      return this.height / 2;
    },
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeight,
      }
    },
    computedData: function() {
      return Math.random();
    },
    matched: function() {
      return this.list.filter(function(el) {
        return el.price <= this.budget;
      }, this);
    },
    sorted: function() {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc');
    },
    limited: function() {
      return this.sorted.slice(0, this.limit);
    }
  },
  methods: {
    methodsData: function() {
      return Math.random();
    }
  }
});

