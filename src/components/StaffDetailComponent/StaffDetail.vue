<template>
    <HeadMenu />
    <div class="container">
        <StaffDetailForm :nhanVien="nhanVien" />

        <StaffDetailMenu @setActiveTab="setActiveTab" :activeTab="activeTab" />
        <div class="m-3">
            <Resume v-if="activeTab === 'resume'" />
            <Infomation v-if="activeTab === 'infomation'" />
        </div>
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import Infomation from './Infomation.vue'
import StaffDetailForm from './StaffDetailForm.vue'
import StaffDetailMenu from './StaffDetailMenu.vue'
import Resume from './Resume.vue'
import { ref, onMounted } from 'vue'
import { get } from '@/stores/https'
import router from '@/router'

const nhanVien = ref({})
const activeTab = ref('infomation')

onMounted(async () => {
    await getNhanVienById()
})

const setActiveTab = (tab) => {
    activeTab.value = tab
}

const getNhanVienById = async () => {
    const { id } = router.currentRoute.value.params
    const response = await get(`/api/v1/employees/${id}`)
    nhanVien.value = response.data
}
</script>
