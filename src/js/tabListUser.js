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
                    avatar: '/img/avatar_2.e0b84a91.png',
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
                    avatar: '/img/icon-256x256.08eddbfc.png',
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
                    avatar: '/img/avatar_2.e0b84a91.png',
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
                    avatar: '/img/avatar_1.f34b631c.png',
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
                    avatar: '/img/avatar_1.f34b631c.png',
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
                    avatar: '/img/avatar_2.e0b84a91.png',
                    phone: '0987654321'
                },
            ],
            filterrole: '',
            filteName: '',
            filteEmail: '',
        }
    },
    methods: {
        btnClear() {
            // let vm = this;
            
        },
    },
    computed: {
        filteredItems() {
            return this.list_user.filter((item) => {
                if(this.filterrole.toLowerCase() == '' && this.filteName.toLowerCase() == '' && this.filteEmail.toLowerCase() == '') {
                    return this.list_user;
                } else if(this.filteName.toLowerCase()) {
                    return item.name.toLowerCase().includes(this.filteName.toLowerCase());
                } else if(this.filteEmail.toLowerCase()) {
                    return item.mail.toLowerCase().includes(this.filteEmail.toLowerCase());
                } else if(this.filterrole.toLowerCase()) {
                    return item.role.toLowerCase().includes(this.filterrole.toLowerCase());
                }
            });
        }
    }


}