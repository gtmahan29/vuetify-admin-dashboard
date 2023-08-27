<template>
    <v-app>
        <div class="section-header bg-white d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">همه‌ی کاربران</div>
            <div class="users-top d-flex justify-space-between align-center mb-3 me-4">
                <v-btn 
                @click="addUser()"
                size="small" 
                elevation="0"
                color="#25c16e"
                class="user-add text-white font-weight-black me-2"
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
        <v-table
            fixed-header
            height="600px"
            density="compact"
            class="users-table"
        >
            <thead>
                <tr>
                    <th>نام کاربری</th>
                    <th>نام</th>
                    <th>ایمیل</th>
                    <th>نقش</th>
                    <th>
                        <v-checkbox 
                            v-model="check"
                            label=""
                            density="compact"
                            hide-details
                        >
                        </v-checkbox>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
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
                    <td>
                        <v-checkbox 
                            v-model="check"
                            label=""
                            density="compact"
                            hide-details
                        >
                        </v-checkbox>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-app>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useUserStore } from "@/stores/store"
import axios from "axios"

const userStore = useUserStore();
const users = ref([]);

async function fetchUsers() {
    try {
        const config = {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3dvcmRwcmVzcyIsImlhdCI6MTY5MjYxMjIwNCwibmJmIjoxNjkyNjEyMjA0LCJleHAiOjE2OTMyMTcwMDQsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.T3KFL8pe6iYiw40Q1B5XTVQVvr67vBUe4d_FtIlFuok'
            }
        };

        console.log(config);

        const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/users', config);
        userStore.setUsers(response.data);
        users.value = userStore.users;
        console.log(users.value);

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
    }
    
    th, td {
        &:first-child {
            text-align: start !important;
        }
    }

    thead {
        th {
            background-color: #fafafa !important;
            color: #000 !important;
            border-right: 1px solid rgba($color: #000, $alpha: 0.1);
            font-size: 12px !important;
            font-weight: bold !important;

            &:first-child {
                text-align: start !important;
                border-right: none;
            }

            &:last-child {
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