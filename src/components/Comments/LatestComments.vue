<template>
    <v-app class="latest-comments elevation-1">
        <div class="section-header d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">آخرین دیدگاه‌ها</div>
            <v-btn 
                elevation="0"
                color="#800080"
                variant="tonal"
                size="small"
                to="/comments"
                class="view-all font-weight-black me-4"
            >
                نمایش همه
            </v-btn>
        </div>
        <v-table
            fixed-header
            height="380px"
            class="comments-table"
        >
            <thead>
            <tr>
                <th>دیدگاه</th>
                <th>کاربر</th>
                <th>زمان انتشار</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="comment in comments" :key="comment.id">
                    <th>
                        <a href="#" class="text-grey-darken-1">
                            {{ comment.comment }}
                        </a>
                    </th>
                    <td>
                        <a href="#" class="text-grey-darken-1">
                            {{ comment.user }}
                        </a>
                    </td>
                    <td>{{ comment.datePublished }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-app>
</template>
<script setup>
import { reactive } from 'vue'

const comments = reactive([
    {
        id: 1,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {   
        id: 2,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {
        id: 3,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {
        id: 4,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {
        id: 5,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {
        id: 6,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {
        id: 7,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {
        id: 8,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
    {
        id: 9,
        comment: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
        user: 'کاربر اول',
        datePublished: '۱۴۰۲/۰۵/۲۱'
    },
]);

</script>
<style lang="scss">
@use '../../assets/scss/abstracts' as *;

.latest-comments {
    background-color: #fff;
    box-shadow: 0 2px 4px 0 #e6e6e6;

    .section-header{
        z-index: 2;
    }
        
    .comments-table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
        white-space: nowrap;
        font-size: $fontsize-2;
        border-top: 1px solid rgba($color: #000, $alpha: 0.1);
        
        th {
            width: 400px;
            a {
                padding: 10px;
                width: 400px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        td {
            a {
                display: block;
                padding: 10px;
            }
        }
        
        th, td {
            height: unset !important;
            padding: 0 !important;
            text-align: center !important;
        }

        thead {
            th {
                padding: 10px !important;
                background-color: #fafafa !important;
                color: #000 !important;
                border-right: 1px solid rgba($color: #000, $alpha: 0.1);
                font-size: $fontsize-1;
                font-weight: bold !important;

                &:first-child {
                    text-align: start !important;
                    border-right: none;
                }
            }
        }

        a {
            &:hover {
                background-color: #fafafa;
            }
        }
    }
}
</style>