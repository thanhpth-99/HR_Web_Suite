<template>
    <div class="card">
        <!-- Header Section -->
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

        <!-- Main Content Section -->
        <div class="card-body">
            <div class="col-sm-12 row m-0">
                <div class="col-sm-4">
                    <b>Chờ phê duyệt</b>
                    <!-- Card Item with Modal Trigger -->
                    <div v-for="item in listChoDuyet" :key="item.maDon" class="card p-2 my-2">
                        <div class="title d-flex justify-content-between align-items-center">
                            <div>
                                <b>{{ item.loaiDon }}</b>
                            </div>
                            <div class="dropdown">
                                <button class="btn p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><router-link :to="{ path: '/user/timeoff/' + item.maDon }" class="dropdown-item btn-edit">
                                            Chỉnh sửa
                                            <i class="ms-2 fa-solid fa-pen-to-square"></i>
                                        </router-link></li>
                                    <li><a class="dropdown-item btn-cancel mt-1" href="#">Hủy bỏ
                                            <i class="fa-solid fa-trash-can ms-4"></i>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">{{ item.loaiDon }}</label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ ngày:</b> {{ item.ngayBatDau }}
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến ngày:</b> {{ item.ngayKetThuc }}
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
                        <!-- Modal Trigger Button -->
                        <button type="button" class="btn btn-info mt-2 w-100" data-bs-toggle="modal"
                            data-bs-target="#timeOffModal">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <div class="col-sm-4">
                    <b>Đã phê duyệt</b>
                    <!-- Card Item with Modal Trigger -->
                    <div v-for="item in listDaDuyet" :key="item.maDon" class="card p-2 my-2">
                        <div class="title d-flex justify-content-between align-items-center">
                            <div>
                                <b>{{ item.loaiDon }}</b>
                            </div>
                            <div class="dropdown">
                                <button class="btn p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><router-link :to="{ path: '/user/timeoff/' + item.maDon }" class="dropdown-item btn-edit">
                                            Chỉnh sửa
                                            <i class="ms-2 fa-solid fa-pen-to-square"></i>
                                        </router-link></li>
                                    <li><a class="dropdown-item btn-cancel mt-1" href="#">Hủy bỏ
                                            <i class="fa-solid fa-trash-can ms-4"></i>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">{{ item.loaiDon }}</label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ ngày:</b> {{ item.ngayBatDau }}
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến ngày:</b> {{ item.ngayKetThuc }}
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
                        <!-- Modal Trigger Button -->
                        <button type="button" class="btn btn-info mt-2 w-100" data-bs-toggle="modal"
                            data-bs-target="#timeOffModal">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <div class="col-sm-4">
                    <b>Đã từ chối</b>
                    <!-- Card Item with Modal Trigger -->
                    <div v-for="item in listTuChoi" :key="item.maDon" class="card p-2 my-2">
                        <div class="title d-flex justify-content-between align-items-center">
                            <div>
                                <b>{{ item.loaiDon }}</b>
                            </div>
                            <div class="dropdown">
                                <button class="btn p-0" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><router-link :to="{ path: '/user/timeoff/' + item.maDon }" class="dropdown-item btn-edit">
                                            Chỉnh sửa
                                            <i class="ms-2 fa-solid fa-pen-to-square"></i>
                                        </router-link></li>
                                    <li><a class="dropdown-item btn-cancel mt-1" href="#">Hủy bỏ
                                            <i class="fa-solid fa-trash-can ms-4"></i>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">{{ item.loaiDon }}</label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ ngày:</b> {{ item.ngayBatDau }}
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến ngày:</b> {{ item.ngayKetThuc }}
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
                        <!-- Modal Trigger Button -->
                        <button type="button" class="btn btn-info mt-2 w-100" data-bs-toggle="modal"
                            data-bs-target="#timeOffModal">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bootstrap Modal for Detailed Information -->
        <div class="modal fade" id="timeOffModal" tabindex="-1" aria-labelledby="timeOffModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content modal-fullscreen-md-down">
                    <div class="modal-header">
                        <h5 class="modal-title" id="timeOffModalLabel">Chi tiết nghỉ phép</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body col-sm-12 m-0 row gap-3">
                        <!-- Reusable Card Structure Inside Modal -->
                        <div class="py-2 card card-body col-sm-5">
                            <div class="col-md-12 mb-2">
                                <label for="maNhanVien" class="form-label disabled">Mã nhân viên:</label>
                                <input type="text" id="maNhanVien" class="bg-active form-control" disabled>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="hoTen" class="form-label">Họ và tên:</label>
                                <input type="text" id="hoTen" class="bg-active form-control disabled" disabled>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="chucVu" class="form-label">Vị trí công việc:</label>
                                <input type="text" id="chucVu" class="bg-active form-control disabled" disabled>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="phongBan" class="form-label disabled">Phòng Ban:</label>
                                <input type="text" id="phongBan" class="bg-active form-control" disabled>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="truongPhong" class="form-label">Người duyệt:</label>
                                <input type="text" id="truongPhong" class="bg-active form-control" value="Phạm Hoàng Hà"
                                    disabled>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="lydo" class="form-label">Lý do nghỉ:</label>
                                <input type="text" id="truongPhong" class="bg-active form-control" value="" disabled>
                            </div>
                            <div class="row py-2">
                                <div class="col-md-6">
                                    <label for="batdau" class="form-label">Từ ngày:</label>
                                    <input type="text" id="batdau" class="bg-active form-control" disabled>
                                </div>
                                <div class="col-md-6 pt-md-0 pt-3">
                                    <label for="ketthuc" class="form-label">Đến ngày:</label>
                                    <input type="text" id="ketthuc" class="bg-active form-control" disabled>
                                </div>
                            </div>
                            <div class="row py-2">
                                <div class="col-md-12">
                                    <label for="ghichu" class="form-label">Ghi chú</label>
                                    <textarea type="text" id="phone" rows="5" class="bg-active form-control"
                                        disabled></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="py-2 card card-body col-sm-6">
                            <hr>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { get } from '@/stores/https';
import { onMounted, ref } from 'vue'

const listYeuCau = ref([])
const listChoDuyet = ref([])
const listDaDuyet = ref([])
const listTuChoi = ref([])

const loadYeuCau = async() => {
    try {
        const response = await get('/api/v1/don-yeu-cau', {maNhanVien: sessionStorage.getItem('maNhanVien')})
        console.log(response.data)
        listYeuCau.value = response.data

        listChoDuyet.value = []
        listDaDuyet.value = []
        listTuChoi.value = []

        listYeuCau.value.forEach(item => {
            if (item.trangThai === 1) {
                listChoDuyet.value.push(item)
            } else if (item.trangThai === 2) {
                listDaDuyet.value.push(item)
            } else {
                listTuChoi.value.push(item)
            }
        })

        console.log("Cho Duyet:", listChoDuyet.value)
        console.log("Da Duyet:", listDaDuyet.value)
        console.log("Tu Choi:", listTuChoi.value)
    } catch (error) {
        Swal.fire({
            title: 'Lỗi',
            text: 'Lỗi',
            icon: 'error',
            timer: 1500,
        })
        console.error('Error during update info:', error)
    }
}


onMounted(async () => {
    await loadYeuCau()
})
</script>

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

.btn-cancel {
    border-radius: 5px;
    background: rgb(225, 104, 104);
    color: white;
}

hr {
    margin-top: 0;
    margin-bottom: 24px;
}
</style>
