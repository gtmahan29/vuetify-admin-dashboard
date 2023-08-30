<template>
    <v-app class="add-category">
        <v-main class="content d-flex justify-center py-4 px-8">
            <AddCategoryForm />
        </v-main>
    </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'
import AddCategoryForm from '@/components/Categories/AddCategoryForm.vue'
</script>

<style lang="scss">
.add-category {
    .v-application__wrap {
      min-height: unset;
    }
}
</style>