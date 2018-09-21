Vue.component('comp-child', {
  template: '<p>{{ val }}</p>',
  props: ['val'],
})

Vue.component('my-component', {
  template: '<p>\
               <comp-child v-bind:val="val"></comp-child>\
               <comp-child val="これは子B"></comp-child>\
             </p>',
  props: ['val'],
  data: function() {
    return {
      message: 'Hello Vue.js'
    }
  },
  methods: {
  }
})

Vue.component('comp-child2', {
  template: '<li>{{ name }} HP.{{ hp }}\
              <button v-on:click="doAttack">攻撃する</button></li>',
  props: {
    id: Number,
    name: String,
    hp: Number,
  },
  methods: {
    doAttack: function() {
      this.$emit('attack', this.id)
    }
  }
})

Vue.component('my-component-a', {
  template: '<div class="my-component-a">component A</div>'
})

Vue.component('my-component-b', {
  template: '<div class="my-component-b">component B</div>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'abc',
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリん', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 },
    ],
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0,
  },
  computed: {
    component: function() {
      return this.componentTypes[this.current]
    }
  },
  methods: {
    handleAttack: function(id) {
      var item = this.list.find(function(el) {
        return el.id === id
      });
      if (item && item.hp > 0) item.hp -= 10;
    }
  }
});

