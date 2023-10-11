<template>
  <v-app class="login bg-white">
    <v-sheet class="bg-white pa-12" rounded>
      <v-img src="../assets/logo.svg" width="80" class="mx-auto mb-8"></v-img>
      <h2 class="text-h5 font-weight-black font-family mb-8">ورود به حساب کاربری</h2>
      <v-form
        ref="form"
        @submit.prevent="login()"
      >
        <v-text-field
          v-model="username"
          :readonly="loading"
          :rules="[required]"
          class="mb-4"
          clearable
          hide-details
          label="نام کاربری"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          hide-details
          label="رمز عبور"
          placeholder="رمز عبور را وارد کنید"
        ></v-text-field>
        <v-checkbox density="compact" label="مرا به خاطر بسپار"></v-checkbox>

        <div class="pass-recovery mb-4">
          <RouterLink to="/password/forgot">رمز عبور خود را فراموش کرده‌اید؟</RouterLink>
        </div>

        <v-btn
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          class="login-btn mb-4 w-100"
        >
          ورود
        </v-btn>
        <div class="to-signup">
          هنوز ثبت نام نکرده‌اید؟
          <RouterLink to="/register">ساخت حساب کاربری جدید</RouterLink>
        </div>
      </v-form>
    </v-sheet>
  </v-app>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/store'
import axiosInstance from '@/axios.js'

const username = ref('');
const password = ref('');
const loading = ref(false);

const $router = useRouter();

/**
 * وردپرس api از token تابع لاگین و درخواست
 * @returns {void}
 */
async function login() {
  const form = { username: username.value, password: password.value };
  try {
    const response = await axiosInstance.post('/jwt-auth/v1/token', form);
    const token = response.data.token;
    const userStore = useUserStore();

    // localStorage در ‌token ذخیره کردن
    localStorage.setItem('jwtToken', token);
    userStore.setToken(token);

    // انتقال به صفحه دشبورد بعد از موفقیت‌آمیز بودن لاگین
    $router.push('/');
  } catch (error) {
    if (error.response && error.response.data) {
      console.log('Error:', error.response.data.message);
    } else {
      console.log('An error occurred during login:', error);
    }
  };
}

const required = (v) => {
  return !!v || 'پر کردن کادر الزامی‌ است.';
}
</script>

<style lang="scss">
</style>