<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <p>{{ message }}</p>
    <EditForm />
    <nav>
      <router-link to="/" replace exact>Home</router-link>
      <router-link to="/product" replace exact>商品情報</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import EditForm from '@/components/EditForm'

export default {
  name: 'App',
  components: {
    HelloWorld,
    EditForm,
  },
  computed: {
    message() { return this.$store.getters.message }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active { background: yellow }
</style>
