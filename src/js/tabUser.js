import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5percent from "@amcharts/amcharts5/percent";
export default {
    data() {
        return {
            list_user: [
                {
                    id: '1',
                    name: 'Bùi Quốc Đạt',
                    role: '1',
                    mail: 'datbq@gmail.com',
                    address: 'Dong Nai',
                    birthday: '2001-03-09',
                    isUse: true,
                    avatar: 'https://w7.pngwing.com/pngs/58/128/png-transparent-kakashi-hatake-naruto-logo-drawing-anime-naruto-mammal-chibi-vertebrate-thumbnail.png',
                    phone: '0987654321'
                },
                {
                    id: '2',
                    name: 'Hưng Lê',
                    role: '2',
                    mail: 'hunglc@gmail.com',
                    address: 'Vung Tau',
                    birthday: '1998-10-10',
                    isUse: false,
                    avatar: 'https://i.pinimg.com/originals/3b/33/3f/3b333f80caf93e362d2b3db1aabd0dcb.png',
                    phone: '0987654321'
                },
                {
                    id: '3',
                    name: 'Lê Phước Lai',
                    role: '5',
                    mail: 'phuocll@gmail.com',
                    address: 'Da Nang',
                    birthday: '2000-12-22',
                    isUse: true,
                    avatar: 'https://symbols.vn/wp-content/uploads/2021/12/Xem-them-hinh-dai-dien-avt-chibi-cho-con-trai.png',
                    phone: '0987654321'
                },
                {
                    id: '4',
                    name: 'Thanh Nhã',
                    role: '3',
                    mail: 'nhalt@gmail.com',
                    address: 'Ha Noi',
                    birthday: '2001-06-16',
                    isUse: true,
                    avatar: 'https://img6.thuthuatphanmem.vn/uploads/2022/10/24/hinh-anh-anime-chibi-boy-anime_032540872.jpg',
                    phone: '0987654321'
                },
                {
                    id: '5',
                    name: 'Nguyễn Phạm Ngọc Anh',
                    role: '1',
                    mail: 'anhnpn@gmail.com',
                    address: 'Da Lat',
                    birthday: '2002-04-18',
                    isUse: true,
                    avatar: 'https://i.pinimg.com/474x/f3/7c/1b/f37c1bd3c48afd50c39890bf4ac127d6--kawaii-chibi-kawaii-anime-chibi.jpg',
                    phone: '0987654321'
                },
                {
                    id: '6',
                    name: 'Nguyễn Trường Vinh',
                    role: '2',
                    mail: 'vinhnt@gmail.com',
                    address: 'Kien Giang',
                    birthday: '2001-02-28',
                    isUse: true,
                    avatar: 'https://lovablemessages.com/wp-content/uploads/2022/09/Toan-bo-36-anh-anime-nu-chibi-moi-cap-nhat.jpeg',
                    phone: '0987654321'
                },
            ],
            list_role: [
                {
                    id: '1',
                    role_id: '1',
                    name: 'Admin',
                    description: 'Admin',
                    isUse: true,
                },
                {
                    id: '2',
                    role_id: '2',
                    name: 'Manager',
                    description: 'Manager',
                    isUse: false,
                },
                {
                    id: '3',
                    role_id: '3',
                    name: 'User',
                    description: 'User',
                    isUse: true,
                },
                {
                    id: '4',
                    role_id: '4',
                    name: 'Boss',
                    description: 'Boss',
                    isUse: true,
                },
                {
                    id: '5',
                    role_id: '5',
                    name: 'AnhDev',
                    description: 'Anh Dev',
                    isUse: true,
                },
                {
                    id: '6',
                    role_id: '6',
                    name: 'Tester',
                    description: 'Tester',
                    isUse: false,
                },
            ],
            user: {
                id: '',
                name: '',
                mail: '',
                address: '',
                phone: '',
                birthday: '',
                role: '',
                isUse: false,
                avatar: ''
            },
            role_name: '',
            chart: null,
        }
    },
    mounted() {
        let vm = this;
        vm.rolePieChart();
    },
    beforeDestroy() {
        if (this.root) {
            this.root.dispose();
        }
    },
    methods: {
        showRoleName(id) {
            let vm = this;
            vm.list_role.forEach(function (role) {
                if (role.id == id) {
                    vm.role_name = role.name;
                }
            })
        },
        save() {
            let vm = this;
            if (vm.user.id) {
                vm.list_user.forEach(function (value) {
                    if (value.id == vm.user.id) {
                        value = vm.user;
                        vm.$notify({
                            group: 'foo',
                            title: 'Cập nhập thành công!',
                            text: 'Đã cập nhập user!',
                            type: 'success',
                            duration: 1000,
                            speed: 1000,
                        });
                    }
                })
            } else {
                vm.user.id = Math.floor(Math.random() * 10000);
                vm.list_user.push(vm.user);
                vm.$notify({
                    group: 'foo',
                    title: 'Tạo mới thành công!',
                    text: 'User đã được thêm vào table!',
                    type: 'success',
                    duration: 1000,
                    speed: 1000,
                });
            }
            vm.btnClear();
        },
        editItem(id, role_id) {
            let vm = this;
            vm.list_user.forEach(function (value) {
                if (value.id == id) {
                    vm.user = value;
                }
            })
            vm.showRoleName(role_id);
        },
        removeUser(id) {
            let vm = this;
            vm.list_user.forEach(function (value, index) {
                if (value.id == id) {
                    vm.list_user.splice(index, 1);
                    vm.$notify({
                        group: 'foo',
                        title: 'Xoá user thành công!',
                        text: 'User đã được xoá!',
                        type: 'success',
                        duration: 1000,
                        speed: 1000,
                    });
                }
            })
            vm.btnClear();
        },
        btnClear() {
            let vm = this;
            vm.user = {
                id: '',
                name: '',
                mail: '',
                address: '',
                phone: '',
                birthday: '',
                role: '',
                isUse: false,
                avatar: ''
            };
            vm.role_name = '';
        },

        selectImage() {
            let vm = this;
            vm.$refs.fileInput.click();
        },

        pickFile() {
            let vm = this,
                input = vm.$refs.fileInput,
                file = input.files;
            if (file && file[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    vm.user.avatar = e.target.result;
                }
                reader.readAsDataURL(file[0]);
            }
        },
        rolePieChart() {
            let root = am5.Root.new(this.$refs.rolePieChart);

            root.setThemes([am5themes_Animated.new(root)]);

            var chart = root.container.children.push(
                am5percent.PieChart.new(root, {
                    endAngle: 270,
                    radius: am5.percent(70),
                })
            );

            var series = chart.series.push(
                am5percent.PieSeries.new(root, {
                    valueField: "value",
                    categoryField: "category",
                    endAngle: 270,
                })
            );
            series.slices.template.set("tooltipText", "{category}: {value}");
            series.labels.template.set("text", "{category}: {value}");
            series.states.create("hidden", {
                endAngle: -90
            });

            series.data.setAll([
                {
                    category: "Jul",
                    value: 60
                },
                {
                    category: "Jan",
                    value: 20
                },
                {
                    category: "Feb",
                    value: 30
                },
                {
                    category: "Mar",
                    value: 50
                },
                {
                    category: "Apr",
                    value: 40
                },
                {
                    category: "May",
                    value: 70
                },
                {
                    category: "Jun",
                    value: 80
                },
            ]);

            series.appear(1000, 100);
        },
    }
}