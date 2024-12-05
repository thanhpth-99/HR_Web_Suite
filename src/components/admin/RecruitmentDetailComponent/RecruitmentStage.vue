<template>
    <HeadMenu :loading="loading" :listCandidate="candidates"/>
    <div class="container-fluid p-0">
        <RecruitmentStageCard :listCandidate="candidates" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { get } from '@/stores/https'
import RecruitmentStageCard from './RecruitmentStageCard.vue'
import HeadMenu from './HeadMenu.vue'
import { useRoute } from 'vue-router'

const candidates = ref([]) // Tên biến rõ nghĩa hơn
const positionName = ref('') // Đổi tên từ 'tenViTri' để dễ hiểu
const loading = ref(false) // Giữ nguyên, nhưng dùng hợp lý trong thực tế

const route = useRoute() // Sử dụng composable của Vue Router để truy cập route

const fetchCandidates = async (positionName) => {
    try {
        loading.value = true
        const response = await get(`/api/v1/candidates?tenViTri=${positionName}`)
        candidates.value = response.data
    } catch (error) {
        console.error('Error fetching candidates:', error)
    } finally {
        loading.value = false
    }
}

onMounted(async () => {
    positionName.value = route.params.id || ''
    if (positionName.value) {
        await fetchCandidates(positionName.value)
    }
})
</script>
