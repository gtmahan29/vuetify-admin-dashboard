<template>
    <v-app class="bg-grey-lighten-5">
        <nav class="navbar d-flex align-center py-5 px-8 bg-white mb-4">
            <div class="text-h5 welcome">
                {{ title }}
            </div>
            <div v-if="isDashboardRoute" class="text-center ms-auto me-4">
                <v-btn
                rounded
                elevation="0"
                color="transparent"
                max-width="40"
                min-width="40"
                max-height="40"
                min-height="40"
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
            <div 
                class="navbar-left"
                :class="!isDashboardRoute ? 'ms-auto' : undefined"
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
        </nav>
    </v-app>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import SearchBox from './SearchBox.vue'

const overlay = ref(false);

const props = defineProps({
    title: {
        type: String,
        required: true
    }
});

const isDashboardRoute = computed(() => {
  const route = useRoute();
  return route.path === '/dashboard';
})

</script>

<style lang="scss">
.navbar {
    border-bottom: 1px solid rgba($color: #000, $alpha: 0.1);
    .welcome {
        font-family: 'Vazir' !important;
        font-weight: 900;
    }
}
</style>