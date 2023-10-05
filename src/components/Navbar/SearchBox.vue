<template>
    <v-app class="search-box component-shadow rounded-lg">
        <v-card
            class="mr-auto elevation-0"
            width="400"
            height="600"
        >
            <v-card-title class="d-flex justify-space-between align-center bg-primary pa-0">
                <span class="text-subtitle-1 font-family font-weight-black pa-4">
                    جستجو در سایت
                </span>
                <v-btn 
                    @click="overlay = false"
                    width="45"
                    class="d-flex justify-center align-center bg-transparent elevation-0"
                >
                    <v-icon 
                        icon="mdi-close"
                        size="x-large"
                    ></v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="px-0">
                <v-text-field
                    density="comfortable"
                    variant="solo-filled"
                    label="جستجو..."
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    class="search-bar w-100 elevation-0">
                </v-text-field>
                <div class="results-wrapper">
                    <v-list >
                       
                    </v-list>
                    <div class="results-preview d-flex flex-column align-center justify-center position-absolute">
                        <v-icon
                            icon="mdi-text-box-search-outline"
                            size="150"
                            color="grey-lighten-1"
                        ></v-icon>
                        <span class="text-grey-lighten-1">نتایج جستجوی شما</span>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script setup>

</script>

<style lang="scss">
@use '../../assets/scss/abstracts' as *;

.search-box {
    .v-application__wrap {
        min-height: unset;
    }

    .results-wrapper {
        .results-preview {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
    
            span {
                font-size: $fontsize-3;
                font-weight: 600;
            }
        }
    }

}
</style>