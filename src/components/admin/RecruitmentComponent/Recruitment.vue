<template>
    <div class="container-fluid mt-3" style="overflow-x: auto">
        <HeadMenu @tab-change="setActiveTab" :activeTab="activeTab" @search="filterRecruitmentBySearchQuery"/>
        <div class="row">
            <div>
                <Card v-if="activeTab === 'card'" :listRecruitment="listRecruitment"/>
                <Table  v-if="activeTab === 'table'" :listRecruitment="listRecruitment" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { get } from '@/stores/https'

import Card from './Card.vue'
import HeadMenu from './HeadMenu.vue'
import Table from './Table.vue'

const activeTab = ref('table')
const listRecruitment = ref([])
const searchQuery = ref('')

const setActiveTab = (tab) => {
    activeTab.value = tab
}

onMounted(async () => {
    await getAllRecruitment()
})

const getAllRecruitment = async () => {
    try {
        const response = await get('/api/v1/vi-tri-tuyen-dung')
        listRecruitment.value = response.data || []
    } catch (error) {
        console.error('Error fetching recruitment data:', error)
    }
}
const applyFilters = () => {
    filteredRecruitments.value = listRecruitment.value.filter((recruitment) => {
        const matchesQuery =
            searchQuery.value === '' ||
            (recruitment.tenViTri && recruitment.tenViTri.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
            (recruitment.moTa && recruitment.moTa.toLowerCase().includes(searchQuery.value.toLowerCase()))
        return matchesQuery
    })
}
const filterRecruitmentBySearchQuery = (query) => {
    searchQuery.value = query
    applyFilters()
    console.log(query)
}


</script>
