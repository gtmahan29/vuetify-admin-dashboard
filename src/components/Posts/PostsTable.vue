<template>
    <v-app class="posts-table-container elevation-1">
        <div class="section-header bg-white d-flex justify-space-between align-center elevation-2">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">آخرین پست‌ها</div>
            <div class="btns ms-auto">
                <v-btn 
                    elevation="0"
                    color="#25c16e"
                    size="small"
                    to="/posts/add"
                    class="add-post-btn text-white font-weight-black me-4"
                >افزودن پست
                </v-btn>
            </div>
        </div>
        <div class="table-container">
            <v-data-table
                :headers="headers"
                :items="posts"
                items-per-page-text="آیتم در هر صفحه:"
                class="posts-table"
            >
            <template v-slot:item.actions="{ item }">
                <v-icon
                    size="small"
                    @click="deleteItem(item.raw)"
                >
                    mdi-delete

                </v-icon>
                <v-dialog
                    v-model="dialog"
                    activator="parent"
                    width="400"
                >
                <div class="dialog-header font-weight-black bg-grey-lighten-5 px-4 py-3 elevation-1">حذف پست</div>
                    <v-card rounded="0" class="bg-white pt-4 pb-6">
                        <v-card-title class="text-subtitle-2 font-family">آیا مطمئنید می‌خواهید حذف کنید؟</v-card-title>
                        <v-card-actions class="d-flex justify-center">
                        <div class="action-btns d-flex align-center justify-center w-100 mt-4">
                            <v-btn 
                            elevation="3"
                            color=""
                            size="small"
                            width="100"
                            height="40"
                            variant="tonal"
                            @click="closeDelete"
                            class="cancel-btn font-weight-bold"
                            >خیر
                        </v-btn>    
                        <v-btn 
                            elevation="3"
                            color="#25c16e"
                            size="small"
                            height="40"
                            width="100"
                            @click="deleteItemConfirm"
                            class="confirm-btn bg-red font-weight-bold"
                        >بله
                        </v-btn>    
                        </div>    
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </template>
            </v-data-table>
        </div>
    </v-app>
</template>

<script setup>

import { ref, onMounted, computed } from "vue"
import { usePostStore } from "@/stores/store"
import axiosInstance from "@/axios.js"

const dialog = ref(false);
const dialogDelete = ref(false);

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
    { title: 'عملیات', align: 'center', key: 'actions' },
];

const postStore = usePostStore();

const posts = ref([]);

const initialize = async () => {
    try {
        const response = await axiosInstance('/wp/v2/posts');
        postStore.setPosts(response.data);
        posts.value = postStore.posts
    } catch (error) {
        console.log('خطا در بیرون کشیدن پست‌ها:', error);
    }
}

onMounted(initialize);

</script>

<style lang="scss">
@use '../../assets/scss/abstracts' as *;

.section-header {
    z-index: 2;
}
.posts-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px !important;
    
    th {
        width: 1000px;
        a {
            width: 1000px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    td {
        &:first-child {
            background-color: #fafafa !important;
            text-align: start !important;
            border-right: none;
        }
    }
    
    th, td {
        text-align: center !important;
    }

    thead {
        th {
            color: #000 !important;
            border-right: 1px solid rgba($color: #000, $alpha: 0.1);
            font-weight: bold !important;
        }
    }

    a {
        &:hover {
            background-color: #fafafa;
        }
    }
}

.dialog-header {
    z-index: 2;
}

.action-btns {
        gap: 20px;
}

.confirm-btn {
    font-size: $fontsize-3;
}

.cancel-btn {
    font-size: $fontsize-3;
}
</style>