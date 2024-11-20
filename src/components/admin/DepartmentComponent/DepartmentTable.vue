<template>
    <div>
        <table class="table table-hover align-middle table-responsive">
            <thead class="table-light">
                <tr>
                    <th scope="col">
                        STT
                    </th>
                    <th scope="col">Tên phòng ban</th>
                    <th scope="col">Quản lý</th>
                    <th scope="col">Nhân viên</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="departments.length === 0" style="text-align: center; font-style: italic">
                    <td colspan="10">Không tìm thấy phòng ban</td>
                </tr>

                <tr v-for="(department, index) in departments" :key="department.maPhongBan">
                    <td>
                        <p>{{ index + 1 }}</p>
                    </td>
                    <td>{{ department.tenPhongBan }}</td>
                    <td>
                        {{ department.truongPhong }}
                    </td>
                    <td>{{ department.soLuongNhanVien }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    departments: Array,
})
</script>