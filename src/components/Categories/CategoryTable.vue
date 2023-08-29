<template>
    <v-app class="category-table-container elevation-1">
        <div class="section-header bg-white d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">همه‌ی دسته‌ها</div>
            <div class="categories-top d-flex justify-space-between align-center me-4">
            <v-btn  
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
            height="520px"
            density="compact"
            class="category-table"
        >
            <thead>
                <tr>
                    <th>نام</th>
                    <th>توضیح</th>
                    <th>نامک</th>
                    <th>تعداد</th>
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
                <tr v-for="category in categories" :key="category.id">
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
import { ref, onMounted, computed, reactive } from "vue"
import { useCategoryStore } from "@/stores/store"
import axiosInstance from "@/axios.js"

const categoryStore = useCategoryStore();

const categories = ref([]);

// const decodedCategories = computed(() => {
//     return categories.value.map(category => ({
//         ...category,
//         slug: decodeURI(category.slug)
//     }));
// })

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
    }
    
    th, td {
        &:first-child {
            text-align: start !important;
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
                text-align: start !important;
                border-right: none;
            }

            &:last-child {
                width: 180px;
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