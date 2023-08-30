<template>
    <v-app class="dashboard-container bg-grey-lighten-5">
      <div class="content">
        <div class="dashboard bg-grey-lighten-5 pa-8">
          <v-row>
            <v-col md="4" class="align-items-start">
              <AnalysisBox path="/posts" :stats="stats.posts" title="تعداد پست" icon="fa-regular fa-pen-to-square"/>
            </v-col>
            <v-col md="4">
              <AnalysisBox path="/posts" :stats="stats.visits" title="تعداد بازدید" icon="fa-regular fa-eye"/>
            </v-col>
            <v-col md="4">
              <AnalysisBox path="/users" :stats="stats.users" title="تعداد کاربران" icon="fa-solid fa-users"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <QuickDraft />
            </v-col>
            <v-col cols="6">
              <LatestComments />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <RecentPosts />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-app>
</template>

<script setup>
import AnalysisBox from '../components/AnalysisBox/AnaysisBox.vue'
import LatestComments from '@/components/Comments/LatestComments.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import QuickDraft from '@/components/QuickDraft/QuickDraft.vue'
import RecentPosts from '@/components/Posts/RecentPosts.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import { reactive } from 'vue'

const stats = reactive({
  posts: {
    value: 50,
    comparison: 1.5,
  },
  visits: {
    value: 5000,
    comparison: -1.2,
  },
  users: {
    value: 500,
    comparison: 2,
  },
});
</script>

<style lang="scss">
.dashboard-container {
  .content {
    .v-application__wrap {
      min-height: unset;
    }
  }
  .dashboard {
    font-family: 'Vazir';
  }

  .sidebar {
    width: 300px;
  }
}
</style>
