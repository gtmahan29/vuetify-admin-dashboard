<template>
    <v-app class="add-user">
        <Navbar title="افزودن کاربر" />
        <v-main class="content d-flex justify-center py-4 px-8">
            <AddUserForm />
        </v-main>
    </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import AddUserForm from '@/components/Users/AddUserForm.vue'

</script>

<style lang="scss">
.add-user {
    .v-application__wrap {
        min-height: unset;
    }
}
</style>