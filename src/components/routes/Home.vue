<template>
  <div class="container home">
<!--    <List :items="authors">-->
<!--      <div slot-scope="row"-->
<!--           class="list-item1">-->
<!--        {{ row.item.name }}-->
<!--      </div>-->
<!--    </List>-->

    <AddRow/>
    <br>
    <TableHead/>
    <div id="table-row" v-for="author in getAuthors" :key="author.id">
      <div>
        <TableRow :author="author"/>
      </div>
    </div>
    <br>

    <Modal/>

  </div>
</template>

<script>
import TableRow from "@/components/table/TableRow";
import TableHead from "@/components/table/TableHead";
import AddRow from "@/components/table/addrow/AddRow";
import Modal from "@/components/table/Modal";

export default {
  components: {

    Modal,
    AddRow,
    TableHead,
    TableRow
  },
  data() {
    return {
      count: 3,
      authors: [
        {id: 1, name: 'Tigran1', surname: 'Martirosyan1'},
        {id: 2, name: 'Tigran2', surname: 'Martirosyan2'},
        {id: 3, name: 'Tigran3', surname: 'Martirosyan3'}
      ],
      renderComponent: false
    }
  },
  computed: {
    getAuthors() {
      return this.authors;
    }
  },
  methods: {
    setAuthors(authors) {
      console.log(authors, "setAuthors")
      this.authors = authors;
    },
  },
  updated() {
    console.log('khkhkjh')
  }
}
</script>