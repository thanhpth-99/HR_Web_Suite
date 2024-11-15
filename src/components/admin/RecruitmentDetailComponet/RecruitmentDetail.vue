<template>
    <HeadMenu :loading="loading" @saveRecruitment="saveRecruitment" :recruitment="recruitment" />

    <div class="container-fluid">
        <RecruitmentDetailForm :error="error" :recruitment="recruitment" />
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import { ref, onMounted, reactive } from 'vue'
import RecruitmentDetailForm from './RecruitmentDetailForm.vue'

const recruitment = ref({})
// const listCandidate = ref([])

onMounted(async () => {
    await getAllCandidate()
})

// const getAllCandidate = async () => {
//     try {
//         const response = await get(`/api/v1/ung-vien/${tenViTri}`)
//         if (response) {
//             listCandidate.value = response.data
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }
</script>
