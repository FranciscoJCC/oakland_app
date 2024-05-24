<template>
  <div>
    <!--  <ul class="nav flex-column pr-5">
            <div id="logo-sidebar text-center">
                <router-link to="/dashboard/home">
                    <v-img
                        class="img-fluid mt-1"
                        max-width="200"
                        src="./images/dashboard_logo.png"
                    >
                    </v-img>
                </router-link>
                v.1.0.0
            </div>

            <div>
                <li class="nav-item">
                    <router-link to="/dashboard/colaboradores" class="nav-link">
                        <i
                            aria-hidden="true"
                            class="v-icon notranslate icon-item mdi mdi-desktop-classic theme--light"
                        >
                        </i>

                        Colaboradores
                    </router-link>
                </li>
            </div>

            <div>
                <li class="nav-item">
                    <router-link to="/dashboard/clinicas" class="nav-link">
                        <i
                            aria-hidden="true"
                            class="v-icon notranslate icon-item mdi mdi-file-document theme--light"
                        >
                        </i>

                        Clínicas
                    </router-link>
                </li>
            </div>

            <div>
               <li class="nav-item">
                    <router-link to="/dashboard/configuration" class="nav-link">
                        <i
                            aria-hidden="true"
                            class="v-icon notranslate icon-item mdi mdi-cog-outline theme--light"
                        >
                        </i>

                        Configuración
                    </router-link>
                </li> 
            </div>
        </ul> -->

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
        <v-list-item-title class="text-left ml-2">Inicio</v-list-item-title>
      </v-list-item>

      <v-list-item to="/properties">
        <template v-slot:prepend>
          <v-icon :icon="'mdi-home-city'"></v-icon>
        </template>
        <v-list-item-title class="text-left ml-2">Propiedades</v-list-item-title>
      </v-list-item>

      <v-list-item to="/sellers">
        <template v-slot:prepend>
          <v-icon :icon="'mdi-account-heart'"></v-icon>
        </template>
        <v-list-item-title class="text-left ml-2">Vendedores</v-list-item-title>
      </v-list-item>

      <!-- <v-list-group :value="false" prepend-icon="mdi-account-circle">
                <template v-slot:activator>
                    <v-list-item-title>Configuraciones</v-list-item-title>
                </template>
                
                <v-list-item link >
                    <v-list-item-icon class="item-child">
                                <v-icon v-text="'mdi-cog-outline'"></v-icon>
                            </v-list-item-icon>
                        <v-list-item-title v-text="'Permisos'"></v-list-item-title>
                </v-list-item>

                <v-list-item link >
                    <v-list-item-icon class="item-child">
                                <v-icon v-text="'mdi-cog-outline'"></v-icon>
                            </v-list-item-icon>
                        <v-list-item-title v-text="'Clínicas'"></v-list-item-title>
                </v-list-item> -->

      <!-- <v-list-group :value="false" no-action sub-group>

                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Admin</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <router-link to="/dashboard/home">
                        <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
                            

                                <v-list-item-title v-text="title"></v-list-item-title>

                                <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                </v-list-item-icon>
                            
                        </v-list-item>
                    </router-link>
                </v-list-group> -->

      <!-- <v-list-group no-action sub-group>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Actions</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                        <v-list-item-title v-text="title"></v-list-item-title>

                        <v-list-item-icon>
                            <v-icon v-text="icon"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group> -->
      <!-- </v-list-group> -->
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({
    /* admins: [
            ['Management', 'mdi-account-multiple-outline'],
            ['Settings', 'mdi-cog-outline'],
        ],
        cruds: [
            ['Create', 'mdi-plus-outline'],
            ['Read', 'mdi-file-outline'],
            ['Update', 'mdi-update'],
            ['Delete', 'mdi-delete'],
        ], */
  })
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
  color: var(--ocean-cirlce);
  font-weight: bolder !important;
  border-radius: 10px;
  margin-right: 7px;
  margin-left: 7px;
}

.v-list-item--active {
  background-color: var(--sunrise-vase);
  color: var(--white);
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
