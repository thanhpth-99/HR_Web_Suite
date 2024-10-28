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
                <tr v-for="phongBan in listPhongBan" :key="phongBan.maPhongBan">
                    <td>
                        <input class="form-check-input" type="checkbox" />
                    </td>
                    <td>{{ phongBan.tenPhongBan }}</td>
                    <td><span class="badge bg-success">{{ phongBan.truongPhong.charAt(0) }}</span> {{ phongBan.truongPhong }}</td>
                    <td>{{ phongBan.soLuongNhanVien }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

const props = defineProps({
    listPhongBan: Array,
})
</script>