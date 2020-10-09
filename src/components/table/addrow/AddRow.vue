<template>
  <div id="add-row">
    <form>
      <input class="form-field" id="name" placeholder="name" v-model="payload.name">
      <input class="form-field" id="surname" placeholder="surname" v-model="payload.surname">
      <button type="button" id="add-data-btn" v-on:click="addAuthor">ADD</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "AddRow",

  data() {
    let count = 3;
    return {
      payload: {
        id:++count,
        name: '',
        surname: '',
      },
    }
  },

  methods: {
    addAuthor(){
      this.$store.dispatch('addAuthors',this.payload)
    }
  }
}
</script>

<style scoped>

</style>