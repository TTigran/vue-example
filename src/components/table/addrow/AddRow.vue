<template>
  <div id = "add-row">
    <form>
      <input class="form-field" id="name" placeholder="name">
      <input class="form-field" id="surname" placeholder="surname">
      <button type="button" id="add-data-btn" v-on:click="add()">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddRow",
  data(){
    return{
      count:3
    }
  },
  methods: {
    add() {
      this.$parent.getAuthors.push({
        id: ++this.count,
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value
      })
    },
  }
}
</script>

<style scoped>

</style>