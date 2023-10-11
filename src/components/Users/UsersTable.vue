<template>
    <v-app class="users-table-container component-shadow rounded-lg">
        <div class="section-header d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">لیست کاربران</div>
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
                :items="users"
                :items-per-page="itemsPerPage"
                class="users-table"
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
                                @click="deleteUser()"/>
                                <v-dialog
                                    v-model="dialogDelete"
                                    activator="parent"
                                    width="400"
                                >
                                    <v-card class="bg-white rounded-lg pa-3">
                                        <v-card-title class="font-weight-black font-family">حذف کاربر</v-card-title>
                                        <v-card-text class="text-subtitle-2 font-family text-grey-darken-1">

                                            <span>
                                                آیا مطمئنید می‌خواهید این کاربر را حذف کنید؟
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

        <div class="btns bg-white d-flex py-4">
            <v-btn 
                size="small" 
                elevation="0"
                color="#25c16e"
                to="/users/add"
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
    </v-app>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useUserStore } from "@/stores/store"
import axiosInstance from "@/axios.js"

const dialogDelete = ref(false);
const dialogEdit = ref(false);

const page = ref(1);
const itemsPerPage = ref(5);

const headers = [
    { title: 'نام کاربری', align: 'center', key: 'username' },
    { title: 'نام', align: 'center', key: 'name' },
    { title: 'ایمیل', align: 'center', key: 'email' },
    { title: 'نقش', align: 'center', key: 'role' },
    { title: '', align: 'center', key: 'actions' },
];

const userStore = useUserStore();
const users = ref([]);

const initialize = async () => {
    try {
        const response = await axiosInstance.get('/wp/v2/users');
        userStore.setUsers(response.data);
        users.value = userStore.users;
        users.value.map((user) => {
            if (user.role === 'administrator') {
                return (user.role = 'ادمین')
            } else {
                return (user.role = 'مشترک')
            }
            
        })
    }   catch (error) {
        console.log('خطا در بیرون کشیدن کاربران:', error);
    }
}

onMounted(initialize);

const pageCount = computed(() => Math.ceil(users.value.length / itemsPerPage.value));

function addUser() {
    console.log('User Added');
}

function deleteUsers() {
    console.log('Selected Users Deleted');
}


</script>

<style lang="scss">
</style>