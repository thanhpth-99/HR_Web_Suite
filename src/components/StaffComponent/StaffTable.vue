<template>
    <div>
        <table class="table table-hover align-middle table-responsive">
            <thead class="table-light">
                <tr>
                    <th scope="col">
                        <input class="form-check-input" type="checkbox" />
                    </th>
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
                <tr
                    v-for="nhanVien in listStaff"
                    :key="nhanVien.maNhanVien"
                    @click="$router.push('/staff/' + nhanVien.maNhanVien)"
                >
                    <td>
                        <input class="form-check-input" type="checkbox" />
                    </td>
                    <td>{{ nhanVien.hoTen }}</td>
                    <td>{{ nhanVien.dienThoai }}</td>
                    <td>hoangha@gmail.com</td>
                    <td><i class="fas fa-clock"></i></td>
                    <td>{{ nhanVien.maChucVu }}</td>
                    <td>{{ nhanVien.maPhongBan }}</td>
                    <td>
                        <span class="badge rounded-circle bg-success">{{ nhanVien.tenTruongPhong.charAt(0) }}</span>
                        {{ nhanVien.tenTruongPhong }}
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