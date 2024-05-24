<template>
  <div class="mr-5 mt-5">
    <TableComponent title="Publicaciones" textButton="Nuevo Post" :headers="headers" :items="posts">
      <template #dialog>
        <DialogPost textButton="Nuevo post" @updateTable="getPosts" />
      </template>
    </TableComponent>
  </div>
</template>
<script>
import axios from 'axios'
import TableComponent from '../../components/TableComponent.vue'
import DialogPost from './DialogPost.vue'

export default {
  components: {
    TableComponent,
    DialogPost
  },

  data: () => ({
    posts: [],
    headers: [
      { align: 'center', key: 'title', title: 'Titulo' },
      { align: 'center', key: 'category.name', title: 'Categoria' },
      { align: 'center', key: 'thematic.name', title: 'Tematica' },
      { title: 'Actions', key: 'actions', sortable: false }
    ]
  }),

  methods: {
    getPosts() {
      const URL = 'http://localhost:3000/api/v1/posts'
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
          me.posts = res.data
          console.log(res)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },

  created() {
    this.getPosts()
  }
}
</script>
<style lang=""></style>
