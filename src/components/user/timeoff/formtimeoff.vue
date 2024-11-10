<template>
    <div class="wrapper card">
        <div class="border-bottom border-2">
            <h4>Tạo đơn nghỉ phép</h4>
        </div>
        <div class="py-2">
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="hoTen" class="form-label">Họ và tên:</label>
                    <input type="text" id="hoTen" class="bg-active form-control disabled" v-model="data.hoTen"
                        disabled>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="maNhanVien" class="form-label disabled">Mã nhân viên:</label>
                    <input type="text" id="maNhanVien" class="bg-active form-control" v-model="data.maNhanVien" disabled>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="chucVu" class="form-label">Vị trí công việc:</label>
                    <input type="text" id="chucVu" class="bg-active form-control disabled" v-model="data.tenChucVu"
                        disabled>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="phongBan" class="form-label disabled">Phòng Ban:</label>
                    <input type="text" id="phongBan" class="bg-active form-control" v-model="data.tenPhongBan"
                        disabled>
                </div>
            </div>
            <div class="col-md-12">
                <label for="truongPhong" class="form-label">Người duyệt:</label>
                <input type="text" id="truongPhong" class="bg-light form-control"
                    value="Phạm Hoàng Hà">
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="lydo" class="form-label">Lý do nghỉ:</label>
                    <select class="form-select" id="lydo">
                        <option selected disabled>Chọn loại nghỉ phép</option>
                        <option value="annual">Nghỉ phép năm</option>
                        <option value="sick">Nghỉ ốm</option>
                        <option value="maternity">Nghỉ thai sản</option>
                        <option value="unpaid">Nghỉ không lương</option>
                    </select>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="batdau" class="form-label">Từ ngày:</label>
                    <input type="datetime-local" v-model="dateTime" id="batdau" class="bg-light form-control">
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="ketthuc" class="form-label">Đến ngày:</label>
                    <input type="datetime-local" v-model="dateTime" id="ketthuc" class="bg-light form-control">
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-12">
                    <label for="ghichu" class="form-label">Ghi chú</label>
                    <textarea type="text" id="phone" rows="5" class="bg-light form-control"></textarea>
                </div>
            </div>
            <div class="py-3 pb-4 border-bottom text-center">
                <button class="btn btn-primary me-3">Lưu thay đổi</button>
                <router-link :to="{ path: '/user/staff' }">
                    <button class="btn btn-outline-secondary">Quay lại</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 30px 50px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin: 10px auto;
    max-width: 900px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { post, get } from '@/stores/https';

const data = ref({})

const loadInfoUser = async () => {
    try {
        const response = await get(`/api/v1/employees/${sessionStorage.getItem('maNhanVien')}`)

        if (response.success) {
            data.value = {
                hoTen: response.data.hoTen,
                maNhanVien: response.data.maNhanVien,
                tenChucVu: response.data.tenChucVu,
                tenPhongBan: response.data.tenPhongBan
            }

            console.log(data.value)
        }
        else {
            await Swal.fire({
            title: 'Lỗi',
            text: 'Lấy thông tin thất bại',
            icon: 'error',
            timer: 1500,
        })
        }
    } catch (error) {
        await Swal.fire({
            title: 'Error',
            text: error,
            icon: 'error',
            timer: 1500,
        })
        console.log(error)
    }
}

const dateTime = ref('');

onMounted(async () => {
    await loadInfoUser()
})
</script>