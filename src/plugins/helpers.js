import axios from 'axios'
// import { useAuthStore } from '@/stores/store';
import { provide } from 'vue';

const baseURL = 'http://localhost/wordpress/wp-json';

const helpers = {
        async makeRequest(method, path, data = {}) {
        method = method.toUpperCase();
        const url = `${baseURL}/${path}`;

        // const authStore = useAuthStore();
        // const token = authStore.accessToken;
        // console.log(token);

        const config = {
            method,
            url,
            data,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        };
        
        // if (token) {
        //     config.headers.Authorization = `bearer ${token}`
        // }

        try {
            const response = await axios(config);
            const { status, data } = response;
            return { status, data };
        } catch (error) {
                let status = null;
                let data = null;

                if (error.response) {
                    status = error.response.status;
                    data = error.response.data;
                } else if (error.request) {
                    status = null;
                    data = null;
                } else {
                    status = null;
                    data = null;
                }

                return { status, data };
            }
    }
};

export default {
    install: (app) => {
        provide('$helpers', helpers);
    }
}