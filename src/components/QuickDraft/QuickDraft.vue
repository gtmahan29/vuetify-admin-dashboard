<template>
    <v-app class="quick-draft h-100 bg-white elevation-1">
      <div class="section-header d-flex justify-space-between align-center elevation-1 mb-8">
          <div class="text-subtitle-1 font-family font-weight-black pa-4">پیش‌نویس سریع</div>
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

      <v-sheet class="mx-auto w-100">
        <v-form @submit.prevent>
          <v-text-field
            v-model="subject"
            :rules="rules"
            label="عنوان"
            density="compact"
            bg-color="grey-lighten-5"
            base-color="grey-lighten-5"
            class="mb-2 mx-4"
          ></v-text-field>

          <v-textarea 
          rows="7"
          label="محتوا" 
          bg-color="grey-lighten-5"
          no-resize
          class="mx-4" 
          >
        </v-textarea>

        <v-hover>
          <template v-slot:default="{ isHovering, props }"> 
            <v-btn 
              type="submit" 
              block 
              v-bind="props"
              :color="isHovering ? '#25c16e' : undefined"
              elevation="0"
              height="40"
              width="200"
              :variant="isHovering ? undefined : 'tonal'"
              class="submit-btn font-weight-black mx-auto mb-3"
              :class="isHovering ? 'text-white' : 'undefined'"
            >
              ذخیره‌ی پیش‌نویس
            </v-btn>
          </template>
        </v-hover>
        </v-form>
      </v-sheet>
    </v-app>
</template>

<script setup>
import { reactive, ref } from 'vue'

const subject = ref('');

const rules = [
  value => {
    if (value) return true;

    return 'لطفا عنوان را وارد کنید';
  }
];

const items = reactive([
        { 
          title: 'آیتم اول',
          path: '/a'
         },
        { 
          title: 'آیتم دوم',
          path: '/b' },
        { 
          title: 'آیتم سوم',
          path: '/c' },
        { 
          title: 'آیتم چهارم',
          path: '/d' },
      ])

</script>

<style lang="scss">

</style>