import { defineStore } from "pinia";
import axios from "axios";
import helpers from "@/plugins/helpers";
import PersianDate  from "persian-date";

// const $helpers = inject('$helpers');

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: localStorage.getItem('jwtToken'),
        user: {},
    }),
    actions: {
        async login(userInfo) {
            try {
                const response = await helpers.makeRequest('POST', '/jwt-auth/v1/token', userInfo)
                console.log(response);

                const token = response.data.token;
                console.log(`token is ${token}`);


                if (token) {
                    localStorage.setItem('jwtToken', token);

                    this.setToken(token);
                    this.setUser(userInfo)

                    return true;
                } else {
                    throw new Error ('نام کاربری یا رمز عبور اشتباه است!')
                }
            } catch (error) {
                throw new Error ('ورود ناموفق')
            }
        },
        logout() {
            localStorage.removeItem('jwtToken');


            this.accessToken = null;
            this.user = {};
        },
        setUser(user) {
            this.user = user;
        },
        setToken(accessToken) {
            this.accessToken = accessToken;
        },
    },
    getters: {
        isAuthenticated: (state) => {
            return !!state.accessToken;
        },
    }
})

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: []
    }),
    actions: {
        async fetchPosts() {
            // function convertToPersianDate(date) {
            //     return new persianDate(date)
            // }
            const token = localStorage.getItem('jwtToken')

            const config = {
                header: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await helpers.makeRequest('GET', '/wp/v2/posts', config);

            console.log("response is: ", response);

            const posts = response.data;
            console.log('Posts are: ', this.posts);
            this.setPosts(posts); 
        },
        setPosts(posts) {
            this.posts = posts.map((post) => ({
                id: post.id,
                title:post.title.rendered,
                content: post.content.rendered,
                author: post.author,
                category: post.categories,
                tag: post.tags,
                date: post.date,
            }))
        }

    }
})