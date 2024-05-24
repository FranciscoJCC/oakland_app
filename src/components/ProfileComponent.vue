<template>
  <div class="d-flex align-items-center pr-5">
    <v-row justify="center">
      <v-menu>
        <!--bottom min-width="200px" rounded offset-y  -->
        <template v-slot:activator="{ props }">
          <v-btn icon x-large v-bind="props">
            <v-avatar color="brown" size="48">
              <template v-if="user.image_profile">
                <img :src="user.image_profile" />
              </template>
              <template v-else>
                <span class="white--text text-h5">
                  {{ initials }}
                </span>
              </template>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item class="justify-center">
            <div class="mx-auto text-center pt-5">
              <v-avatar color="brown">
                <template v-if="user.image_profile">
                  <img :src="user.image_profile" />
                </template>
                <template v-else>
                  <span class="white--text text-h5">
                    {{ initials }}
                  </span>
                </template>
              </v-avatar>
              <h3 class="m-2">{{ fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>

              <!-- <router-link to="/dashboard/profile" style="text-decoration: none;">
                                  <v-btn depressed rounded text> Perfil </v-btn>
                              </router-link> -->
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded color="error" href="/logout"> Cerrar Sesión </v-btn>
            </div>
          </v-list-item>
        </v-card>
      </v-menu>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: []
    }
  },
  computed: {
    initials() {
      /* let name = this.user.name;
              let last_name = (this.user.last_name_p != null) ? this.user.last_name_p : '';
              let letters = '';
              if (name != undefined && last_name != undefined)
                  letters = name.charAt(0) + last_name.charAt(0); */

      /* return letters; */
      return 'FC'
    },
    fullName() {
      /* let name = this.user.name;
              let last_name = (this.user.last_name_p) ? this.user.last_name_p : '';
              let complete_name = name + ' ' + last_name; */

      //return complete_name
      return 'Francisco'
    }
  },
  methods: {
    getInfoUser() {
      /* let me = this;
              let url = '/userLoginInfo'; */
      /* axios.get(url)
                  .then(function (response) {
                      me.user = response.data.user;
                  })
                  .catch(function (error) {
                      console.log(error);
                  }) */
    }
  },
  mounted() {
    //this.getInfoUser();
  }
}
</script>

<style></style>
