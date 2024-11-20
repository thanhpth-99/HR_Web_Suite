<template>
    <div>
        <table class="table table-hover align-middle table-responsive">
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
                    v-for="(approve, index) in listApprove"
                    :key="approve.maDon"
                    @click="$router.push(`/admin/approve/${approve.maDon}`)"
                    style="cursor: pointer"
                >
                    <td>
                        <p>{{ index + 1 }}</p>
                    </td>
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
</template>


<script setup>
const props = defineProps({
    listApprove: Array,
})
</script>