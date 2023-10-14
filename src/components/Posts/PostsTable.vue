<template>
    <v-app class="posts-table-container component-shadow rounded-lg">
        <div class="section-header d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">لیست پست‌ها</div>
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
        <div class="table-container">
            <v-data-table
                :headers="headers"
                :items="posts"
                :items-per-page="itemsPerPage"
                class="posts-table"
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
                                <v-card-title class="text-subtitle-1 font-weight-black font-family pa-2">حذف پست</v-card-title>
                                <v-card-text class="font-family text-grey-darken-1 pa-2">
                                    <span class="">
                                        آیا مطمئنید می‌خواهید این پست را حذف کنید؟
                                    </span>
                                </v-card-text>
                                <v-card-actions class="d-flex pa-0">
                                <div class="action-btns d-flex align-center justify-end w-100 mt-4">
                                    <v-btn 
                                    size="small"
                                    height="40"
                                    width="50"
                                    color="purple-darken-3"
                                    @click="closeDelete"
                                    class="dialog-btn bg-grey-lighten-5 rounded font-weight-bold"
                                    >لغو
                                </v-btn>    
                                <v-btn 
                                    size="small"
                                    height="40"
                                    width="50"
                                    color="purple-darken-3"
                                    @click="deleteItemConfirm"
                                    class="dialog-btn rounded font-weight-bold"
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

            <v-divider></v-divider>

            <div class="btns bg-white d-flex py-4 me-4">
                <v-btn 
                size="small" 
                elevation="0"
                color="#25c16e"
                to="/posts/add"
                class="user-add text-white font-weight-black mx-4"
                >افزودن کاربر جدید
            </v-btn>
            <v-btn 
                @click="deletePosts()" 
                size="small"
                elevation="0"
                variant="outlined"
                color="red"
                class="users-delete font-weight-black"
                >حذف انتخاب شده‌ها
            </v-btn>
            </div>
        </div>
    </v-app>
</template>

<script setup>
import { ref, onMounted, computed, inject } from "vue"
import { usePostStore } from "@/stores/store"
import axiosInstance from "@/axios.js"
import { matchedRouteKey } from "vue-router";

const dialogDelete = ref(false);
const dialogEdit = ref(false);

const page = ref(1);
const itemsPerPage = ref(5);

const headers = [
    {
        title: 'پست‌ها',
        align: 'start',
        sortable: false,
        key: 'title',
    },
    { title: 'نویسنده', align: 'center', key: 'author' },
    { title: 'دسته‌ها', align: 'center', key: 'category' },
    { title: 'تاریخ', align: 'center', key: 'date' },
    { title: '', align: 'center', key: 'actions' },
];

const postStore = usePostStore();
const posts = ref([]);

function initialize() {
    postStore.fetchPosts();
    posts.value = postStore.posts;
}

onMounted(initialize);


// const authStore = useAuthStore();

// const $helpers = inject('$helpers');
// // TODO: check the access token. it's undefined.
// const initialize = async () => {
//     try {
//         const accessToken = authStore.accessToken;
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//             },
//         };
//         console.log(accessToken);
//         const response = await $helpers.makeRequest('GET','/wp/v2/posts', config);
//         postStore.setPosts(response.data);
//         posts.value = postStore.posts
//     } catch (error) {
//         console.log('خطا در بیرون کشیدن پست‌ها:', error);
//     }
// }

// onMounted(initialize);

const pageCount = computed(() => Math.ceil(posts.value.length / itemsPerPage.value));

</script>

<style lang="scss">
</style>