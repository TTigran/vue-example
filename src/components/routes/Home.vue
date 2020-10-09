<template>
  <div class="container home">
<!--    <List :items="authors">-->
<!--      <div slot-scope="row"-->
<!--           class="list-item1">-->
<!--        {{ row.item.name }}-->
<!--      </div>-->
<!--    </List>-->

    <AddRow/><br>
    <EditRowForm /><br>

    <TableHead/>
    <div id="table-row" v-for="author in authors" :key="author.id">
      <div>
        <TableRow :author="author"/>
      </div>
    </div>

  </div>
</template>

<script>
import TableRow from "@/components/table/TableRow";
import TableHead from "@/components/table/TableHead";
import AddRow from "@/components/table/addrow/AddRow";
import EditRowForm from "@/components/table/editrow/EditRowForm";
import { mapState } from 'vuex'
export default {
  components: {
    EditRowForm,
    AddRow,
    TableHead,
    TableRow
  },
  mounted () {
    this.$store.dispatch('loadAuthors')
  },
  data() {
    return {
      count: 3,
      renderComponent: false
    }
  },
  computed: mapState([
    'authors'
  ]),
  // methods: {
  //   setAuthors(authors) {
  //     console.log(authors, "setAuthors")
  //     this.authors = authors;
  //   },
  // },
  methods:{

  },
  updated() {
    console.log('khkhkjh')
  }
}
</script>