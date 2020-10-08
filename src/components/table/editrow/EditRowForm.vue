<template>
  <div class="edit-modal">
    <form>
      <input class="form-field" type="number" name="name" id="id-updated-el" placeholder="Id Updated" disabled><br>
      <input class="form-field" type="number" name="name" id="id-upd" placeholder="Id"><br>
      <input class="form-field" type="text" name="name" id="name-upd" placeholder="Name"><br>
      <input class="form-field" type="text" name="name" id="surname-upd" placeholder="Surname"><br>
      <button type="button" id="add-data-btn" v-on:click="upd()">SAVE</button>
    </form>

  </div>
</template>

<script>

export default {
  name: "EditRowForm",
  methods: {
    upd: function () {
      let currentId = Number(document.getElementById('id-updated-el').value);
      console.log(currentId)
      let arr = [];
      let authors = this.$parent.$parent.$parent.getAuthors;
      console.log(authors)
      for (let i = 0; i < authors.length; i++) {
        if (authors[i].id === currentId) {
          authors[i].id = +document.getElementById('id-upd').value;
          authors[i].name = document.getElementById('name-upd').value;
          authors[i].surname = document.getElementById('surname-upd').value;
          arr.push(authors[i])
        } else {
          arr.push(authors[i])
        }
      }
      this.$parent.setAuthors(arr)
    }
  }

}
</script>

<style scoped>

</style>