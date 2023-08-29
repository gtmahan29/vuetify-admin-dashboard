<template>
    <v-app class="posts-category">
        <Navbar title="دسته‌ها" />
        <v-main class="content py-4 px-8">
            <v-row>
                <v-col lg="4">
                    <AddCategoryForm />
                </v-col>
                <v-col lg="8">
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