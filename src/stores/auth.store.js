import { defineStore } from "pinia";

// import helpers from "@/plugins/helpers";
import axios from "axios";

// const $helpers = inject('$helpers');

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: localStorage.getItem('jwtToken'),
        user: null,
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await axios.post('http://localhost/wordpress/wp-json/jwt-auth/v1/token', { username, password });

                const token = response.data.token;
                console.log(`token is ${token}`);


                if (token) {
                    localStorage.setItem('jwtToken', token);

                    await this.fetchUserData();

                    return true;
                } else {
                    throw new Error ('نام کاربری یا رمز عبور اشتباه است!')
                }
            } catch (error) {
                throw new Error ('ورود ناموفق')
            }
        },
        async fetchUserData() {
            try {
                const response = await axios.get('http://localhost/wordpress/wp-json/wp/v2/users/me',
                {
                    headers: {
                        Authorization: `Bearer ${this.accessToken}`
                    }
                });

                this.setUser(response.data);
            } catch (error) {
                console.log('ناموفق در دریافت اطلاعات کاربری', error);
            }
        },
        logout() {
            localStorage.removeItem('jwtToken');

            this.accessToken = null;
            this.user = null;
        },
        setUser(user) {
            this.user = user;
        },
    },
    getters: {
        isAuthenticated() {
            return this.accessToken !== null;
        },
    }
})