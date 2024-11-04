<template>
    <div>
        <table class="table table-hover align-middle table-responsive">
            <thead class="table-light">
                <tr>
                    <th scope="col">
                        <input class="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col">Tên phòng ban</th>
                    <th scope="col">Quản lý</th>
                    <th scope="col">Nhân viên</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="department in departments" :key="department.maPhongBan">
                    <td>
                        <input class="form-check-input" type="checkbox" />
                    </td>
                    <td>{{ department.tenPhongBan }}</td>
                    <td>
                        <span class="badge bg-success">{{ department.truongPhong.charAt(0) }}</span>
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