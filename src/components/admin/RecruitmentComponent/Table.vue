<template>
    <div>
        <table class="table table-hover align-middle table-responsive text-center">
            <thead class="table-light">
                <tr class="text-center">
                    <th scope="col">STT</th>
                    <th scope="col">Tên vị trí</th>
                    <th scope="col">Mã phòng ban</th>
                    <th scope="col">Số lượng tuyển</th>
                    <th scope="col">Số lượng ứng tuyển</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Yêu cầu</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(Recruitment, index) in paginatedRecruitment"
                    :key="Recruitment.viTriTuyenDung || index"
                    @dblclick="$router.push(`/admin/recruitment/${Recruitment.tenViTri}`)"
                    style="cursor: pointer"
                >
                    <td>{{ (props.currentPage - 1) * props.pageSize + index + 1 }}</td>
                    <td>{{ Recruitment.tenViTri }}</td>
                    <td>{{ Recruitment.maPhongBan }}</td>
                    <td>{{ Recruitment.soLuongTuyen }}</td>
                    <td>{{ Recruitment.soLuongUngTuyen }}</td>
                    <td>
                        <span class="material-symbols-outlined"> radio_button_checked </span>
                    </td>
                    <td>{{ Recruitment.moTa }}</td>
                    <td>{{ Recruitment.yeuCau }}</td>
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
const props = defineProps({
    listRecruitment: Array,
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
})

const filteredRecruitment = computed(() => {
    let recruitments = props.listRecruitment
    if (props.searchQuery) {
        recruitments = recruitments.filter((recruitment) =>
            recruitment.tenViTri.toLowerCase().includes(props.searchQuery.toLowerCase()),
        )
    }
    return recruitments
})

const paginatedRecruitment = computed(() => {
    const start = (props.currentPage - 1) * props.pageSize
    const end = start + props.pageSize
    return filteredRecruitment.value.slice(start, end)
})

const totalPages = computed(() => {
    return Math.ceil(filteredRecruitment.value.length / props.pageSize)
})

const emit = defineEmits(['updatePage'])

const goToPage = (page) => {
    emit('updatePage', page)
}
</script>
