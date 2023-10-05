<template>
    <v-app class="users bg-grey-lighten-5">
        <div class="content">
          <v-main class="content">
              <UsersTable />
          </v-main>
        </div>
    </v-app>
</template>

<script setup>
import UsersTable from '@/components/Users/UsersTable.vue'

</script>

<style lang="scss">
.users {
    .v-application__wrap {
        min-height: unset;
    }
}
</style>