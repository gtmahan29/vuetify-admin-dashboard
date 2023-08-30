<template>
    <v-app class="posts-table-container elevation-1">
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
                items-per-page-text="تعداد کاربر در هر صفحه:"
                :pageText="'{1} کاربر از {2}'"
                class="posts-table"
                v-model="selected"
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
                            v-model="dialog"
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
                            v-model="dialog"
                            activator="parent"
                            width="400"
                        >
                           
                        </v-dialog>
                    </v-list-item>
                    </v-list>
                </v-menu>
                
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
                @click="deleteUsers()" 
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

    .v-field__input {
        padding-top: 0;
        padding-bottom: 0;
        padding-inline-start: 6px;
        padding-inline-end: 0;
        min-height: unset;
    }

    .v-select__menu-icon {
        margin-inline-start: 0;
    }

    .v-field--appended {
        padding-inline-end: 0;
    }

    .v-select .v-select__selection  {
        margin: 2px 0;
    }
    
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
        &:nth-child(2) {
            text-align: start !important;
            border-right: 1px solid rgba($color: #000, $alpha: 0.1);
        }
    }
    
    th, td {
        text-align: center !important;
    }

    thead {
        th {
            color: #000 !important;
            background-color: #f7f7f7 !important;
            font-weight: bold !important;

            &:nth-child(2) {
                border-right: 1px solid rgba($color: #000, $alpha: 0.1);
            }
        }
    }

    tr {
        &:last-child {
            td {
                border-bottom: 1px solid rgba($color: #000, $alpha: 0.1);
            }
        }
    }

    a {
        &:hover {
            background-color: #fafafa;
        }
    }
}

.v-btn__overlay {
    opacity: 0;
    background-color: transparent;
}

.v-card-title {
    font-size: $fontsize-4;
}

.dialog-header {
    z-index: 2;
}

.confirm-btn {
    font-size: $fontsize-3;
    background-color: transparent !important;

    &:hover {
        .v-btn__overlay {
            opacity: 0;
        }
    }
}

.cancel-btn {
    font-size: $fontsize-3;
    background-color: transparent !important;
    
    &:hover {
        .v-btn__overlay {
            opacity: 0;
        }
    }
}
</style>