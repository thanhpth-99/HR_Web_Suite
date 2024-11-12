<template>
    <div class="card">
        <!-- Header Section -->
        <div class="card-header border-bottom text-center d-flex align-items-center justify-content-between px-4 fs-4">
            <div class="float-start mt-2">
                Đơn nghỉ phép của tôi
                <!-- <i class="fa-solid fa-gear"></i> -->
            </div>
            <!-- <div class="search_input d-flex justify-content-center">
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
            </div> -->
            <!-- <label class="fw-normal small">Số ngày nghỉ: 1/10</label> -->
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
                <div class="col-sm-4 px-2">
                    <label class="p-2 text-bg-primary  rounded-2 fw-bolder">Chờ phê duyệt</label>
                    <!-- Card Item with Modal Trigger -->
                    <div v-for="item in listChoDuyet" :key="item.maDon" class="card p-2 my-2">
                        <div class="d-flex m-0 justify-content-between text-header">
                            <div class="fw-medium text-start">Mã đơn: {{ item.maDon }}</div>
                            <div class="fw-medium text-end"> {{ formatDate(item.ngayTao) }}</div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">Lý do: {{ item.loaiDon }}</label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ ngày:</b> {{ formatDate(item.ngayBatDau) }}
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến ngày:</b> {{ formatDate(item.ngayKetThuc) }}
                                </div>
                            </div>
                            <div class="float-start">
                                <i class="fa-regular fa-clock"></i>
                            </div>
                            <div class="float-end">
                                <img :src="userInfo.hinhAnh" class="img" alt="Profile Photo">
                            </div>
                        </div>
                        <!-- Modal Trigger Button -->
                        <button type="button" class="btn btn-info mt-2 w-100" data-bs-toggle="modal"
                            data-bs-target="#timeOffModal" @click="openModal(item)">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <div class="col-sm-4 px-2">
                    <label class="p-2 text-bg-success text-white rounded-2 fw-bolder">Đã phê duyệt</label>
                    <!-- Card Item with Modal Trigger -->
                    <div v-for="item in listDaDuyet" :key="item.maDon" class="card p-2 my-2">
                        <div class="title d-flex justify-content-between align-items-center">
                            <div>
                                <b>{{ item.loaiDon }}</b>
                            </div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">{{ item.loaiDon }}</label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ ngày:</b> {{ formatDate(item.ngayBatDau) }}
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến ngày:</b> {{ formatDate(item.ngayKetThuc) }}
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
                            data-bs-target="#timeOffModal" @click="openModal(item)">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
                <div class="col-sm-4 px-2">
                    <label class="p-2 text-bg-danger rounded-2 fw-bolder">Đã từ chối</label>
                    <!-- Card Item with Modal Trigger -->
                    <div v-for="item in listTuChoi" :key="item.maDon" class="card p-2 my-2">
                        <div class="title d-flex justify-content-between align-items-center">
                            <div>
                                <b>{{ item.loaiDon }}</b>
                            </div>
                        </div>
                        <div class="content my-2">
                            <label class="w-100">{{ item.loaiDon }}</label>
                            <div class="time_off col-sm-12 row m-0 my-2">
                                <div class="col-sm-6 text-start p-0">
                                    <b>Từ ngày:</b> {{ formatDate(item.ngayBatDau) }}
                                </div>
                                <div class="col-sm-6 text-end p-0">
                                    <b>Đến ngày:</b> {{ formatDate(item.ngayKetThuc) }}
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
                            data-bs-target="#timeOffModal" @click="openModal(item)">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bootstrap Modal for Detailed Information -->
        <div class="modal fade" id="timeOffModal" tabindex="-1" aria-labelledby="timeOffModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content modal-fullscreen-md-down">
                    <div class="modal-header">
                        <h5 class="modal-title" id="timeOffModalLabel">Chi tiết nghỉ phép</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body m-0 row">
                        <!-- Reusable Card Structure Inside Modal -->
                        <div class="py-2 card card-body">
                            <div class="row py-2">
                                <div class="col-md-6">
                                    <label for="maNhanVien" class="form-label disabled">Mã nhân viên:</label>
                                    <input type="text" id="maNhanVien" class="bg-active form-control"
                                        :value="userInfo.maNhanVien" disabled>
                                </div>
                                <div class="col-md-6 pt-md-0 pt-3">
                                    <label for="hoTen" class="form-label">Họ và tên:</label>
                                    <input type="text" id="hoTen" class="bg-active form-control" :value="userInfo.hoTen"
                                        disabled>
                                </div>
                            </div>
                            <div class="row py-2">
                                <div class="col-md-4">
                                    <label for="chucVu" class="form-label">Chức vụ:</label>
                                    <input type="text" id="chucVu" class="bg-active form-control"
                                        :value="userInfo.tenChucVu" disabled>
                                </div>
                                <div class="col-md-4">
                                    <label for="phongBan" class="form-label disabled">Bộ phận:</label>
                                    <input type="text" id="phongBan" class="bg-active form-control"
                                        :value="userInfo.tenBoPhan" disabled>
                                </div>
                                <div class="col-md-4">
                                    <label for="phongBan" class="form-label disabled">Phòng Ban:</label>
                                    <input type="text" id="phongBan" class="bg-active form-control"
                                        :value="userInfo.tenPhongBan" disabled>
                                </div>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="truongPhong" class="form-label">Người duyệt:</label>
                                <input type="text" id="truongPhong" class="bg-active form-control" value="Phạm Hoàng Hà"
                                    disabled>
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="lydo" class="form-label">Lý do nghỉ:</label>
                                <input type="text" id="lydo" class="bg-active form-control"
                                    :value="selectedItem.loaiDon" disabled>
                            </div>
                            <div class="row py-2">
                                <div class="col-md-6">
                                    <label for="batdau" class="form-label">Từ ngày:</label>
                                    <input type="text" id="batdau" class="bg-active form-control"
                                        :value="formatDate(selectedItem.ngayBatDau)" disabled>
                                </div>
                                <div class="col-md-6 pt-md-0 pt-3">
                                    <label for="ketthuc" class="form-label">Đến ngày:</label>
                                    <input type="text" id="ketthuc" class="bg-active form-control"
                                        :value="formatDate(selectedItem.ngayKetThuc)" disabled>
                                </div>
                            </div>
                            <div class="row py-2">
                                <div class="col-md-12">
                                    <label for="ghichu" class="form-label">Ghi chú</label>
                                    <textarea type="text" id="ghichu" rows="5" class="bg-active form-control"
                                        :value="selectedItem.moTa" disabled></textarea>
                                </div>
                            </div>
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

