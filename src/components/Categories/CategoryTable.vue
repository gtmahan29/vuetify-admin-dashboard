<template>
    <v-app class="category-table-container component-shadow rounded-lg">
        <div class="section-header d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">لیست دسته‌ها</div>
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
        <!-- <v-table
            fixed-header
            height="520px"
            density="compact"
            class="category-table"
            show-select
        >
            <thead>
                <tr>
                    <th>
                        <v-checkbox 
                            v-model="check"
                            label=""
                            density="compact"
                            hide-details
                        >
                        </v-checkbox>
                    </th>
                    <th>نام</th>
                    <th>توضیح</th>
                    <th>نامک</th>
                    <th>تعداد</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories" :key="category.id">
                    <td>
                        <v-checkbox 
                            v-model="check"
                            label=""
                            density="compact"
                            hide-details
                        >
                        </v-checkbox>
                    </td>
                    <td>
                        <a href="#" class="content-wrapper text-grey-darken-1">
                            <span>
                                {{ category.name }}
                            </span>
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ category.description === '' ? '-' : category.description }}
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ decodeURI(category.slug) }}
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ category.count}}
                        </a>
                    </td>
                </tr>
            </tbody>
        </v-table> -->

        <div class="table-container">
            <v-data-table
                :headers="headers"
                :items="categories"
                :items-per-page="itemsPerPage"
                :pageText="'{1} دسته از {2}'"
                class="category-table"
                v-model:page="page"
                hide-default-footer
                show-select
            >
                <template v-slot:item.actions="{ item }">
                    <v-menu location="left">
                        <template v-slot:activator="{ props }">
                            <v-btn 
                                v-bind="props"
                                icon="mdi-dots-horizontal" 
                                rounded="0"
                                width="30"
                                class="draft-btn bg-white elevation-0 h-50" 
                            >
                            </v-btn>
                        </template>
    
                        <v-list class="d-flex pa-0 bg-grey-lighten-3 rounded-lg elevation-0">
                            <v-list-item 
                                min-height="unset"
                                width="40"
                                class="text-center pa-2"
                            >
                                <font-awesome-icon 
                                icon="fa-regular fa-trash-can"
                                size="lg"
                                color="rgba(0, 0, 0, 0.5)"
                                @click="deletePost()"/>
                                <v-dialog
                                    v-model="dialogDelete"
                                    activator="parent"
                                    width="400"
                                >
                                    <v-card class="bg-white rounded-lg pa-3">
                                        <v-card-title class="font-weight-black font-family">حذف پست</v-card-title>
                                        <v-card-text class="text-subtitle-2 font-family text-grey-darken-1">
    
                                            <span>
                                                آیا مطمئنید می‌خواهید این پست را حذف کنید؟
                                            </span>
                                        </v-card-text>
                                        <v-card-actions class="d-flex">
                                        <div class="action-btns d-flex align-center justify-end w-100 mt-4">
                                            <v-btn 
                                            size="small"
                                            height="40"
                                            width="50"
                                            color="purple-darken-3"
                                            @click="closeDelete"
                                            class="cancel-btn bg-grey-lighten-5 rounded font-weight-bold"
                                            >لغو
                                        </v-btn>    
                                        <v-btn 
                                            size="small"
                                            height="40"
                                            width="50"
                                            color="purple-darken-3"
                                            @click="deleteItemConfirm"
                                            class="confirm-btn rounded font-weight-bold"
                                        >تأیید
                                        </v-btn>    
                                        </div>    
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-list-item>
                            <v-list-item 
                                min-height="unset"
                                width="40"
                                class="text-center pa-2"
                            >
                                <font-awesome-icon 
                                icon="fa-regular fa-pen-to-square"
                                size="lg"
                                color="rgba(0, 0, 0, 0.5)"
                                @click="editPost()"/>
                                <v-dialog
                                    v-model="dialogEdit"
                                    activator="parent"
                                    width="400"
                                >
                                    
                                </v-dialog>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
                <template v-slot:bottom>
                    <div class="text-center pt-2">
                        <v-pagination
                        v-model="page"
                        :length="pageCount"
                        ></v-pagination>
                    </div>
                </template>
            </v-data-table>
        </div>
        <v-divider></v-divider>

        <div class="btns bg-white d-flex py-4 me-4">
            <v-btn 
                size="small" 
                elevation="0"
                color="#25c16e"
                to="/posts/category/add"
                class="user-add text-white font-weight-black mx-4"
                >دسته‌ی جدید
            </v-btn>
            <v-btn 
                @click="deleteUsers()" 
                size="small"
                elevation="0"
                variant="outlined"
                color="red"
                class="users-delete font-weight-black"
                >حذف انتخاب شده‌ها
            </v-btn>
        </div>
    </v-app>
</template>

<script setup>
import { ref, onMounted, computed, reactive } from "vue"
// import { useCategoryStore } from "@/stores/store"
import axiosInstance from "@/axios.js"

const headers = [
    { title: 'نام', align: 'center', key: 'name' },
    { title: 'توضیح', align: 'center', key: 'description' },
    { title: 'نامک', align: 'center', key: 'slug' },
    { title: 'تعداد', align: 'center', key: 'count' },
    { title: '', align: 'center', key: 'actions' },
];

// const categoryStore = useCategoryStore();
const categories = ref([]);

const page = ref(1);
const itemsPerPage = ref(5);

// const initialize = async () => {
//     try {
//         const response = await axiosInstance.get('/wp/v2/categories');
//         categoryStore.setCategory(response.data);
//         categories.value = categoryStore.categories;
//         categories.value.map((category => {
//             category.slug = decodeURI(category.slug);
//         }))
//     } catch (error) {
//         console.log('خطا در بیرون کشیدن دسته‌ها:', error);
//     }
// }

// onMounted(initialize);

const pageCount = computed(() => Math.ceil(categories.value.length / itemsPerPage.value));

</script>

<style lang="scss">
</style>