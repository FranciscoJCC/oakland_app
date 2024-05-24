<template>
  <div class="thematics mr-5">
    <TableThematic
      :items="thematics"
      :headers="headers"
      :shortBy="shortBy"
      title="Publicaciones"
      @updateNoData="getThematics"
    >
      <template #dialog>
        <DialogThematic textButton="Nueva tematica" @updateTable="getThematics" />
      </template>
    </TableThematic>
  </div>
</template>
<script>
import axios from 'axios'
import TableThematic from '../../components/TableSingleComponent.vue'
import DialogThematic from './DialogThematic.vue'

export default {
  components: {
    TableThematic,
    DialogThematic
  },

  data: () => ({
    thematics: [],

    headers: [
      { align: 'center', key: 'name', title: 'Nombre' },
      { align: 'center', sortable: false, key: 'createdAt', title: 'Creado' }
    ],
    shortBy: { key: 'name', order: 'asc' }
  }),

  methods: {
    getThematics() {
      let URL = 'http://localhost:3000/api/v1/thematics'
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
          me.thematics = res.data
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },

  created() {
    this.getThematics()
  }
}
</script>
<style lang=""></style>
