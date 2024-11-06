<template>
    <div class="container-fluid mt-3" style="overflow-x: auto">
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
    updateApprove()
}

const updateApprove = async () => {
    try {
        const response = await put('/api/v1/approvals', approveInfo)
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

const setActiveTab = (tab) => {
    activeTab.value = tab
}

onMounted(async () => {
    await getUserLogin()
    await getAllApprove()
})

const getUserLogin = async () => {
    try {
        const username = sessionStorage.getItem('user')
        const response = await get('/api/v1/employees/me', { username })
        userLogin.value = response.data
    } catch (error) {
        console.error(error)
    }
}

const getAllApprove = async () => {
    try {
        const maNhanVienLogin = userLogin.value.maNhanVien
        const response = await get(`/api/v1/approvals/employee/${maNhanVienLogin}`)
        if (response) {
            listApprove.value = response.data
        }
    } catch (error) {
        console.error(error)
    }
}
</script>