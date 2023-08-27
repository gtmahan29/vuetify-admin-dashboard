<template>
    <v-app class="users bg-grey-lighten-5">
        <Navbar title="کاربران" />
        <div class="content py-4 px-8">
          <v-main class="content">
              <UsersTable />
              <!-- <RouterView /> -->
          </v-main>
        </div>
    </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import UsersTable from '@/components/Users/UsersTable.vue'

</script>

<style lang="scss">
.users {
    .v-application__wrap {
        min-height: unset;
    }
}
</style>