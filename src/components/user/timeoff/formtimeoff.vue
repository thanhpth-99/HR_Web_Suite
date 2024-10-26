<template>
    <div class="wrapper card">
        <div class="border-bottom border-2">
            <h4>Tạo đơn nghỉ phép</h4>
        </div>
        <div class="py-2">
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="firstname" class="form-label">Họ và tên:</label>
                    <input type="text" id="firstname" class="bg-active form-control disabled" value="Nguyễn Minh Nam"
                        disabled>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="lastname" class="form-label disabled">Mã nhân viên:</label>
                    <input type="text" id="lastname" class="bg-active form-control" value="NV51" disabled>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="firstname" class="form-label">Vị trí công việc:</label>
                    <input type="text" id="firstname" class="bg-active form-control disabled" value="Nhân viên"
                        disabled>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="lastname" class="form-label disabled">Phòng Ban:</label>
                    <input type="text" id="lastname" class="bg-active form-control" value="Ban quản lý nhân sự"
                        disabled>
                </div>
            </div>
            <div class="col-md-12">
                <label for="address" class="form-label">Người duyệt:</label>
                <input type="text" id="phone" class="bg-light form-control" placeholder="Vui lòng nhập địa chỉ"
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
                    <!-- Lấy thử giá trị -->
                    <!-- <button @click="getDateTime">Lấy giá trị</button> -->
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-12">
                    <label for="ghichu"  class="form-label">Ghi chú</label>
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
import { ref } from 'vue';

const dateTime = ref('');

const getDateTime = () => {
    if (dateTime.value) {
        const dateTimeObj = new Date(dateTime.value);
        const date = dateTimeObj.toLocaleDateString();
        const hours = dateTimeObj.getHours();
        const minutes = dateTimeObj.getMinutes();

        console.log(`Ngày: ${date}`);
        console.log(`Giờ: ${hours}`);
        console.log(`Phút: ${minutes}`);
    } else {
        console.log("Vui lòng chọn ngày và giờ.");
    }
};
</script>