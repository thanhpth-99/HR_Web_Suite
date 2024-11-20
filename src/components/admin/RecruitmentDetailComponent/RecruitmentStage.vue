<template>
    <HeadMenu :loading="loading" :listCandidate="candidate" />

    <div class="container-fluid">
        <RecruitmentStageCard @setTrangThai="setInfo" :listCandidate="candidate" />
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { get, post } from '@/stores/https'
import RecruitmentStageCard from './RecruitmentStageCard.vue'
import HeadMenu from './HeadMenu.vue'
import router from '@/router'
const candidate = ref([])
const tenViTri = ref('')
const loading = ref(false)

onMounted(async () => {
    const param = router.currentRoute.value.params.id
    tenViTri.value = param

    if (tenViTri.value) {
        await getAllCandidate(tenViTri.value)
    }
})
const getAllCandidate = async (tenViTri) => {
    try {
        const response = await get(`/api/v1/ung-vien?tenViTri=${tenViTri}`)
        candidate.value = response.data
    } catch (error) {
        console.error('Lỗi khi gọi API:', error)
    }
}
</script>
