<template>
  <div id = "table-row-head">
    <div class="item-head"><b>Id</b></div>
    <div class="item-head"><b>name</b></div>
    <div class="item-head"><b>C</b></div>
    <div class="item-head"><b>update</b></div>
    <div class="item-head"><b>delete</b></div>
  </div>
</template>

<script>
export default {
name: "TableHead"
}
</script>

<style scoped>
#table-row-head{
  background-color: #2c3e50;
  display: flex;
  justify-content:flex-start ;
}
.item-head {
  background-color: #2c3e50;
  color: aliceblue;
  padding: 6px 6px 6px 6px;
  margin: auto;
  width: 200px;
  height: 30px;
  border: solid 1px #2c3e50;
}
</style>