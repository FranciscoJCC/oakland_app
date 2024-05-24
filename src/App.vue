<template>
  <v-app class="ColorPrimary">
    <v-navigation-drawer fixed v-model="drawer" app>
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar class="background-ocean-circle" app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" color=""></v-app-bar-nav-icon>
      </template>

      <v-spacer></v-spacer>
      <p class="fs-3 text-body-secondary" v-text="this.$route.name"></p>

      <div class="d-block d-sm-none">
        <!-- <v-img src="@/assets/logo.jpg" max-width="100"> </v-img> -->
      </div>

      <v-spacer></v-spacer>

      <ProfileComponent />
    </v-app-bar>

    <v-main>
      <div class="mt-4 ml-4">
        <div class="row">
          <div class="col">
            <MainContent />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './app/SideBar.vue'
import MainContent from './app/MainContent.vue'
import ProfileComponent from './components/ProfileComponent.vue'

export default {
  name: 'App',

  data() {
    return {
      drawer: true
    }
  },
  components: {
    SideBar,
    MainContent,
    ProfileComponent
  },

  mounted() {
    //console.log();
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
