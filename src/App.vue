<template>
  <v-locale-provider locale="fa">
    <v-app class="bg-grey-lighten-5">
        <v-row class="ma-0">
          <v-col v-if="!isLoginRoute" cols="2" class="pa-0 mt-20">
            <Sidebar />
          </v-col>
          <v-col :cols="isLoginRoute ? 12 : 10" class="pa-0">
            <Navbar />
            <div class="main-content ma-8">
              <RouterView :key="$route.fullPath"/>
            </div>
          </v-col>
        </v-row>
    </v-app>
  </v-locale-provider>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import Navbar from './components/Navbar/Navbar.vue'

// میشه true اگر در صفحه لاگین باشیم
const isLoginRoute = computed(() => {
  const route = useRoute();
  return route.path === '/login';
})

</script>

<style lang="scss">
@import './assets/scss/main.scss';
.main-content {
  z-index: 2;
}
</style>
