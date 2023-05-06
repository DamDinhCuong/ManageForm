import router from "@/main.js";

export default {
    router,
    data() {
        return {
            email: "anhdev",
            pass: "123456",
            user: {
                email: "",
                password: "",
            },
            isLogin: false,
        };
    },
    mounted() {
    },
    methods: {
        loginForm() {
            let vm = this;
            if (vm.user.email == vm.email && vm.user.password == vm.pass) {
                vm.$notify({
                    group: 'foo',
                    title: 'Đăng nhập thành công',
                    text: `Chào mừng ${vm.email} quay trở lại!`,
                    type: 'success',
                    duration: 1000,
                    speed: 1000,
                });
                setTimeout(() => {
                    vm.isLogin = true;
                    this.$router.push("/data-form");
                }, 1000);
            } else {
                vm.$notify({
                    group: 'foo',
                    title: 'Đăng nhập thất bại',
                    text: 'Email hoặc mật khẩu không chính xác!',
                    type: 'error',
                    duration: 1000,
                    speed: 1000,
                });
                vm.isLogin = false;
            }
            vm.$forceUpdate();
        },
    },
};