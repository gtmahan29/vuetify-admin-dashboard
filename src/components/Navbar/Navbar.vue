<template>
    <v-app class="navbar-container bg-white elevation-1">
        <v-card
            color="white"
            flat
            rounded="0"
            elevation-1
        >
            <v-toolbar height="100" color="white" class="elevation-1">
                <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

                <v-toolbar-title class="nav-title ms-8">{{ $route.meta.title }}</v-toolbar-title>

                    <div class="text-center ms-auto me-2">
                        <v-btn
                        rounded
                        elevation="0"
                        color="transparent"
                        max-width="45"
                        min-width="45"
                        max-height="45"
                        min-height="45"
                        @click="overlay = !overlay"
                        >
                        <v-icon 
                            size="30"
                            class="icon"
                            color="grey-darken-1"
                        >mdi-magnify</v-icon>
                        </v-btn>
        
                        <v-overlay v-model="overlay" class="d-flex align-center justify-center">
                           <SearchBox />
                        </v-overlay>
                    </div>
                    <div class="text-center elevation-0 me-2">
                        <v-menu
                        v-model="notification"
                        :close-on-content-click="false"
                        location="bottom end"
                        class="notifications"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                            v-bind="props"
                            rounded
                            elevation="0"
                            color="transparent"
                            max-width="45"
                            min-width="45"
                            max-height="45"
                            min-height="45"
        
                            >
                                <v-icon 
                                    size="30"
                                    color="grey-darken-1"
                                    icon="mdi-bell-badge-outline"
                                    class="icon elevation-0"
                                ></v-icon>
                            </v-btn>
                        </template>
        
                        <v-card min-width="450" class="notifications-container rounded-lg elevation-1">
                            <v-list class="pa-0">
        
                            <v-list-item
                                title="اعلان‌ها"
                                class="text-black font-weight-bold py-0"
                            >
                                <template v-slot:append>
                                <v-btn
                                    variant="text"
                                    color="#017aff"
                                    class="pa-0"
                                >
                                پاک کردن همه
                                </v-btn>
                                </template>
                            </v-list-item>
                            </v-list>
        
                            <v-divider></v-divider>
        
                            <v-list>
                            <v-list-item class="py-2">
                                <v-card class="d-flex align-center">
                                    <v-avatar size="large">
                                        <v-img src="../../assets/img/profile.jpg" cover></v-img>
                                    </v-avatar>
                                    <div class="notification-detail d-flex flex-column justify-center">
                                        <v-card-title class="font-weight-bold text-subtitle-2 font-family py-0">
                                            یک دیدگاه جدید از 
                                            <span>ماهان عادلی</span>
                                        </v-card-title>
                                        <v-card-text class="py-0">
                                            3 ساعت پیش
                                        </v-card-text>
                                    </div>
                                </v-card>
                            </v-list-item>
                            <v-list-item class="py-2">
                                <v-card class="notification-containerd d-flex align-center">
                                    <v-avatar size="large">
                                        <v-img src="../../assets/img/profile.jpg" cover></v-img>
                                    </v-avatar>
                                    <div class="notification-detail d-flex flex-column justify-center">
                                        <v-card-title class="font-weight-bold text-subtitle-2 font-family py-0">
                                            یک دیدگاه جدید از 
                                            <span>ماهان عادلی</span>
                                        </v-card-title>
                                        <v-card-text class="py-0">
                                            3 ساعت پیش
                                        </v-card-text>
                                    </div>
                                </v-card>
                            </v-list-item>
                            </v-list>
        
                            <v-divider></v-divider>
        
                            <v-card-actions class="justify-center pa-0">
                                <v-btn 
                                    class="elevation-0 text-center w-100"
                                >
                                نمایش همه
                                    <div class="expand-icon">
                                        <v-icon class="icon">mdi-chevron-down</v-icon>
                                    </div>
                                </v-btn> 
                            </v-card-actions>
                        </v-card>
                        </v-menu>
                    </div>
                    <div class="text-center elevation-0 me-4">
                        <v-menu
                        v-model="settings"
                        :close-on-content-click="false"
                        location="end"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                            v-bind="props"
                            rounded
                            elevation="0"
                            color="transparent"
                            max-width="45"
                            min-width="45"
                            max-height="45"
                            min-height="45"
        
                            >
                                <v-icon 
                                    size="30"
                                    color="grey-darken-1"
                                    icon="mdi-cog"
                                    class="icon elevation-0"
                                ></v-icon>
                            </v-btn>
                        </template>
        
                        <v-card min-width="300">
                            <v-list>
                            <v-list-item
                                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                                title="John Leider"
                                subtitle="Founder of Vuetify"
                            >
                                <template v-slot:append>
                                <v-btn
                                    variant="text"
                                    :class="fav ? 'text-red' : ''"
                                    icon="mdi-heart"
                                    @click="fav = !fav"
                                ></v-btn>
                                </template>
                            </v-list-item>
                            </v-list>
        
                            <v-divider></v-divider>
        
                            <v-list>
                            <v-list-item>
                                <v-switch
                                v-model="message"
                                color="purple"
                                label="Enable messages"
                                hide-details
                                ></v-switch>
                            </v-list-item>
        
                            <v-list-item>
                                <v-switch
                                v-model="hints"
                                color="purple"
                                label="Enable hints"
                                hide-details
                                ></v-switch>
                            </v-list-item>
                            </v-list>
        
                            <v-card-actions>
                            <v-spacer></v-spacer>
        
                            <v-btn
                                variant="text"
                                @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                color="primary"
                                variant="text"
                                @click="menu = false"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-menu>
                    </div>
                    <div 
                        class="navbar-left pe-8"
                    >
                        <a href="" class="account">
                            <v-img 
                                :width="40" 
                                :height="40" 
                                cover  
                                src="../../assets/img/profile.jpg" 
                                alt="" 
                                class="rounded-circle"
                            >
                            </v-img>
                        </a>
                    </div>
                
            </v-toolbar>
        </v-card>
        <!-- <nav class="navbar d-flex align-center bg-white">
            <v-row class="d-flex bg-white w-100 ma-0">
                <v-col cols="2" class="logo-container d-flex pa-0">
                    <div
                    nav
                    class="pa-3 ps-8"
                    >
                        <a href="#" class="logo d-flex justify-start align-center ms-4">
                            <img class="" src="../../assets/img/logoipsum-225.svg" alt="Dashboard">
                            <span class="text-h4 font-family font-weight-black ps-2">آرامیس</span>
                        </a>
                    </div>
                </v-col>
                <v-col cols="10" class="d-flex align-center ms-auto pa-0">
                    <div class="text-h5 welcome">
                        {{ title }}
                    </div>
                    <div class="text-center ms-auto me-2">
                        <v-btn
                        rounded
                        elevation="0"
                        color="transparent"
                        max-width="45"
                        min-width="45"
                        max-height="45"
                        min-height="45"
                        @click="overlay = !overlay"
                        >
                        <v-icon 
                            size="30"
                            class="icon"
                            color="grey-darken-1"
                        >mdi-magnify</v-icon>
                        </v-btn>
        
                        <v-overlay v-model="overlay" class="d-flex align-center justify-center">
                           <SearchBox />
                        </v-overlay>
                    </div>
                    <div class="text-center elevation-0 me-2">
                        <v-menu
                        v-model="notification"
                        :close-on-content-click="false"
                        location="bottom end"
                        class="notifications"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                            v-bind="props"
                            rounded
                            elevation="0"
                            color="transparent"
                            max-width="45"
                            min-width="45"
                            max-height="45"
                            min-height="45"
        
                            >
                                <v-icon 
                                    size="30"
                                    color="grey-darken-1"
                                    icon="mdi-bell-badge-outline"
                                    class="icon elevation-0"
                                ></v-icon>
                            </v-btn>
                        </template>
        
                        <v-card min-width="300" class="notifications-container rounded-lg elevation-1">
                            <v-list class="pa-0">
        
                            <v-list-item
                                title="اعلان‌ها"
                                class="text-black font-weight-bold py-0"
                            >
                                <template v-slot:append>
                                <v-btn
                                    variant="text"
                                    color="#017aff"
                                    class="pa-0"
                                >
                                پاک کردن همه
                                </v-btn>
                                </template>
                            </v-list-item>
                            </v-list>
        
                            <v-divider></v-divider>
        
                            <v-list>
                            <v-list-item class="py-2">
                                <v-card class="d-flex align-center">
                                    <v-avatar size="large">
                                        <v-img src="../../assets/img/profile.jpg" cover></v-img>
                                    </v-avatar>
                                    <div class="notification-detail d-flex flex-column justify-center">
                                        <v-card-title class="font-weight-bold text-subtitle-2 font-family py-0">
                                            یک دیدگاه جدید از 
                                            <span>ماهان عادلی</span>
                                        </v-card-title>
                                        <v-card-text class="py-0">
                                            3 ساعت پیش
                                        </v-card-text>
                                    </div>
                                </v-card>
                            </v-list-item>
                            <v-list-item class="py-2">
                                <v-card class="notification-containerd d-flex align-center">
                                    <v-avatar size="large">
                                        <v-img src="../../assets/img/profile.jpg" cover></v-img>
                                    </v-avatar>
                                    <div class="notification-detail d-flex flex-column justify-center">
                                        <v-card-title class="font-weight-bold text-subtitle-2 font-family py-0">
                                            یک دیدگاه جدید از 
                                            <span>ماهان عادلی</span>
                                        </v-card-title>
                                        <v-card-text class="py-0">
                                            3 ساعت پیش
                                        </v-card-text>
                                    </div>
                                </v-card>
                            </v-list-item>
                            </v-list>
        
                            <v-divider></v-divider>
        
                            <v-card-actions class="justify-center pa-0">
                                <v-btn 
                                    class="elevation-0 text-center w-100"
                                >
                                نمایش همه
                                    <div class="expand-icon">
                                        <v-icon class="icon">mdi-chevron-down</v-icon>
                                    </div>
                                </v-btn> 
                            </v-card-actions>
                        </v-card>
                        </v-menu>
                    </div>
                    <div class="text-center elevation-0 me-4">
                        <v-menu
                        v-model="settings"
                        :close-on-content-click="false"
                        location="end"
                        >
                        <template v-slot:activator="{ props }">
                            <v-btn
                            v-bind="props"
                            rounded
                            elevation="0"
                            color="transparent"
                            max-width="45"
                            min-width="45"
                            max-height="45"
                            min-height="45"
        
                            >
                                <v-icon 
                                    size="30"
                                    color="grey-darken-1"
                                    icon="mdi-cog"
                                    class="icon elevation-0"
                                ></v-icon>
                            </v-btn>
                        </template>
        
                        <v-card min-width="300">
                            <v-list>
                            <v-list-item
                                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                                title="John Leider"
                                subtitle="Founder of Vuetify"
                            >
                                <template v-slot:append>
                                <v-btn
                                    variant="text"
                                    :class="fav ? 'text-red' : ''"
                                    icon="mdi-heart"
                                    @click="fav = !fav"
                                ></v-btn>
                                </template>
                            </v-list-item>
                            </v-list>
        
                            <v-divider></v-divider>
        
                            <v-list>
                            <v-list-item>
                                <v-switch
                                v-model="message"
                                color="purple"
                                label="Enable messages"
                                hide-details
                                ></v-switch>
                            </v-list-item>
        
                            <v-list-item>
                                <v-switch
                                v-model="hints"
                                color="purple"
                                label="Enable hints"
                                hide-details
                                ></v-switch>
                            </v-list-item>
                            </v-list>
        
                            <v-card-actions>
                            <v-spacer></v-spacer>
        
                            <v-btn
                                variant="text"
                                @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                color="primary"
                                variant="text"
                                @click="menu = false"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-menu>
                    </div>
                    <div 
                        class="navbar-left pe-8"
                    >
                        <a href="" class="account">
                            <v-img 
                                :width="40" 
                                :height="40" 
                                cover  
                                src="../../assets/img/profile.jpg" 
                                alt="" 
                                class="rounded-circle"
                            >
                            </v-img>
                        </a>
                    </div>
                </v-col>
            </v-row>
        </nav> -->
    </v-app>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import SearchBox from './SearchBox.vue'

const overlay = ref(false);

const notification = ref(false);
const settings = ref(false);

const props = defineProps({
    title: {
        type: String,
        required: true
    }
});

</script>

<style lang="scss">
</style>