<template>
  <v-app class="posts">
    <Navbar title="پست‌ها"/>
    <v-main class="content py-4 px-8">
      <PostsTable />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import PostsTable from '@/components/Posts/PostsTable.vue'

</script>

<style lang="scss">
.posts {
  .v-application__wrap {
      min-height: unset;
  }
}
</style>