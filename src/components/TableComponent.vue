<template>
  <v-data-table :headers="headers" :items="items" :sort-by="[{ key: 'calories', order: 'asc' }]">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <slot name="dialog" />
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="getCategories"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    textButton: {
      type: String,
      default: 'Agregar'
    },
    headers: {
      type: Object
    },
    items: {
      type: Object
    }
  },
  data: () => ({
    categories: [],
    thematics: [],
    categoryValue: '',
    categoryId: 0,
    thematicValue: '',
    thematicId: 0,

    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: [],
    defaultItem: {
      title: '',
      content: 0,
      categoryId: 0,
      category: ''
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },

  methods: {
    editItem(item) {
      this.editedItem = item
      this.categoryValue = item.category.name
      this.thematicValue = item.thematic.name
      this.categoryId = item.category.id
      this.thematicId = item.thematic.id
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = []
        this.categoryValue = ''
        this.thematicValue = ''
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
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
