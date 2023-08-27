<template>
  <v-app class="login-signup d-flex align-center justify-center h-screen">
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
.login-signup {
  .v-application__wrap {
    min-height: unset;
    align-items: center;
  }
}

.container {
  box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}

.forms-container {
  .v-tab {
    letter-spacing: 0;
  }

  .v-card {
    border-radius: 0;
    box-shadow: none;
  }

  .v-slide-group-item--active {
    border: none;
  }
  
  .v-tab--selected {
    background-color: rgba($color: #e4e4e4, $alpha: 1);
    color: #000;
    box-shadow: inset 0 0 8px 0 rgba($color: #000, $alpha: 0.1);
  }
}

.v-window__container {
  height: 700px !important;
}

.login-background {
  background-color: #25c16e;
  img {
    width: 75%;
    margin-bottom: 250px;
  }
}
</style>
