<template>
    <div class="container-fluid mt-3 bg-light" style="overflow-x: auto">
        <HeadMenu @tab-change="setActiveTab" :activeTab="activeTab" />
        <div class="row">
            <div>
                <Card @setTrangThaiApprove="setApproveInfo" :listApprove="listApprove" v-if="activeTab === 'card'" />
                <Table @setTrangThaiApprove="setApproveInfo" :listApprove="listApprove" v-if="activeTab === 'table'" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, reactive } from 'vue'
import { get, put } from '@/stores/https'

import Card from './Card.vue'
import HeadMenu from './HeadMenu.vue'
import Table from './Table.vue'

const activeTab = ref('table')
const userLogin = ref({})
const listApprove = ref([])
const approveInfo = reactive({
    maDon: '',
    maNhanVien: '',
    trangThai: 0,
    ghiChu: '',
})

const setApproveInfo = async (maDon, trangThai, ghiChu) => {
    approveInfo.maDon = maDon
    approveInfo.maNhanVien = userLogin.value.maNhanVien
    approveInfo.trangThai = trangThai
    approveInfo.ghiChu = ghiChu
    console.log(approveInfo)
    updateApprove()
}

const updateApprove = async () => {
    const response = await put('/api/v1/phe-duyet', approveInfo)
    if (response) {
        getAllApprove()
    }
}

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