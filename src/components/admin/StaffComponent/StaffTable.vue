
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
                <tr v-if="paginatedStaffs.length === 0" style="text-align: center; font-style: italic">
                    <td colspan="10">Không tìm thấy nhân viên</td>
                </tr>
                <tr
                    v-for="(staff, index) in paginatedStaffs"
                    :key="staff.maNhanVien"
                    @dblclick="$router.push('/admin/staff/' + staff.maNhanVien)"
                >
                    <td>{{ (props.currentPage - 1) * props.pageSize + index + 1 }}</td>
                    <td>{{ staff.hoTen }}</td>
                    <td>{{ staff.dienThoai }}</td>
                    <td>{{ staff.email }}</td>
                    <td>
                        <span
                            class="material-symbols-outlined"
                            :class="index % 2 == 0 && !index % 3 == 0 ? 'text-danger' : 'text-success'"
                        >
                            radio_button_checked
                        </span>
                    </td>
                    <td>{{ staff.tenPhongBan }}</td>
                    <td>{{ staff.tenChucVu }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <p class="mb-0">{{ staff.tenTruongPhong }}</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pagination d-flex justify-content-center align-items-center">
            <button
                class="btn btn-secondary rounded-0 mx-1 d-flex align-items-center"
                :disabled="props.currentPage === 1"
                @click="goToPage(props.currentPage - 1)"
            >
                <span class="material-symbols-outlined"> keyboard_double_arrow_left </span>
            </button>
            <span>Trang {{ props.currentPage }} / {{ totalPages }}</span>
            <button
                class="btn btn-secondary rounded-0 d-flex align-items-center"
                :disabled="props.currentPage === totalPages"
                @click="goToPage(props.currentPage + 1)"
            >
                <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props nhận từ parent
const props = defineProps({
    listStaff: {
        type: Array,
        default: () => [],
    },
    searchQuery: {
        type: String,
        default: '',
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    pageSize: {
        type: Number,
        default: 10,
    },
    departmentSelected: {
        type: Array,
        default: () => [],
    },
})
const filteredStaffs = computed(() => {
    let staffs = props.listStaff

    // Lọc theo từ khóa
    if (props.searchQuery) {
        staffs = staffs.filter((staff) => staff.hoTen.toLowerCase().includes(props.searchQuery.toLowerCase()))
    }

    // Lọc theo phòng ban
    if (props.departmentSelected.length > 0) {
        staffs = staffs.filter((staff) => props.departmentSelected.includes(staff.maPhongBan))
    }

    return staffs
})

const paginatedStaffs = computed(() => {
    const start = (props.currentPage - 1) * props.pageSize
    const end = start + props.pageSize
    return filteredStaffs.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(filteredStaffs.value.length / props.pageSize)
})

const emit = defineEmits(['updatePage'])

const goToPage = (page) => {
    emit('updatePage', page)
}
</script>
