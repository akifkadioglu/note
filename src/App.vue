<template>
  <v-container>
    <v-layout>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-btn @click="drawer = false" icon="mdi-close" variant="text"></v-btn>

          <v-divider></v-divider>

          <v-list-item to="/" prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item to="/notes" prepend-icon="mdi-text" title="Notes" value="notes"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <div class="d-flex h-100">
          <v-btn icon="mdi-menu" variant="tonal" color="primary" @click.stop="drawer = !drawer">
          </v-btn>
        </div>
      </v-main>
    </v-layout>

    <router-view />

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    }
  },
}
</script>