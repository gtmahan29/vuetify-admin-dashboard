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

<script>
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                title: 'پست‌ها',
                align: 'start',
                sortable: false,
                key: 'subject',
            },
            { title: 'نویسنده', align: 'center', key: 'author' },
            { title: 'دسته‌ها', align: 'center', key: 'category' },
            { title: 'برچسب‌ها', align: 'center', key: 'tag' },
            { title: 'تاریخ', align: 'center', key: 'date' },
            { title: 'عملیات', align: 'center', key: 'actions' },
        ],
    }),

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.posts = [
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        {
            subject: 'لورم ایپسوم متن ساختگی',
            author: 'کاربر اول',
            category: 'دسته‌بندی اول',
            tag: '-',
            date: '۱۴۰۲/۰۵/۲۱'
        },
        ]
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
}

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