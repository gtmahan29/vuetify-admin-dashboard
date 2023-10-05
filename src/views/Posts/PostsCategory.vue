<template>
    <v-app class="posts-category">
        <v-main class="content">
            <v-row>
                <v-col>
                    <CategoryTable />
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script setup>
import AddCategoryForm from '@/components/Categories/AddCategoryForm.vue'
import CategoryTable from '@/components/Categories/CategoryTable.vue'
import Navbar from '@/components/Navbar/Navbar.vue'

</script>

<style lang="scss">
.posts-category {
    .v-application__wrap {
      min-height: unset;
    }
}
</style>