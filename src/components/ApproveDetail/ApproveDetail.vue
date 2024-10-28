<template>
    <HeadMenu @setTrangThaiApprove="setApproveInfo" :approveDetail="approveDetail" :loading="loading" />

    <div class="container">
        <ApproveDetailForm :approveDetail="approveDetail" />
        <ApproveTab @setActiveTab="setActiveTab" :activeTab="activeTab" />
        <div class="m-3">
            <Note :approveDetail="approveDetail" v-if="activeTab === 'Note'" />
            <ListApprove :approveDetail="approveDetail" v-if="activeTab === 'ListApprove'" />
        </div>
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import ApproveDetailForm from './ApproveDetailForm.vue'
import { ref, onMounted, reactive } from 'vue'
import { get, put } from '@/stores/https'
import router from '@/router'
import ApproveTab from './ApproveTab.vue'
import Note from './Note.vue'
import ListApprove from './ListApprove.vue'

const activeTab = ref('Note')
const userLogin = ref({})
const approveDetail = ref({})
const loading = ref(false)
onMounted(async () => {
    await getAproveInfoByMaDon()
    await getUserLogin()
})

const approveInfo = reactive({
    maDon: '',
    maNhanVien: '',
    trangThai: 0,
    ghiChu: '',
})

const getUserLogin = async () => {
    const username = sessionStorage.getItem('user')
    const response = await get('/api/v1/employees/me', { username })
    userLogin.value = response.data
    console.log(userLogin.value)
}

const setActiveTab = (tab) => {
    activeTab.value = tab
}

const setApproveInfo = async (maDon, trangThai, ghiChu) => {
    approveInfo.maDon = maDon
    approveInfo.maNhanVien = userLogin.value.maNhanVien
    approveInfo.trangThai = trangThai
    approveInfo.ghiChu = ghiChu
    console.log(approveInfo)
    updateApprove()
}

const updateApprove = async () => {
    const response = await put('/api/v1/approvals', approveInfo)
    if (response) {
        getAproveInfoByMaDon()
    }
}

const getAproveInfoByMaDon = async () => {
    const { id } = router.currentRoute.value.params
    const response = await get(`/api/v1/approvals/${id}`)
    approveDetail.value = response.data
    console.log(approveDetail.value)
}
</script>
