<template>
    <HeadMenu :loading="loading" @saveNhanVien="saveNhanVien" :nhanVien="nhanVien" />

    <div class="container">
        <StaffDetailForm :nhanVien="nhanVien" />

        <StaffDetailMenu @setActiveTab="setActiveTab" :activeTab="activeTab" />
        <div class="m-3">
            <Resume :nhanVien="nhanVien" v-if="activeTab === 'resume'" />
            <Infomation :nhanVien="nhanVien" v-if="activeTab === 'infomation'" />
        </div>
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import Infomation from './Infomation.vue'
import StaffDetailForm from './StaffDetailForm.vue'
import StaffDetailMenu from './StaffDetailMenu.vue'
import Resume from './Resume.vue'
import { ref, onMounted, reactive } from 'vue'
import { get, post } from '@/stores/https'
import router from '@/router'

const nhanVien = ref({})
const activeTab = ref('infomation')
const loading = ref(false)

const nhanVienInfo = reactive({
    maNhanVien: '',
    hoTen: '',
    gioiTinh: true,
    ngaySinh: '',
    dienThoai: '',
    cccd: '',
    diaChi: '',
    hinhAnh: '',
    email: '',
    maPhongBan: '',
    maBoPhan: '',
    maChucVu: '',
})

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

const saveNhanVien = async () => {
    loading.value = true
    try {
        setNhanVienInfo()
        const response = await post('/api/v1/employees', nhanVienInfo)
        if (response.success) {
            Swal.fire({
                title: 'Save nhân viên',
                text: 'Save nhân viên thành công',
                icon: 'success',
                timer: 1500,
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Save nhân viên',
            text: 'Save nhân viên thất bại',
            icon: 'error',
            timer: 1500,
        })
    } finally {
        loading.value = false
    }
}

const setNhanVienInfo = () => {
    nhanVienInfo.maNhanVien = nhanVien.value.maNhanVien
    nhanVienInfo.hoTen = nhanVien.value.hoTen
    nhanVienInfo.gioiTinh = nhanVien.value.gioiTinh
    nhanVienInfo.ngaySinh = nhanVien.value.ngaySinh
    nhanVienInfo.dienThoai = nhanVien.value.dienThoai
    nhanVienInfo.cccd = nhanVien.value.cccd
    nhanVienInfo.diaChi = nhanVien.value.diaChi
    nhanVienInfo.hinhAnh = nhanVien.value.hinhAnh
    nhanVienInfo.email = nhanVien.value.email
    nhanVienInfo.maPhongBan = nhanVien.value.maPhongBan
    nhanVienInfo.maBoPhan = nhanVien.value.maBoPhan
    nhanVienInfo.maChucVu = nhanVien.value.maChucVu

    console.log(nhanVienInfo)
}
</script>
