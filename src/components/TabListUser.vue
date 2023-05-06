<template>
    <div class="tab_user_list">
        <div class="action-form">
            <form>
                <div class="mb-2">
                    <label for="user_name" class="form-label">Tên khách hàng</label>
                    <input v-model="filteName" type="text" class="form-control" id="user_name" placeholder="Tên khách hàng">
                </div>
                <div class="row">
                    <div class="mb-2 col-3">
                        <label for="role_id" class="form-label">Role</label>
                        <input v-model="filterrole" type="text" placeholder="Role ID" class="form-control" id="role_id">
                    </div>
                    <div class="mb-2 col-5">
                        <label for="user_email" class="form-label">Email</label>
                        <input v-model="filteEmail" type="text" placeholder="Email" class="form-control" id="user_email">
                    </div>
                </div>
                <div class="list-btn d-flex align-items-center my-2">
                    <button type="submit" class="btn-save me-2"><span>Export</span></button>
                    <button type="submit" class="btn-clear">Clear</button>
                </div>
            </form>
        </div>
        <div class="list_user mt-3">
            <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th rowspan="2" scope="col">Mã</th>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Vai Trò</th>
                        <th rowspan="2" scope="col">Mail</th>
                        <th rowspan="2" scope="col">SĐT</th>
                        <th rowspan="2" scope="col">Ngày sinh</th>
                    </tr>
                    <tr>
                        <th rowspan="2" scope="col">
                            <input v-model="filterrole" style="width: 80%;" type="text">
                        </th>
                        <th rowspan="2" scope="col">
                            <input v-model="filterrole" style="width: 80%;" type="text">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item) in filteredItems" @click="editItem(item.id)" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.role }}</td>
                        <td>{{ item.mail }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.birthday }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script src="../js/tabListUser"></script>
<style scoped>
.tab_user_list {
    padding: 0 20px;
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

.action-form {
    border: 1px solid #ccc;
    padding: 20px;
}

.action-form form {
    width: 40%;
}
</style>