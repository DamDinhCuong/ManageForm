<template>
    <div id="wrapper" class="toggled">
        <!-- Sidebar -->
        <side-bar @changeTab="changeTab"></side-bar>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div v-if="isRole" class="container">
                <tab-role></tab-role>
            </div>
            <div v-if="isUserEntry" class="tab_user_entry">
                <tab-user></tab-user>
            </div>
            <div v-if="isUserList" class="tab_user_list">
                <tab-user-list></tab-user-list>
            </div>

        </div>
    </div>
    <!-- /#page-content-wrapper -->
</template>

<script>
import SideBar from "./SideBar.vue";
import TabRole from "./TabRole.vue";
import TabUser from "./TabUser.vue";
import TabUserList from './TabListUser.vue';
export default {
    components: {
        SideBar,
        TabRole,
        TabUser,
        TabUserList,
    },
    data() {
        return {
            isRole: true,
            isUserEntry: false,
            isUserList: false,

        }
    },
    methods: {
        changeTab(tab) {
            let vm = this;
            switch (tab) {
                case '1':
                    vm.isRole = true;
                    vm.isUserEntry = false;
                    vm.isUserList = false;
                    break;
                case '2':
                    vm.isRole = false;
                    vm.isUserEntry = true;
                    vm.isUserList = false;
                    break;
                case '3':
                    vm.isRole = false;
                    vm.isUserEntry = false;
                    vm.isUserList = true;
                    break;
                default:
            }
            vm.$forceUpdate();
        }
    },
}

</script>

<style scoped>
body {
     position: relative;
     overflow-x: hidden;
     background-color: #CFD8DC;
 }

 body,
 html {
     height: 100%;
 }

 th {
     vertical-align: middle;
     text-align: center;
 }

 body {
     position: relative;
     overflow-x: hidden;
     background-color: #CFD8DC;
 }

 body,
 html {
     height: 100%;
 }

 th {
     vertical-align: middle;
     text-align: center;
 }

 .nav .open>a,
 .nav .open>a:hover,
 .nav .open>a:focus {
     background-color: transparent;
 }

 .container {
     margin-left: unset;
     margin-right: unset;
 }


 #wrapper {
     padding-left: 0;
     -webkit-transition: all 0.5s ease;
     -moz-transition: all 0.5s ease;
     -o-transition: all 0.5s ease;
     transition: all 0.5s ease;
 }

 #wrapper.toggled {
     padding-left: 220px;
 }

 #sidebar-wrapper {
     z-index: 1000;
     left: 220px;
     width: 0;
     height: 100%;
     margin-left: -220px;
     overflow-y: auto;
     overflow-x: hidden;
     background: #1a1a1a;
     -webkit-transition: all 0.5s ease;
     -moz-transition: all 0.5s ease;
     -o-transition: all 0.5s ease;
     transition: all 0.5s ease;
 }

 #sidebar-wrapper::-webkit-scrollbar {
     display: none;
 }

 #wrapper.toggled #sidebar-wrapper {
     width: 220px;
 }

 #page-content-wrapper {
     width: 100%;
     padding: 40px 40px 0 0px;
 }

 /*-------------------------------*/
 /*     Sidebar nav styles        */
 /*-------------------------------*/
 .navbar {
     padding: 0;
 }

 .sidebar-nav {
     position: absolute;
     top: 0;
     width: 220px;
     margin: 0;
     padding: 0;
     list-style: none;
 }

 .sidebar-nav li {
     position: relative;
     line-height: 20px;
     display: inline-block;
     width: 100%;
 }

 .sidebar-nav li:before {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     z-index: -1;
     height: 100%;
     width: 3px;
     background-color: #1c1c1c;
     -webkit-transition: width .2s ease-in;
     -moz-transition: width .2s ease-in;
     -ms-transition: width .2s ease-in;
     transition: width .2s ease-in;

 }

 .sidebar-nav li:first-child a {
     color: #fff;
     background-color: #1a1a1a;
 }

 .sidebar-nav li:nth-child(5n+1):before {
     background-color: #ec1b5a;
 }

 .sidebar-nav li:nth-child(5n+2):before {
     background-color: #79aefe;
 }

 .sidebar-nav li:nth-child(5n+3):before {
     background-color: #314190;
 }

 .sidebar-nav li:nth-child(5n+4):before {
     background-color: #279636;
 }

 .sidebar-nav li:nth-child(5n+5):before {
     background-color: #7d5d81;
 }

 .sidebar-nav li:hover:before,
 .sidebar-nav li.open:hover:before {
     width: 100%;
     -webkit-transition: width .2s ease-in;
     -moz-transition: width .2s ease-in;
     -ms-transition: width .2s ease-in;
     transition: width .2s ease-in;

 }

 .sidebar-nav li a {
     display: block;
     color: #ddd;
     text-decoration: none;
     padding: 10px 15px 10px 30px;
 }

 .sidebar-nav li a:hover,
 .sidebar-nav li a:active,
 .sidebar-nav li a:focus,
 .sidebar-nav li.open a:hover,
 .sidebar-nav li.open a:active,
 .sidebar-nav li.open a:focus {
     color: #fff;
     text-decoration: none;
     background-color: transparent;
 }

 .sidebar-header {
     text-align: center;
     font-size: 20px;
     position: relative;
     width: 100%;
     display: inline-block;
 }

 .sidebar-brand {
     height: 65px;
     position: relative;
     background: #212531;
     background: linear-gradient(to right bottom, #2f3441 50%, #212531 50%);
     padding-top: 1em;
 }

 .sidebar-brand a {
     color: #ddd;
 }

 .sidebar-brand a:hover {
     color: #fff;
     text-decoration: none;
 }

 .dropdown-header {
     text-align: center;
     font-size: 1em;
     color: #ddd;
     background: #212531;
     background: linear-gradient(to right bottom, #2f3441 50%, #212531 50%);
 }

 .sidebar-nav .dropdown-menu {
     position: relative;
     width: 100%;
     padding: 0;
     margin: 0;
     border-radius: 0;
     border: none;
     background-color: #222;
     box-shadow: none;
 }

 .dropdown-menu.show {
     top: 0;
 }

 /* CSS */
 .content-right {
     border: 1px solid #cccccc;
     background-color: #ffffff;
     padding: 20px;
     border-radius: 5px;
 }
</style>