const userInfo = ref({})
const selectedItem = ref({})

const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}

const loadYeuCau = async () => {
    try {
        const response = await get('/api/v1/don-yeu-cau', { maNhanVien: sessionStorage.getItem('maNhanVien') })
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

const loadInfoUser = async () => {
    try {
        const response = await get(`/api/v1/employees/${sessionStorage.getItem('maNhanVien')}`)
        if (response.success) {
            userInfo.value = {
                hoTen: response.data.hoTen,
                maNhanVien: response.data.maNhanVien,
                tenChucVu: response.data.tenChucVu,
                tenBoPhan: response.data.tenBoPhan,
                tenPhongBan: response.data.tenPhongBan,
                hinhAnh: response.data.hinhAnh
            }
        } else {
            Swal.fire({
                title: 'Lỗi',
                text: 'Lấy thông tin thất bại',
                icon: 'error',
                timer: 1500,
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: error.message,
            icon: 'error',
            timer: 1500,
        })
    }
}

const openModal = (item) => {
    selectedItem.value = item
}

onMounted(async () => {
    await loadYeuCau()
    await loadInfoUser()
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
    font-size: 14px;
}

.fa-clock {
    font-size: 20px;
}

img {
    width: 20px;
    height: 20px;
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

.text-header {
    font-size: 15px;
}
</style>
