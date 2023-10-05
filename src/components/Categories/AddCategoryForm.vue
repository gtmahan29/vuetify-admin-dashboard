<template>
    <v-app class="category-form-container w-75 bg-white component-shadow rounded-lg">
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
        <div class="d-flex flex-column justify-center">
            <form 
                @submit.prevent="addCategory()"
                class="add-category-form d-flex flex-column mx-auto w-50 pa-8">
                <v-text-field
                    v-model="name"
                    label="نام دسته"
                    variant="solo-filled"
                    class="text-grey-darken-3 elevation-0"
                    hide-details
                >
                </v-text-field>

                <v-text-field
                    v-model="slug"
                    label="نامک"
                    variant="solo-filled"
                    class="text-grey-darken-3 elevation-0"
                    hide-details
                >
                </v-text-field>
                
                <v-select
                    label="دسته‌ی مادر"
                    variant="solo-filled"
                    :items="['دسته‌ی اول']"
                    class="text-grey-darken-3 elevation-0"
                    hide-details
                ></v-select>
    
                <v-textarea
                    clearable
                    clear-icon="mdi-close-circle"
                    label="توضیح دسته"
                    variant="solo-filled"
                    class="text-grey-darken-3 elevation-0"
                    hide-details
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

            <v-divider></v-divider>

            <div class="btns bg-white d-flex py-4 me-4">
                <v-btn 
                    size="small" 
                    elevation="0"
                    color="#25c16e"
                    to="/posts/category"
                    class="user-add text-white font-weight-black mx-4"
                    >لیست دسته‌ها
                </v-btn>
            </div>
        </div>
    </v-app>
</template>

<script setup>

</script>

<style lang="scss">
@use '../../assets/scss/abstracts' as *;
.add-category-form {
    gap: 40px;

    .v-field {
        box-shadow: none !important;
        // box-shadow: 0 3px 15px rgba(46,35,94,.07) !important;
    }

    .v-field__overlay {

    }
}

// .v-pagination__item {
//     .v-btn {
//         width: 40px;
//         height: 40px;
//     }
// }
</style>