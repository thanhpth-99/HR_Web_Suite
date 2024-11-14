<template>
    <div>
        <table class="table table-hover align-middle table-responsive">
            <thead class="table-light">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Phòng ban</th>
                    <th scope="col">Vị trí</th>
                    <th scope="col">Quản lý</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="listStaff.length === 0" style="text-align: center; font-style: italic">
                    <td colspan="10">Không tìm thấy nhân viên</td>
                </tr>
                <tr
                    v-for="(staff, index) in listStaff"
                    :key="staff.maNhanVien"
                    @click="$router.push('/admin/staff/' + staff.maNhanVien)"
                >
                    <td>
                        {{ index + 1 }}
                    </td>
                    <td>{{ staff.hoTen }}</td>
                    <td>{{ staff.dienThoai }}</td>
                    <td>{{ staff.email }}</td>
                    <td><span class="material-symbols-outlined" :class="index%2==0 && !index%3==0 ? 'text-danger' : 'text-success'"> radio_button_checked </span></td>
                    <td>{{ staff.maChucVu }}</td>
                    <td>{{ staff.maPhongBan }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="badge bg-success me-2">{{ staff.tenTruongPhong.charAt(0) }}</span>
                            <p class="mb-0">{{ staff.tenTruongPhong }}</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    listStaff: Array,
})
</script>