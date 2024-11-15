<template>
    <div>
        <table class="table table-hover align-middle table-responsive">
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
                <tr v-if="listRecruitment.length === 0" style="text-align: center; font-style: italic">
                    <td colspan="8">Không tìm thấy tuyển dụng</td> 
                </tr>
                <tr
                    v-for="(Recruitment, index) in listRecruitment"
                    :key="Recruitment.viTriTuyenDung || index" 
                    @click="$router.push('/admin/recruitment/recruitmentPlace' + Recruitment.viTriTuyenDung)"
                    style="cursor: pointer"
                >
                    <td>{{ index + 1 }}</td>
                    <td>{{ Recruitment.tenViTri }}</td>
                    <td>{{ Recruitment.maPhongBan }}</td>
                    <td>{{ Recruitment.soLuongTuyen }}</td>
                    <td>{{ Recruitment.soLuongUngTuyen }}</td>
                    <td>
                        <span 
                            class="material-symbols-outlined" 
                            :class="index % 2 == 0 && index % 3 != 0 ? 'text-danger' : 'text-success'"
                        >
                            radio_button_checked
                        </span>
                    </td>
                    <td>{{ Recruitment.moTa }}</td>
                    <td>{{ Recruitment.yeuCau }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    listRecruitment: {
        type: Array,
        default: () => [],
    },
})
</script>
