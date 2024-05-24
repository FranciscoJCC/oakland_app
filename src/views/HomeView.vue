<template>
  <div>
    <TitleComponent title="Lista de publicaciones" />
    <div class="mr-5">
      <TableComponent />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import TitleComponent from '../components/TitleComponent.vue'
import TableComponent from '../components/TableComponent.vue'

export default {
  components: {
    TitleComponent,
    TableComponent
  },

  data: () => ({
    posts: []
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
