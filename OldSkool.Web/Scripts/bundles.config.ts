declare let requirejs: any;

requirejs.config({
    baseUrl: "/js/",
    paths: {
        "vue": "https://unpkg.com/vue/dist/vue",
        "axios": "https://unpkg.com/axios/dist/axios.min",
        "vee-validate": "https://cdn.jsdelivr.net/vee-validate/2.0.0-rc.3/vee-validate"
    }
});