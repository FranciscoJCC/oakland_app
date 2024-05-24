<template>
  <div class="categories mr-5">
    <TableCategories
      :items="categories"
      :headers="headers"
      :shortBy="shortBy"
      title="Publicaciones"
      @updateNoData="getCategories"
    >
      <template #dialog>
        <DialogCategory textButton="Nueva categoria" @updateTable="getCategories" />
      </template>
    </TableCategories>
  </div>
</template>
<script>
import axios from 'axios'
import TableCategories from '../../components/TableSingleComponent.vue'
import DialogCategory from './DialogCategory.vue'

export default {
  components: {
    TableCategories,
    DialogCategory
  },

  data: () => ({
    categories: [],

    headers: [
      { align: 'center', key: 'name', title: 'Nombre' },
      { align: 'center', sortable: false, key: 'createdAt', title: 'Creado' }
    ],
    shortBy: { key: 'name', order: 'asc' }
  }),

  methods: {
    getCategories() {
      let URL = 'http://localhost:3000/api/v1/categories'
      let me = this

      let config = {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNzE2NTMwOTg2fQ.3C_c6XbiVhHh2rTcxLJ1AQmuS1vTD-npFvvrNwizJx0'
        }
      }

      axios
        .get(URL, config)
        .then((res) => {
          me.categories = res.data
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },

  created() {
    this.getCategories()
  }
}
</script>
<style lang=""></style>
