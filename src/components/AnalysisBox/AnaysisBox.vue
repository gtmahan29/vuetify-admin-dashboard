<template>
    <v-app class="analysis-box component-shadow rounded-lg">
        <v-card
            width="100%"
            class="d-flex flex-column mx-auto">
            <v-row class="card-top d-flex justify-space-between ma-0 mb-2">
                <v-col cols="5" class="d-flex flex-column ">
                    <v-card-item class="px-0">
                        <template v-slot:title>
                            <div class="text-subtitle-1 font-weight-black font-family">{{ title }}</div>
                        </template>
                        <template v-slot:prepend>
                            <font-awesome-icon :icon="icon" size="lg"/>
                        </template>
                    </v-card-item>
                    <v-card-text class="px-0">
                        <RouterLink :to="path">
                            <div class="total text-purple-darken-4 font-weight-black">
                                {{ stats.value }}
                            </div>
                        </RouterLink>
                    </v-card-text>
                    <div class="compare" :class="[statsClass(stats.comparison)]">
                        <span dir="ltr" class="ms-1">
                            {{ stats.comparison }}%
                        </span>
                        در مقایسه با ماه قبل
                    </div>
                </v-col>
                <v-col cols="7" class="d-flex align-center">
                    <AnalysisChart />
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-btn 
                class="elevation-0"
            >
                نمایش
                <div class="expand-icon">
                    <v-icon class="icon">mdi-chevron-down</v-icon>
                </div>
            </v-btn> 
        </v-card>
    </v-app>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { defineProps, computed } from 'vue'
import AnalysisChart from './AnalysisChart.vue'

const props = defineProps({
    path: {
        type: String,
        required: true,
    },
    title: {
        required: true,
    },
    stats: {
        required: true,
    },
    icon: {
        required: true,
    },
});

// تعیین رنگ درصد تغییرات
const statsClass = computed(() => {
    return (value) => {
        return value >= 0 ? 'green' : 'red'
    }
});

</script>

<style lang="scss">
</style>