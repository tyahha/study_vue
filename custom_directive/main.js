Vue.directive('example', {
  bind: function(el, binding) {
    console.log('v-example bind');
  },
  inserted: function(el, binding) {
    console.log('v-example inserted');
  },
  update: function(el, binding) {
    console.log('v-example update');
  },
  componentUpdated: function(el, binding) {
    console.log('v-example componentUpdated');
  },
  unbind: function(el, binding) {
    console.log('v-example unbind');
  },
})

var app = new Vue({
  el: '#app',
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
});

