<template>
    <div class="tab_user">
        <div class="row">
            <div class="col-lg-6">
                <div class="row list_user">
                    <div @click.prevent.stop="editItem(item.id, item.role)" v-for="(item) in list_user" :key="item.id" class="col-4">
                        <div class="item_user user">
                            <div class="user_avatar">
                                <img :src="item.avatar" alt="">
                            </div>
                            <div class="user_info">
                                <p class="user_info_name">{{ item.name }}</p>
                                <p class="user_info_role">{{ item.role }}</p>
                                <p class="user_info_age">{{ item.birthday }}</p>
                                <p class="user_info_status">{{ item.isUse }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6" style="margin-top: 10px;">
                <div class="row">
                    <div class="col-8">
                        <div class="content-right">
                            <form>
                                <div class="form-group row mt-2">
                                    <label for="user_name" class="col-sm-4 col-form-label">First Name</label>
                                    <div class="col-sm-8">
                                        <input v-model="user.name" type="text" class="form-control" id="user_name">
                                    </div>
                                </div>
                                <div class="form-group row mt-2">
                                    <label for="user_mail" class="col-sm-4 col-form-label">Mail</label>
                                    <div class="col-sm-8">
                                        <input v-model="user.mail" type="text" class="form-control" id="user_mail">
                                    </div>
                                </div>
                                <div class="form-group row mt-2">
                                    <label for="user_address" class="col-sm-4 col-form-label">Address</label>
                                    <div class="col-sm-8">
                                        <input v-model="user.address" type="text" class="form-control" id="user_address">
                                    </div>
                                </div>
                                <div class="form-group row mt-2">
                                    <label for="user_phone" class="col-sm-4 col-form-label">Phone</label>
                                    <div class="col-sm-8">
                                        <input v-model="user.phone" type="text" class="form-control" id="user_phone">
                                    </div>
                                </div>
                                <div class="form-group row mt-2">
                                    <label for="user_birtday" class="col-sm-4 col-form-label">Birtday</label>
                                    <div class="col-sm-8">
                                        <input v-model="user.birthday" type="date" class="form-control" id="user_birtday">
                                    </div>
                                </div>
                                <div class="form-group row mt-2">
                                    <label for="user_mail" class="col-sm-4 col-form-label">Role</label>
                                    <div class="col-sm-8 d-flex align-items-center">
                                        <select class="me-2" @change="showRoleName(user.role)" v-model="user.role"
                                            style="width: 40%;" name="" id="">
                                            <option v-for="(item) in list_role" :key="item.id" :value="item.id">{{ item.id
                                            }}</option>
                                        </select>
                                        <input v-model="role_name" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="form-check form-switch">
                                    <input v-model="user.isUse" class="form-check-input" type="checkbox"
                                        id="flexSwitchCheckChecked" checked>
                                    <label class="form-check-label" for="flexSwitchCheckChecked">{{ user.isUse ? 'Use'
                                        : 'unUse' }}</label>
                                </div>
                                <div class="form-group row mt-2">
                                    <div class="col-sm-4">
                                        <button @click.prevent.stop="removeUser(user.id)" type="submit"
                                            class="btn btn-primary">Delete</button>
                                    </div>
                                    <div class="col-sm-4">
                                        <button @click.prevent.stop="btnClear()" type="submit"
                                            class="btn btn-primary">Clear</button>
                                    </div>
                                    <div class="col-sm-4">
                                        <button @click.prevent.stop="save()" type="submit"
                                            class="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-4">
                        <img style="max-width: 100%;" :src="user.avatar" alt="" @click="selectImage" class="img_avatar">
                        <input class="file_input" type="file" ref="fileInput" @input="pickFile()">
                    </div>
                </div>
                <div class="group_chart mt-2">
                    <div style="border: 1px solid #ccc;">
                        <div class="hello_2" ref="rolePieChart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../js/tabUser"></script>
<style scoped>
.tab_user {
    padding: 0 20px;
}

.user_avatar img {
    max-width: 100%;
    width: 140px;
    height: 140px;
    object-fit: cover;
}

.list_user {
    max-height: 700px;
    overflow: auto;
}

.item_user {
    border: 1px solid #ccc;
    padding: 18px;
    margin: 10px 0;
}

.file_input {
    width: 100%;
    overflow: hidden;
    margin: 10px auto;
}

.hello_2 {
    width: 100%;
    height: 400px;
}
</style>