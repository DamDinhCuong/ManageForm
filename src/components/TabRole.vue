<template>
    <div class="tab_role">
        <div class="row">
            <div class="col-lg-8">
                <div class="content-left">
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th rowspan="2" scope="col">STT</th>
                                <th rowspan="2" scope="col">Mã Vai Trò</th>
                                <th scope="col">Tên Vai Trò</th>
                                <th rowspan="2" scope="col">Sử Dụng</th>
                            </tr>
                            <tr>
                                <th rowspan="2" scope="col">
                                    <input v-model="filterrole" style="width: 80%;" type="text">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in filteredItems" @click="editItem(item.id)" :key="item.id">
                                <th scope="row">{{ index + 1 }}</th>
                                <td>{{ item.id }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.isUse ? 'Y' : 'N' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="content-right">
                    <form>
                        <div class="form-group mt-2 row">
                            <label for="roleId" class="col-sm-4 col-form-label">Role ID</label>
                            <div class="col-sm-8">
                                <input disabled v-model="role.id" type="text" class="form-control" id="roleId">
                            </div>
                        </div>
                        <div class="form-group mt-2 row">
                            <label for="roleName" class="col-sm-4 col-form-label">Role Name</label>
                            <div class="col-sm-8">
                                <input v-model="role.name" type="text" class="form-control" id="roleName">
                            </div>
                        </div>
                        <div class="form-group mt-2 row">
                            <label for="description" class="col-sm-4 col-form-label">Desciption</label>
                            <div class="col-sm-8">
                                <textarea v-model="role.description" id="description"></textarea>
                            </div>
                        </div>
                        <div class="form-check form-switch">
                            <input v-model="role.isUse" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                checked>
                            <label class="form-check-label" for="flexSwitchCheckChecked">{{ role.isUse ? 'Use' : 'unUse'
                            }}</label>
                        </div>
                        <div class="form-group mt-4 mb-3 row align-items-center justify-content-evenly">
                            <div class="col-sm-4">
                                <button @click.prevent.stop="btnClear()" type="submit"
                                    class="btn btn-primary btn-clear">Clear</button>
                            </div>
                            <div class="col-sm-4 wrapper">
                                <a class="btn-save" @click.prevent.stop="save()" href="#"><span>Save</span></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="row group_chart mt-2">
            <div class="col-6">
                <div style="border: 1px solid #ccc;">
                    <div class="hello" ref="roleColumnChart"></div>
                </div>
            </div>
            <div class="col-6">
                <div style="border: 1px solid #ccc;">
                    <div class="hello_2" ref="rolePieChart"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../js/tabRole.js"></script>
<style>
.tab_role {
    padding: 0 20px;
}

.content-right {
    border: 1px solid #ccc;
    padding: 10px 20px;
}


.btn-save {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #333;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
}

.btn-save span {
    position: relative;
    z-index: 2;
}

.btn-save:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #ff003b;
    transition: all .35s;
}

.btn-save:hover {
    color: #fff;
}

.btn-save:hover:after {
    width: 100%;
}

.btn-clear {
    width: 120px;
    height: 40px;
    border: none;
    outline: none;
    background: #c47857;
    transition: all 0.2s;
}

.btn-clear:hover {
    background: #74d1df;
}

.hello,
.hello_2 {
    width: 100%;
    height: 400px;
}
</style>