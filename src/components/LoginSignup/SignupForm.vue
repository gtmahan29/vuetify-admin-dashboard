<template>
    <v-app class="signup">
      <v-sheet class="bg-white pa-12" rounded>
        <v-img src="../assets/logo.svg" width="80" class="mx-auto mb-8"></v-img>
        <h2 class="text-h5 font-weight-black font-family mb-8">ثبت‌ نام</h2>
        <v-form
          ref="form"
          @submit.prevent="signup()"
        >
          <v-text-field
            v-model="fullName"

            :rules="[required]"
            class="mb-4"
            clearable
            hide-details
            label="نام کامل"
          ></v-text-field>

          <v-text-field
            v-model="email"

            :rules="[required]"
            class="mb-4"
            clearable
            hide-details
            label="ایمیل"
          ></v-text-field>

          <v-text-field
            v-model="username"

            :rules="[required]"
            class="mb-4"
            clearable
            hide-details
            label="نام کاربری"
          ></v-text-field>

          <v-text-field
            v-model="password"
            class="mb-4"
            :rules="[required]"
            clearable
            hide-details
            label="رمز عبور"
          ></v-text-field>

          <v-text-field
            v-model="passwordConfirm"
            class="mb-4"
            :rules="[required]"
            clearable
            hide-details
            label="تأیید رمز عبور"
          ></v-text-field>

          <v-checkbox 
            density="compact"
            label="قوانین و شرایط را مطالعه نموده و تایید می‌کنم."
            hide-details
           ></v-checkbox>

          <v-btn
            :loading="loading"
            block
            size="large"
            type="submit"
            variant="elevated"
            class="signup-btn mt-1 w-100"
          >
            ثبت نام
          </v-btn>
        </v-form>
      </v-sheet>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/store.js'

const useStore = useUserStore();
const email = ref('');
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');
const fullName = ref('');
const $router = useRouter();

async function signup() {
  const newUser = {
    email: email.value,
    username: username.value,
    password: password.value,
    fullName: fullName.value,
  };

  useStore.signupUser(newUser);
  $router.push('/');
};
</script>

<style lang="scss">
@use '../../assets/scss/abstracts' as *;

.signup {
  .signup-btn {
    background-color: #800080;
    color: #fff;
    font-size: $fontsize-3;
  }
}

.v-btn__content {
  letter-spacing: 0 !important;
  line-height: 1;
}

.v-label {
  font-size: 15px;
}

.v-field-label--floating {
  font-size: 12px !important;
}

</style>