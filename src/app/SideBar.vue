<template>
  <div>
    <v-list>
      <v-list-item>
        <div id="logo-sidebar text-center">
          <v-img class="" max-width="200" max-heith="200" src="./images/banner.png"> </v-img>

          <span class="">v.1.0.0</span>
        </div>
      </v-list-item>

      <v-list-item to="/" id="first-item-menu">
        <template v-slot:prepend>
          <v-icon :icon="'mdi-home'"></v-icon>
        </template>
        <v-list-item-title class="text-left ml-2">Publicaciones</v-list-item-title>
      </v-list-item>

      <v-list-item to="/dashboard/categories">
        <template v-slot:prepend>
          <v-icon :icon="'mdi-application-settings'"></v-icon>
        </template>
        <v-list-item-title class="text-left ml-2">Categorias</v-list-item-title>
      </v-list-item>

      <v-list-item to="/dashboard/thematics">
        <template v-slot:prepend>
          <v-icon :icon="'mdi-application-settings'"></v-icon>
        </template>
        <v-list-item-title class="text-left ml-2">Tematicas</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({})
}
</script>
<style scoped>
/*Primer elemento */
#first-item-menu {
  margin-top: 50px;
}

/*Submenus*/
#item-child {
  margin-left: 50px !important;
}

.v-list-item {
  color: #1f1f1f;
  font-weight: bolder !important;
  border-radius: 10px;
  margin-right: 7px;
  margin-left: 7px;
}

.v-list-item--active {
  background-color: #1f1f1f;
  color: whitesmoke;
  border-radius: 10px;
}

.v-list-item:not(.v-list-item--active):hover {
  color: var(--sunrise-vase);
}

.v-list-group__items .v-list-item {
  padding-inline-start: calc(-16px + var(--indent-padding)) !important;
}

.v-list-group__items > .v-list-item {
  margin-top: 5px;
}

#logo-sidebar {
  margin-top: 20px;
}
</style>
