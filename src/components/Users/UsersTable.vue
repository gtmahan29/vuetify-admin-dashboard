<template>
    <v-app class="users-table-container elevation-1">
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
        <v-table
            fixed-header
            height="600px"
            density="compact"
            class="users-table"
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
                    <th>نام کاربری</th>
                    <th>نام</th>
                    <th>ایمیل</th>
                    <th>نقش</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
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
                                {{ user.username }}
                            </span>
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ user.name }}
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ user.email }}
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ user.role === "administrator" ? 'مدیر سایت' : 'مشترک' }}
                        </a>
                    </td>
                </tr>
            </tbody>
        </v-table>

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
import { ref, onMounted } from "vue"
import { useUserStore } from "@/stores/store"
import axiosInstance from "@/axios.js"

const userStore = useUserStore();
const users = ref([]);

async function fetchUsers() {
    try {
        const response = await axiosInstance.get('/wp/v2/users');
        userStore.setUsers(response.data);
        users.value = userStore.users;
    }   catch (error) {
        console.log('خطا در بیرون کشیدن کاربران:', error);
    }
}

onMounted(fetchUsers);

function addUser() {
    console.log('User Added');
}

function deleteUsers() {
    console.log('Selected Users Deleted');
}


</script>

<style lang="scss">
.section-header {
    z-index: 2;
}

.users-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px !important;
    border-top: 1px solid rgba($color: #000, $alpha: 0.1);
    
    th {
        width: 1000px;
        text-align: center !important;

        a {
            width: 1000px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    td {
        text-align: center;
        
        a {
            display: block;
        }

        &:nth-child(2) {
            border-right: 1px solid rgba($color: #000, $alpha: 0.1);
        }
    }
    
    
    thead {
        th {
            background-color: #fafafa !important;
            // background-color: #fff;
            color: #000 !important;
            border-right: 1px solid rgba($color: #000, $alpha: 0.1);
            font-size: 12px !important;
            font-weight: bold !important;

            &:first-child {
                border-right: none;
            }

            &:first-child {
                width: 120px;
            }
        }
    }

    .v-label {
        font-size: 12px !important;
        color: #000;
    }

    a {
        &:hover {
            background-color: #fafafa;
        }
    }
}
</style>