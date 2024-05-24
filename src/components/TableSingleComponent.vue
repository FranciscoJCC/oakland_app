<template>
  <v-data-table :headers="headers" :items="items" :sort-by="[shortBy]">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <slot name="dialog" />
        <slot name="options" />
      </v-toolbar>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="$emit('updateNoData')"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Object
    },
    headers: {
      type: Object
    },
    shortBy: {
      type: Object
    }
  }
}
</script>
