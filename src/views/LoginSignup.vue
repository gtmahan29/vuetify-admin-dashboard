<template>
  <v-app class="login-signup d-flex align-center justify-center mx-auto">
    <div class="container d-flex w-50 bg-white">
      <div class="forms-container w-50">
        <v-card>
          <v-tabs
            v-model="tab"
            bg-color="white"
          >
            <v-tab 
            value="one"
            rounded-0
             class="w-50">ورود به پنل</v-tab>
            <v-tab value="two" class="w-50">ثبت نام</v-tab>
          </v-tabs>
  
          <v-card-text class="bg-white">
            <v-window v-model="tab">
              <!-- فرم ورود -->
              <v-window-item value="one">
                <LoginForm />
              </v-window-item>
              <!-- فرم ثبت نام -->
              <v-window-item value="two">
                <SignupForm />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </div>
      <div class="login-background d-flex align-center justify-center w-50">
        <img src="../assets/img/vecteezy_business-infographic-analysis-marketing-data-analysis_22608528_487.png" alt="">
      </div>
    </div>
  </v-app>
</template>
  
<script setup>
import LoginForm from '@/components/LoginSignup/LoginForm.vue'
import SignupForm from '@/components/LoginSignup/SignupForm.vue'
import { ref } from 'vue'

const tab = ref(null);

</script>

<style lang="scss">
</style>
