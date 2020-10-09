<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>

import Header from "@/components/header/Header";

export default {
  name: 'App',
  components: {Header},
  props: {
    a: String
  },
  methods: {
    print() {
      console.log(this.$el);
    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

</style>
