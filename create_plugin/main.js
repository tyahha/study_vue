var MyPlugin = {
  install: function(Vue, options) {
    console.log(options);
  }
}

Vue.use(MyPlugin, { lang: 'ja'})

var app = new Vue({
  el: '#app', 
});

