<template>
    <div class="table-responsive">
        <table class="table table-hover align-middle text-center">
            <thead class="table-light">
                <tr class="text-center">
                    <th scope="col">STT</th>
                    <th scope="col">Tên nhân viên</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Ngày bắt đầu</th>
                    <th scope="col">Ngày kết thúc</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(Contract, index) in listContract"
                    :key="Contract.soHopDong || index"
                    @click="$router.push(`/admin/contract/${Contract.soHopDong}`)"
                    style="cursor: pointer"
                >
                    <td>{{ index + 1 }}</td>
                    <td>{{ getTenNhanVien(Contract.maNhanVien) }}</td>
                    <td>{{ Contract.noiDung }}</td>
                    <td>{{ Contract.ngayBatDau }}</td>
                    <td>{{ Contract.ngayKetThuc }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { get } from '@/stores/https'
const listNhanVien = ref([])
const props = defineProps({
    listContract: Array,
})
const getNhanVien = async () => {
    try {
        const response = await get('/api/v1/employees') // URL API danh sách nhân viên
        listNhanVien.value = response.data
    } catch (error) {
        console.error('Lỗi khi fetch danh sách nhân viên:', error)
    }
}

onMounted(async () => {
    await getNhanVien()
})
const getTenNhanVien = (maNhanVien) => {
    const nhanVien = listNhanVien.value.find((nv) => nv.maNhanVien === maNhanVien)
    return nhanVien ? nhanVien.hoTen : 'Không xác định' // Trả về tên hoặc giá trị mặc định
}
</script>
