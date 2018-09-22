<template>
  <div class="edit-form">
    <input type="text" :value="message" @input="doUpdate">
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message: {
      get() { return this.$store.getters.message },
      set(v) { this.$store.dispatch('doUpdate', v) } 
    }
  },
  methods: {
    doUpdate(event) {
      this.$store.dispatch('doUpdate', event.target.value)
    }
  }
}
</script>
