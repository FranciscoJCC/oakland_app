<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ props }">
      <v-btn variant="tonal" class="mb-2" color="secondary" dark v-bind="props">
        {{ textButton }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5 secondary">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <v-text-field v-model="name" label="Titulo"></v-text-field>
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
        <v-btn color="blue-darken-1" variant="text" @click="close"> Cancelar </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="save"> Guardar </v-btn>
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
    name: '',

    errorMessage: '',

    editedIndex: -1
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nueva temática' : 'Editar temática'
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
        this.name = ''
        this.errorMessage = ''
      })
    },
    save() {
      let url = 'http://localhost:3000/api/v1/thematics'
      let me = this

      //Validamos campos del formualario
      if (this.name == '') {
        this.errorMessage = 'Favor de llenar todos los campos'
        return
      }

      axios
        .post(
          url,
          {
            name: this.name
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
            me.errorMessage = 'La temática ya existe'
          } else if (err.response.data.statusCode == 401) {
            me.errorMessage = 'No cuentas con el permiso necesario'
          } else {
            me.errorMessage = err.response.data.message
          }
        })
    }
  }
}
</script>
<style lang=""></style>
