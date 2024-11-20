<template>
    <div class="p-4 border-0 border-bottom border-secondary-subtle">
        <div class="head-menu col-12">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <button
                        @click="update()"
                        type="submit"
                        class="btn btn-success w-100 fw-bold me-2"
                        :disabled="loading"
                        :class="{ loading: loading }"
                    >
                        <span
                            v-if="loading"
                            class="spinner-border me-2 spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        <span v-if="!loading"><i class="fa-solid fa-download me-2"></i></span>Save
                    </button>
                    <h5 class="mb-0">Candidate</h5>
                    <div class="row">
                        <div class="col-8 d-flex justify-content-start" v-if="ungVien.maUngVien">
                            <Button class="btn btn-success me-2" @click="setInfo(2)">Phỏng vấn lần đầu</Button>
                            <Button class="btn btn-success me-2" @click="setInfo(3)">Phỏng vấn lần 2</Button>
                            <Button class="btn btn-success me-2" @click="setInfo(4)">Nhận việc</Button>
                            <button class="btn btn-danger me-2" @click="setInfo(5)">Từ chối</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card custom-card border-0">
        <div class="row">
            <div class="col-md-9">
                <label for="hoTen" class="col-sm-4 col-form-label">Họ và tên</label>
                <input type="text" id="hoTen" v-model="ungVien.hoTen" class="form-control" />
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6">
            <h5 class="section-title">Thông tin cá nhân</h5>
            <div class="row mb-3">
                <label for="phone" class="col-sm-4 col-form-label">Số điện thoại</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="phone" v-model="ungVien.dienThoai" />
                </div>
            </div>

            <div class="row mb-3">
                <label for="email" class="col-sm-4 col-form-label">Email</label>
                <div class="col-sm-8">
                    <input type="email" class="form-control" id="email" v-model="ungVien.email" />
                </div>
            </div>

            <div class="row mb-3">
                <label for="cccd" class="col-sm-4 col-form-label">CCCD</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="cccd" v-model="ungVien.cccd" />
                </div>
            </div>

            <div class="row mb-3">
                <label for="trangThai" class="col-3 col-form-label">Trạng thái</label>
                <div class="col-9">
                    <span v-if="ungVien.trangThai === 1" class="badge bg-warning">Tạo và cập nhật hồ sơ</span>
                    <span v-if="ungVien.trangThai === 2" class="badge bg-success">Phỏng vấn lần đầu</span>
                    <span v-if="ungVien.trangThai === 3" class="badge bg-danger">Phỏng vấn lần hai</span>
                    <span v-if="ungVien.trangThai === 4" class="badge bg-danger">Hợp đồng</span>
                    <span v-if="ungVien.trangThai === 5" class="badge bg-secondary">Từ chối</span>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <h5 class="section-title">Thông tin bổ sung</h5>
            <div class="row mb-3">
                <label for="address" class="col-sm-4 col-form-label">Địa chỉ</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="address" v-model="ungVien.diaChi" />
                </div>
            </div>

            <div class="row mb-3">
                <label for="dob" class="col-sm-4 col-form-label">Ngày sinh</label>
                <div class="col-sm-8">
                    <input type="date" class="form-control" id="dob" v-model="ungVien.ngaySinh" />
                </div>
            </div>

            <div class="row mb-3">
                <label for="gioiTinh" class="col-sm-4 col-form-label">Giới tính</label>
                <div class="col-sm-8">
                    <div class="form-check form-check-inline">
                        <input
                            class="form-check-input"
                            v-model="ungVien.gioiTinh"
                            type="radio"
                            name="gioiTinh"
                            id="nam"
                            :value="true"
                        />
                        <label class="form-check-label" for="nam">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input
                            v-model="ungVien.gioiTinh"
                            class="form-check-input"
                            type="radio"
                            name="gioiTinh"
                            id="nu"
                            :value="false"
                        />
                        <label class="form-check-label" for="nu">Nữ</label>
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <label for="position" class="col-sm-4 col-form-label">Vị trí tuyển dụng</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="position" v-model="ungVien.maViTriTuyenDung" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/router'
import { ref, onMounted, reactive } from 'vue'
import { get, post } from '@/stores/https'
const loading = ref(false)
const ungVien = ref({})
const info = reactive({
    maUngVien: '',
    trangThai: 1,
    hoTen: '',
    gioiTinh: 'True',
    ngaySinh: '',
    dienThoai: '',
    cccd: '',
    diaChi: '',
    hinhAnh: '',
    email: '',
    maViTriTuyenDung: '',
})
const setInfo = async (trangThai) => {
    try {
        ungVien.value.trangThai = trangThai
        update()
    } catch (error) {
        console.error('Lỗi khi gọi API:', error)
    }
}
const update = async () => {
    try {
        const response = await post('/api/v1/ung-vien', ungVien.value)
        if (response) {
            Swal.fire({
                title: 'Thành công',
                text: 'Cập nhật phê duyệt thành công',
                icon: 'success',
                timer: 1500,
            })
            if ((ungVien.value.trangThai == 2, 3, 4, 5)) {
                router.go(-1)
                return
            }
        }
    } catch (error) {
        Swal.fire({
            title: 'Thất bại',
            text: 'Cập nhật phê duyệt thất bại',
            icon: 'error',
            timer: 1500,
        })
        console.error(error)
    }
}
onMounted(() => {
    const param = router.currentRoute.value.params.id
    if (param) {
        ungVien.maUngVien = param
        getInfoByMaUngVien(ungVien.maUngVien)
    }
})
const getInfoByMaUngVien = async (maUngVien) => {
    try {
        const response = await get('/api/v1/ung-vien/search', { maUngVien })
        if (response && response.data) {
            ungVien.value = response.data
        }
    } catch (error) {
        Swal.fire({
            title: 'Thất bại',
            text: 'Không thể tải lên dữ liệu phê duyệt',
            icon: 'error',
            timer: 1500,
        })
        console.error(error)
    }
}
</script>
