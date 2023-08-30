<template>
    <v-app class="category-table-container elevation-1">
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
        <v-table
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
        </v-table>

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
import { useCategoryStore } from "@/stores/store"
import axiosInstance from "@/axios.js"

const categoryStore = useCategoryStore();

const categories = ref([]);

async function fetchCategories() {
    try {
        const response = await axiosInstance.get('/wp/v2/categories');
        categoryStore.setCategory(response.data);
        categories.value = categoryStore.categories;
    } catch (error) {
        console.log('خطا در بیرون کشیدن دسته‌ها:', error);
    }
}

onMounted(fetchCategories);

</script>

<style lang="scss">
.category-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px !important;
    
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
            color: #000 !important;
            border-right: 1px solid rgba($color: #000, $alpha: 0.1);
            font-size: 14px !important;
            font-weight: bold !important;

            &:first-child {
                width: 120px;
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