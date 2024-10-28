<template>
    <div class="card">
        <div class="card-header border-bottom text-center d-flex align-items-center justify-content-between">
            <div class="float-start mt-2">
                Đơn nghỉ phép của tôi
                <i class="fa-solid fa-gear"></i>
            </div>
            <div class="search_input d-flex justify-content-center">
                <div class="search input-group">
                    <input class="form-control border-end-0 border rounded-pill" type="search" placeholder="Tìm kiếm"
                        id="example-search-input">
                    <span class="input-group-append">
                        <button
                            class="search btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                            type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
            <label class="fw-normal small">Số ngày nghỉ: 1/10</label>
            <router-link :to="{ path: '/user/timeoff/0' }">
                <div class="btn btn-add float-end">
                    Tạo đơn nghỉ phép
                    <i class="fa-solid fa-plus"></i>
                </div>
            </router-link>
        </div>
        <div class="card-body">
            <div class="col-sm-12 row m-0">
                <div class="col-sm-3">
                    <b>Chờ phê duyệt</b>
                    <div class="card p-2 my-1">
                        <div class="title d-flex justify-content-between align-items-center">
                            <div>
                                <b>Nghỉ bù</b>
                            </div>
                            <div class="dropdown">
                                <button class="btn p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><router-link :to="{ path: '/user/timeoff/0' }">
                                            <a class="dropdown-item btn-edit" href="#">Chỉnh sửa
                                                <i class="ms-2 fa-solid fa-pen-to-square"></i>
                                            </a>
                                        </router-link></li>
                                    <li><a class="dropdown-item btn-cancel mt-1" href="#">Hủy bỏ
                                            <i class="fa-solid fa-trash-can ms-4"></i>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">
                                Nghỉ có lương
                            </label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ:</b> 01/01/2024 8:00
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến:</b> 02/01/2024 6:00
                                </div>
                            </div>
                            <div class="float-start">
                                <i class="fa-regular fa-clock"></i>
                            </div>
                            <div class="float-end">
                                <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    class="img" alt="Profile Photo">
                            </div>
                        </div>
                    </div>

                    <div class="card p-2 my-1">
                        <div class="title">
                            <div class="float-start">
                                <b>Nghỉ bù</b>
                            </div>
                            <div class="float-end btn p-0">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">
                                Nghỉ có lương
                            </label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ:</b> 01/01/2024 8:00
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến:</b> 02/01/2024 6:00
                                </div>
                            </div>
                            <div class="float-start">
                                <i class="fa-regular fa-clock"></i>
                            </div>
                            <div class="float-end">
                                <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    class="img" alt="Profile Photo">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <b>Đã xét duyệt</b>
                </div>
                <div class="col-sm-3">
                    <b>Đã từ chối</b>
                </div>
                <div class="col-sm-3">
                    <b>Đã hủy</b>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-header {
    font-weight: bold;
}

.btn-add {
    border: 0.8px lightskyblue solid;
    background-color: aliceblue;
    color: gray;
}

.btn-add:hover {
    border: 1px rgb(106, 176, 219) solid;
    background-color: rgb(106, 176, 219);
    color: black;
}

.ms-n5 {
    margin-left: -40px;
}

.search_input {
    width: 500px;
}

.search:hover {
    color: rgb(69, 134, 237);
}

.content {
    font-size: 12px;
}

.fa-clock {
    font-size: 20px;
}

img {
    width: 20px;
    height: 20px;
}

.dropdown-menu {
    padding: 5px 7px;
    font-size: 12px;
    min-width: auto;
}

.btn-edit {
    border-radius: 5px;
    background: rgb(62, 202, 62);
    color: white;
}

.btn-edit:hover {
    background: rgb(16, 179, 16);
    color: white;
}

.btn-cancel {
    border-radius: 5px;
    background: rgb(225, 104, 104);
    color: white;
}

.btn-cancel:hover {
    background: rgb(215, 67, 67);
    color: white;
}

.btn.show {
    border-color: white;
}
</style>
