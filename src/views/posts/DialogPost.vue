<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ props }">
      <v-btn class="mb-2" color="secondary" dark v-bind="props"> {{ textButton }} </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5 secondary">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <v-text-field v-model="title" label="Titulo"></v-text-field>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              <v-textarea v-model="content" label="Contenido"></v-textarea>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-select
                v-model="categoryId"
                item-value="id"
                item-title="name"
                :items="categories"
                label="Categoria"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-select
                v-model="thematicId"
                item-value="id"
                item-title="name"
                :items="thematics"
                label="Tematica"
              ></v-select>
            </v-col>
          </v-row>
          <v-row v-if="errorMessage !== ''">
            <div class="alert alert-danger" role="alert">
              <p v-text="errorMessage"></p>
            </div>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    textButton: {
      type: String,
      default: 'Agregar'
    }
  },
  data: () => ({
    dialog: false,
    editedItem: [],
    title: '',
    content: '',

    categoryId: '',
    thematicId: '',
    categories: [],
    thematics: [],

    errorMessage: '',

    editedIndex: -1
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nueva post' : 'Editar post'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  methods: {
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = []
        this.title = ''
        this.content = ''
        this.errorMessage = ''
      })
    },
    save() {
      let url = 'http://localhost:3000/api/v1/posts'
      let me = this

      //Validamos campos del formualario
      if (
        this.title == '' ||
        this.content == '' ||
        this.categoryId == '' ||
        this.thematicId == ''
      ) {
        this.errorMessage = 'Favor de llenar todos los campos'
        return
      }

      axios
        .post(
          url,
          {
            title: this.title,
            content: this.content,
            categoryId: this.categoryId,
            thematicId: this.thematicId
          },
          {
            headers: {
              Authorization:
                //Token, Admin. Lo ideal sería almacenar el token en localStorage o un manejador de estados
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNzE2NTMwOTg2fQ.3C_c6XbiVhHh2rTcxLJ1AQmuS1vTD-npFvvrNwizJx0'
            }
          }
        )
        .then((res) => {
          console.log(res)
          this.close()
          this.$emit('updateTable')
        })
        .catch((err) => {
          console.error(err)
          if (err.response.data.statusCode == 409) {
            me.errorMessage = 'La categoria ya existe'
          } else if (err.response.data.statusCode == 400) {
            me.errorMessage = 'La URL no es valida'
          } else if (err.response.data.statusCode == 401) {
            me.errorMessage = 'No cuentas con el permiso necesario'
          } else {
            me.errorMessage = err.response.data.message
          }
        })
    },

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
          console.log(res)
        })
        .catch((err) => {
          console.error(err)
        })
    },

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
          console.log(res)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },

  created() {
    this.getCategories()
    this.getThematics()
  }
}
</script>
<style lang=""></style>
