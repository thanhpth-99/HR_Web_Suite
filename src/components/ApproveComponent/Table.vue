<template>
    <div>
        <table class="table table-hover align-middle table-responsive">
            <thead class="table-light">
                <tr>
                    <th scope="col">
                        <input class="form-check-input" type="checkbox" />
                    </th>
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
                <tr v-for="approve in listApprove" :key="approve.maDon">
                    <td>
                        <input class="form-check-input" type="checkbox" />
                    </td>
                    <td>Ref0210</td>
                    <td>
                        <span class="badge bg-danger">H</span>
                        Phạm Hoàng Hà
                    </td>
                    <td>Mượn đồ</td>
                    <td>28/11/2022</td>
                    <td>
                        <span class="badge bg-warning">N</span>
                        Nguyễn Minh Nam
                    </td>
                    <td>03/01/2023</td>
                    <td>
                        <span class="badge bg-warning">Đã gửi</span>
                    </td>
                    <td>
                        <button class="btn btn-success me-2">
                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                        </button>
                        <button class="btn btn-danger"><i class="fa-regular fa-circle-xmark me-2"></i>Từ chối</button>
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