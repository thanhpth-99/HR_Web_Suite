<template>
    <div class="container-fluid mt-3 bg-light" style="overflow-x: auto">
        <div class="row">
            <HeadMenu @tab-change="setActiveTab" :activeTab="activeTab" />
            <div>
                <Card :listApprove="listApprove" v-if="activeTab === 'card'" />
                <Table :listApprove="listApprove" v-if="activeTab === 'table'" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { get, post } from '@/stores/https'

import Card from './Card.vue'
import HeadMenu from './HeadMenu.vue'
import Table from './Table.vue'

const activeTab = ref('table')
const userLogin = ref({})
const listApprove = ref([])

const setActiveTab = (tab) => {
    activeTab.value = tab
}

onMounted(async () => {
    await getUserLogin()
    await getAllApprove()
})

const getUserLogin = async () => {
    const username = sessionStorage.getItem('user')
    const response = await get('/api/v1/employees/me', { username })
    userLogin.value = response.data
    console.log(userLogin.value)
}

const getAllApprove = async () => {
    const maNhanVienLogin = userLogin.value.maNhanVien
    const response = await get(`/api/v1/phe-duyet/${maNhanVienLogin}`)
    if (response) {
        listApprove.value = response.data
    }
    console.log(listApprove.value)
}
</script>