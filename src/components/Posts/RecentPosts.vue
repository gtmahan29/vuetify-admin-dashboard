<template>
    <v-app class="recent-posts component-shadow rounded-lg">
        <div class="section-header d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">آخرین پست‌ها</div>
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
            height="300px"
            class="recent-posts-table"
        >
            <thead>
                <tr>
                    <th>محتوای پست</th>
                    <th>کاربر</th>
                    <th>دسته‌بندی</th>
                    <th>زمان انتشار</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <th>
                        <a href="#" class="content-wrapper text-grey-darken-1">
                            <span>
                                {{ post.content }}
                            </span>
                        </a>
                    </th>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ post.user }}
                        </a>
                    </td>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ post.category }}
                        </a>
                    </td>
                    <td>{{ post.datePublished }}</td>
                </tr>
            </tbody>
        </v-table>

        <v-divider></v-divider>

        <div class="btns d-flex my-4">
            <v-btn 
                elevation="0"
                color="#800080"
                variant="tonal"
                size="small"
                to="/comments"
                class="view-all font-weight-black mx-4"
            >نمایش همه
            </v-btn>
            <v-btn 
                elevation="0"
                color="#25c16e"
                size="small"
                to="/comments"
                class="add-post-btn text-white font-weight-black"
            >افزودن پست
            </v-btn>
        </div>
    </v-app>
</template>

<script setup>
import { reactive } from "vue"

const posts = reactive([
    {   
        id: 1,
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        category: 'دسته‌بندی اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {   
        id: 2,
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',

        user: 'کاربر اول',
        category: 'دسته‌بندی اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {   
        id: 4,
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        category: 'دسته‌بندی اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {   
        id: 5,
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        category: 'دسته‌بندی اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {   
        id: 6,
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        category: 'دسته‌بندی اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {   
        id: 7,
        content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        category: 'دسته‌بندی اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
]);
</script>

<style lang="scss">
</style>