import axios from "axios";
import { defineStore } from "pinia";
import PersianDate from 'persian-date';

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        token: null,
    }),
    actions: {
        async login() {
            // TODO: Implement the login action
        },
        async signupUser(newUser) {
            try {
                // api از token درخواست
                const tokenResponse = await axios.post('http://localhost/wordpress/wp-json/jwt-auth/v1/token', {
                'username':'gtmahan', 
                'password': '4118131',
                });

                // localStorage در یک متغیر و بعد در token ذخیره کردن
                const token = tokenResponse.data.token;
                this.setToken(token);
                localStorage.setItem('jwtToken', token);
                
                // token با api درخواست به header تنظیم
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                // newUser برای ثبت کاربر api به post درخواست
                // در کامپوننت مربوطه و برای ورودی‌های مربوطه تعریف می‌شود newUser کاربر
                const signupResponse = await axios.post('http://localhost/wordpress/wp-json/wp/v2/users', newUser, config);
                console.log('User registered:', signupResponse.data);

                
            } catch (error) { 
                if (error.response && error.response.data) {
                    console.log('Error', error.response.data.message);
                } else {
                    console.log('An error occured during signup:', error);
                }
            }
        },
        setToken(token) {
            this.token = token;
        },
        getToken() {
            return this.token;
        },
        setUsers(users) {
            this.users = users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.user_email,
                username: user.slug,
                role: user.roles[0],
            }));
        },
    },
});

export const usePostStore = defineStore('post', {
    state: () => ({
      posts: [],
    }),
    actions: {
      setPosts(posts) {
        function convertToPersianDate(date) {
            return new PersianDate(date).format('YYYY/MM/DD');
        }

        this.posts = posts.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          content: post.content.rendered,
          author: post.author,
          category: post.categories,
          tag: post.tags,
          date: convertToPersianDate(post.date)
        }));
      },
    },
});

export const useCategoryStore = defineStore('category', {
    state: () => ({
      categories: [],
    }),
    actions: {
      setCategory(categories) {
        this.categories = categories.map((category) => ({
          id: category.id,
          name: category.name,
          description: category.description,
          slug: category.slug,
          count: category.count,
        }));
      },
    },
});