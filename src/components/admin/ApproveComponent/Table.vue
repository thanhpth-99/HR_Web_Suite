<template>
    <div class="table-responsive">
        <table class="table table-hover align-middle text-center">
            <thead class="table-light">
                <tr class="text-center">
                    <th scope="col">STT</th>
                    <th scope="col">Mã phê duyệt</th>
                    <th scope="col">Người yêu cầu</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Ngày yêu cầu</th>
                    <th scope="col">Người phê duyệt</th>
                    <th scope="col">Ngày xác nhận</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(approve, index) in paginatedApproves"
                    :key="approve.maDon"
                    @dblclick="$router.push(`/admin/approve/${approve.maDon}`)"
                    style="cursor: pointer"
                >
                    <td>{{ (props.currentPage - 1) * props.pageSize + index + 1 }}</td>
                    <td>{{ approve.maDon }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <p class="mb-0">{{ approve.hoTenNguoiTao }}</p>
                        </div>
                    </td>
                    <td>{{ approve.loaiDon }}</td>
                    <td>{{ approve.ngayTao }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <p class="mb-0">{{ approve.hoTenNguoiPheDuyet }}</p>
                        </div>
                    </td>
                    <td>{{ approve.ngayPheDuyet }}</td>
                    <td>
                        <span v-if="approve.trangThai === 1" class="badge bg-warning">Đã gửi</span>
                        <span v-if="approve.trangThai === 2" class="badge bg-success">Đã phê duyệt</span>
                        <span v-if="approve.trangThai === 3" class="badge bg-danger">Đã Từ chối</span>
                    </td>
                    <td>
                        <button
                            class="btn btn-success me-2"
                            @click.stop="$emit('setTrangThaiApprove', approve.maDon, 2, '')"
                        >
                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                        </button>
                        <button class="btn btn-danger" @click.stop="$emit('setTrangThaiApprove', approve.maDon, 3, '')">
                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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
</template>


<script setup>
import { ref, computed } from 'vue'
const emits = defineEmits(['setTrangThaiApprove','updatePage'])
const props = defineProps({
    listApprove: Array,
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
        default: 2,
    },
})

const filteredApprove = computed(() => {
    let approves = props.listApprove
    if (props.searchQuery) {
        approves = approves.filter((approve) => approve.maDon.toLowerCase().includes(props.searchQuery.toLowerCase()))
    }
    return approves
})

const paginatedApproves = computed(() => {
    const start = (props.currentPage - 1) * props.pageSize
    const end = start + props.pageSize
    return filteredApprove.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(filteredApprove.value.length / props.pageSize)
})

const goToPage = (page) => {
    emit('updatePage', page)
}
</script>