<template>
  <div   id ="table-row">
    <div class="item-data">{{author.id}}</div>
    <div class="item-data">{{author.name}}</div>
    <div class="item-data">{{author.surname}}</div>
    <div class="item-data"  v-on:click="update(author.id)" >update</div>
    <div class="item-data"  v-on:click="del(author.id)">delete</div>
  </div>
</template>

<script>


export default {
  name: "TableRow",
  props:{
    author:Object
  },
  methods:{
    del:function (id){
      let arr = [];
      let authors = this.$parent.getAuthors;
      for (let i = 0; i < authors.length ; i++) {
         if(authors[i].id !== id ){
            arr.push(authors[i])
         }
      }
      this.$parent.setAuthors(arr)
    },
    update:function (id){
      document.getElementById('id-updated-el').value = id;
    }
  }

}
</script>

<style scoped>
#table-row{
  background-color: #2c3e50;
  display: flex;
  justify-content:flex-start ;
}
.item-data{
  background-color: aliceblue;
  border-radius: 5px;
  padding: 3px 6px 6px 6px;
  margin: auto;
  width: 200px;
  height: 30px;
  border: solid 1px black;
}
</style>