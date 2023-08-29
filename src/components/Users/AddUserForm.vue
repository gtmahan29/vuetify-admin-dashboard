<template>
    <v-app class="user-form-container w-75 bg-white elevation-1">
        <div class="section-header bg-white d-flex justify-space-between align-center elevation-1">
            <div class="text-subtitle-1 font-family font-weight-black pa-4">افزودن کاربر جدید</div>
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
        <div class="add-user-form d-flex justify-center">
            <form 
                ref="form"
                @submit.prevent="signup()"
                class="d-flex flex-column w-50 pa-8">
                <v-text-field
                    v-model="name"
                    :counter="10"
                    label="نام کامل"
                    variant="outlined"
                    class="text-grey-darken-3"
                >
                    <template v-slot:prepend-inner>
                        <font-awesome-icon icon="fa-solid fa-user" size="lg" class="text-grey-darken-1 me-1"/>
                    </template>
                </v-text-field>

                <v-text-field
                    v-model="username"
                    :counter="7"
                    label="نام کاربری"
                    variant="outlined"
                    class="text-grey-darken-3"
                >
                    <template v-slot:prepend-inner>
                        <font-awesome-icon icon="fa-solid fa-user" size="lg" class="text-grey-darken-1 me-1"/>
                    </template>
                </v-text-field>
                
                <v-text-field
                    v-model="email"
                    label="ایمیل"
                    variant="outlined"
                    class="text-grey-darken-3"
                >
                    <template v-slot:prepend-inner>
                        <font-awesome-icon icon="fa-solid fa-envelope" size="lg" class="text-grey-darken-1 me-1"/>
                    </template>
                </v-text-field>
                
    
                <v-text-field
                    v-model="password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    label="رمز عبور"
                    variant="outlined"
                    @click:append-inner="visible = !visible"
                    class="text-grey-darken-3"
                >
                    <template v-slot:prepend-inner>
                        <font-awesome-icon icon="fa-solid fa-lock" size="lg" class="text-grey-darken-1 me-1"/>
                    </template>
                </v-text-field>
    
                <v-text-field
                    v-model="passwordConfirm"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    label="تأیید رمز عبور"
                    variant="outlined"
                    @click:append-inner="visible = !visible"
                    class="text-grey-darken-3"
                >
                    <template v-slot:prepend-inner>
                        <font-awesome-icon icon="fa-solid fa-lock" size="lg" class="text-grey-darken-1 me-1"/>
                    </template>
                </v-text-field>
    
                <v-checkbox
                v-model="checkbox.value.value"
                value="1"
                label="قوانین و شرایط را مطالعه نموده و تایید می‌کنم."
                type="checkbox"
                hide-details=""
                class="terms-confirm text-subtitle-1"
                ></v-checkbox>
    
                <v-btn
                type="submit"
                color="#25c16e"
                size="large"
                class="add-user-btn align-self-center text-white font-weight-bold w-100"
                >
                افزودن کاربر جدید
                </v-btn>
            </form>
        </div>
    </v-app>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/store.js'

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


const useStore = useUserStore();
const email = ref('');
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');
const name = ref('');
const $router = useRouter();

/**
 * تابع عمل ثبت نام
 * @returns {void}
 */
async function signup() {
  const newUser = {
    name: name.value,
    email: email.value,
    username: username.value,
    password: password.value,
  };

  useStore.signupUser(newUser);
  $router.push('/users');
}

const { handleSubmit } = useForm({
validationSchema: {
    checkbox (value) {
    if (value === '1') return true

    return 'Must be checked.'
    },
},
});

const checkbox = useField('checkbox');

const visible = ref(false);
</script>

<style lang="scss">
@use '../../assets/scss/abstracts' as *;

.section-header {
    z-index: 2;
}

.terms-confirm {
    .v-label {
        font-size: $fontsize-1 !important;
    }
}

.add-user-btn {
    font-size: $fontsize-3;
}
</style>