<template>
    <v-app class="posts-table-container">
        <div class="section-header bg-white d-flex justify-space-between align-center elevation-1">
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
                </template>
            </v-data-table>
        </div>
    </v-app>
</template>

<script setup>

import { ref, onMounted } from "vue"
import { usePostStore } from "@/stores/store"
import axiosInstance from "@/axios.js"

// const userStore = useUserStore();
// const users = ref([]);

// async function fetchUsers() {
//     try {
//         const response = await axiosInstance.get('/wp/v2/users');
//         userStore.setUsers(response.data);
//         users.value = userStore.users;
//     }   catch (error) {
//         console.log('خطا در بیرون کشیدن کاربران:', error);
//     }
// }

// onMounted(fetchUsers);

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



const save = () => {
};

const close = () => {
dialog.value = false;
};

const closeDelete = () => {
dialogDelete.value = false;
};

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
</style>