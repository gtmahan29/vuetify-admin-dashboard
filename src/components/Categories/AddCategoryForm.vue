<template>
    <v-app class="category-form-container  elevation-1">
        <div class="section-header bg-white d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">افزودن دسته‌ی جدید</div>
            <v-menu location="start">
                <template v-slot:activator="{ props }">
                <v-btn 
                    v-bind="props"
                    icon="mdi-dots-vertical" 
                    rounded="0"
                    width="60"
                    class="draft-btn bg-white elevation-0 h-100" 
                >
                </v-btn>
                </template>

                <v-list>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                >
                <RouterLink :to="item.path">
                    <v-list-item-title class="text-black text-subtitle-2 font-family">{{ item.title }}</v-list-item-title>
                </RouterLink>
                </v-list-item>
                </v-list>
            </v-menu>
        </div>
        <div class="add-category-form border">
            <form 
                @submit.prevent="addCategory()"
                class="d-flex flex-column pa-8">
                <v-text-field
                    v-model="name"
                    label="نام دسته"
                    variant="outlined"
                    class="text-grey-darken-3"
                >
                </v-text-field>

                <v-text-field
                    v-model="slug"
                    label="نامک"
                    variant="outlined"
                    class="text-grey-darken-3"
                >
                </v-text-field>
                
                <v-select
                label="دسته‌ی مادر"
                variant="outlined"
                :items="['دسته‌ی اول']"
                ></v-select>
    
                <v-textarea
                    clearable
                    clear-icon="mdi-close-circle"
                    label="توضیح دسته"
                    variant="outlined"
                ></v-textarea>
    
                <v-btn
                type="submit"
                color="#25c16e"
                size="large"
                class="add-user-btn align-self-center text-white font-weight-bold w-100"
                >
                افزودن دسته‌ی جدید
                </v-btn>
            </form>
        </div>
    </v-app>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>