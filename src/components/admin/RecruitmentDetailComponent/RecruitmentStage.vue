<template>
    <HeadMenu :loading="loading" :listCandidate="candidate" />

    <div class="container-fluid">
        <RecruitmentStageCard @setTrangThai="setInfo" :listCandidate="candidate" />
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { get, post } from '@/stores/https';
import RecruitmentStageCard from './RecruitmentStageCard.vue';
import HeadMenu from './HeadMenu.vue';
import router from '@/router'

const candidate = ref([]); 
const tenViTri = ref('');
const loading = ref(false);
const info = reactive({
    maUngVien: '',
    trangThai: 1,
})

const setInfo = async (maUngVien, trangThai) => {
    info.maUngVien = maUngVien
    info.trangThai = trangThai
    update()
}

const update = async () => {
    try {
        const response = await post('/api/v1/ung-vien', info)
        if (response) {
            Swal.fire({
                title: 'Thành công',
                text: 'Cập nhật phê duyệt thành công',
                icon: 'success',
                timer: 1500,
            })
            getAllApprove()
        }
    } catch (error) {
        Swal.fire({
            title: 'Thất bại',
            text: 'Cập nhật phê duyệt thất bại',
            icon: 'error',
            timer: 1500,
        })
        console.error(error)
    }
}

onMounted(async () => {
    const param = router.currentRoute.value.params.id;
    tenViTri.value = param; 

    if (tenViTri.value) {
        await getAllCandidate(tenViTri.value);
    }
});
const getAllCandidate = async (tenViTri) => {
    try {
        const response = await get(`/api/v1/ung-vien?tenViTri=${tenViTri}`); 
        candidate.value = response.data;
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
    }
}
</script>
