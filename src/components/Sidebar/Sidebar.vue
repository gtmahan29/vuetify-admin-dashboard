<template>
    <v-app class="sidebar-container">
        <v-navigation-drawer
        app
        permanent
        floating
        rail
        class="sidebar w-100"
        >
            <v-card 
                height="200"
                class="profile-card pa-8 elevation-0"
            >
                <v-card-item class="pa-0 mb-8">
                    <div class="pa-0">
                        <RouterLink to="/profile">
                            <v-row class="flex-column justify-center ma-0">
                                <v-col cols="12" class="d-flex align-center justify-center">
                                    <v-avatar size="x-large">
                                        <v-img src="../../assets/img/profile.jpg" cover></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center align-center">
                                    <div class="user-info d-flex flex-column">
                                        <div class="profile-name text-subtitle-1 text-black font-weight-black font-family">ماهان عادلی</div>
                                        <div
                                            color="#800080"
                                            class="d-flex justify-center ma-0"
                                        >
                                            <span class="profile-role px-2 rounded-xl">ادمین</span>
                                        </div>
                                    </div>
                                    <!-- <v-btn 
                                        elevation="0"
                                        color="red"
                                        size="small"
                                        
                                        class="sign-out-btn font-weight-black ms-auto"
                                    >خروج
                                    </v-btn> -->
                                </v-col>
                            </v-row>
                        </RouterLink>
                    </div>
                </v-card-item>
            </v-card>
            
            <v-list v-model:opened="open">
                <v-list-item 
                    title="داشبورد"
                    base-color="black"
                    class="sidebar-item px-8"
                    to="/dashboard"
                >
                    <template v-slot:prepend>
                        <font-awesome-icon icon="fa-solid fa-table-columns" size="lg" class="me-3"/>
                    </template>
                </v-list-item>

                <v-list-group value="پست‌ها">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            title="پست‌ها"
                            base-color="black"
                            class="sidebar-item px-8"
                        >
                            <template v-slot:prepend>
                                <font-awesome-icon icon="fa-solid fa-pen-to-square" size="lg" class="me-3"/>
                            </template>
                        </v-list-item>
                    </template>

                    <v-list-item
                        v-for="item in posts"
                        :key="item.path"
                        :title="item.title"
                        :value="item.title"
                        :to="item.path"
                        class="px-8"
                    ></v-list-item>
                </v-list-group>

                <v-list-item  
                    title="دیدگاه‌ها"
                    base-color="black"
                    class="sidebar-item px-8"
                    to="/comments"
                >
                <template v-slot:prepend>
                    <font-awesome-icon icon="fa-solid fa-comments" size="md" class="me-3"/>
                </template>
                </v-list-item>

                <v-list-group value="کاربران">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                        v-bind="props"
                        title="کاربران"
                        base-color="black"
                        class="sidebar-item px-8"
                        >
                            <template v-slot:prepend>
                                <font-awesome-icon icon="fa-solid fa-user-group" size="md" class="me-3"/>
                            </template> 
                        </v-list-item>
                    </template>

                    <v-list-item
                        v-for="item in users"
                        :key="item.path"
                        :title="item.title"
                        :value="item.title"
                        :to="item.path"
                        class="px-8"
                    ></v-list-item>
                </v-list-group>

                <v-list-group value="ابزارها">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            title="ابزارها"
                            base-color="black"
                            class="sidebar-item px-8"
                        >
                            <template v-slot:prepend>
                                <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" size="lg" class="me-3"/>
                            </template> 
                        </v-list-item>
                    </template>

                    <v-list-item
                        v-for="item in tools"
                        :key="item.path"
                        :title="item.title"
                        :value="item.title"
                        :to="item.path"
                        class="px-8"
                    ></v-list-item>
                </v-list-group>
                    <v-list-group value="تنظیمات">
                        <template v-slot:activator="{ props }">
                            <v-list-item
                                v-bind="props"
                                title="تنظیمات"
                                base-color="black"
                                class="px-8"
                            >
                                <template v-slot:prepend>
                                    <font-awesome-icon icon="fa-solid fa-gear" size="lg" class="me-3"/>
                                </template>
                            </v-list-item>
                        </template>

                        <v-list-item
                            v-for="item in preferences"
                            :key="item.path"
                            :title="item.title"
                            :value="item.title"
                            :to="item.path"
                            class="px-8"
                        ></v-list-item>
                    </v-list-group>
    </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script setup>
import { ref, reactive } from "vue"
import { RouterLink } from 'vue-router'

const open = ref(['Users']);

const posts = reactive([
    {
        title: 'همه‌ی پست‌ها',
        path: '/posts'
    },
    {
        title: 'افزودن پست',
        path: '/posts/add'
    },
    {
        title: 'دسته‌بندی‌',
        path: '/posts/category'
    },
]);

const users = reactive([
    {
        title: 'همه‌ی کاربران',
        path: '/users'
    },
    {
        title: 'افزودن کاربر',
        path: '/users/add'
    },
]);

const tools = reactive([
    {
        title: 'ابزارهای در دسترس',
        path: '/tools'
    },
    {
        title: 'درون‌ریزی',
        path: '/tools/import'
    },
    {
        title: 'برون‌بری',
        path: '/tools/export'
    },
    {
        title: 'سلامت سایت',
        path: '/tools/health'
    },
]);

const preferences = reactive([
    {
        title: 'عمومی',
        path: '/preferences'
    },
    {
        title: 'پیوند‌های یکتا',
        path: '/preferences/permalinks'
    },
    {
        title: 'حریم خصوصی',
        path: '/preferences/privay'
    },
]);

</script>

<style lang="scss">
@use '../../assets/scss/abstracts' as *;

.sidebar-container {
    border-left: 1px solid rgba($color: #000, $alpha: 0.1);
}

a {
    text-decoration: none;
}

.v-application {
    position: sticky !important;
    top: 0;
}

.sidebar {
    border-left: 1px solid rgba($color: #000, $alpha: 0.1);
    .sidebar-item {
        border-bottom: 1px solid rgba($color: #000, $alpha: 0.1);
    }

    .profile-name {
        font-size: $fontsize-3 !important;
        font-weight: 600;
    }

    .profile-role {
        border: 1px solid #800080;
        font-size: $fontsize-1 !important
        ;
    }
}

.logo {
    display: block;
    padding: 1rem 0;

    img {
        width: 2.5rem;
    }
}

</style>