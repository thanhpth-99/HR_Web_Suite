<template>
    <HeadMenu :loading="loading" @saveNhanVien="saveStaff" :staff="staff" />

    <div class="container-fluid">
        <StaffDetailForm :error="error" :staff="staff" :candidate="candidate" />
        <StaffDetailMenu @setActiveTab="setActiveTab" :activeTab="activeTab" />
        <div class="m-3">
            <Resume :staff="staff" v-if="activeTab === 'resume'" />
            <Infomation :error="error" :staff="staff" v-if="activeTab === 'infomation'" />
        </div>
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import Infomation from './Infomation.vue'
import StaffDetailForm from './StaffDetailForm.vue'
import StaffDetailMenu from './StaffDetailMenu.vue'
import Resume from './Resume.vue'
import { ref, onMounted, reactive, onUnmounted } from 'vue'
import { get, post } from '@/stores/https'
import router from '@/router'
import { useValidation } from '@/stores/mixin/validate_form'

const staff = ref({})
const activeTab = ref('infomation')
const loading = ref(false)
const { validateForm } = useValidation()
const candidate = ref({})
const maNhanVien = ref('')
const error = reactive({
    hoTen: '',
    dienThoai: '',
    email: '',
    maPhongBan: '',
    maChucVu: '',
})

onMounted(async () => {
    maNhanVien.value = router.currentRoute.value.params.id
    if (maNhanVien.value) {
        await getStaffById()
    } else {
        candidate.value = JSON.parse(sessionStorage.getItem('selectedCandidate'))
        mapToNhanVien(candidate.value)
    }
})

onUnmounted(() => {
    sessionStorage.removeItem('selectedCandidate')
})

const mapToNhanVien = (candidate) => {
    if (candidate) {
        staff.value.hoTen = candidate.hoTen
        staff.value.email = candidate.email
        staff.value.cccd = candidate.cccd
        staff.value.dienThoai = candidate.dienThoai
        staff.value.diaChi = candidate.diaChi
        staff.value.ngaySinh = candidate.ngaySinh
        staff.value.gioiTinh = candidate.gioiTinh
        staff.value.hinhAnh = candidate.hinhAnh
    }
}

const validate = () => {
    const formRule = {
        hoTen: { required: true },
        dienThoai: { pattern: /^[0-9]{10}$/ },
        email: { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
        maPhongBan: { required: true },
        maChucVu: { required: true },
    }

    Object.assign(error, validateForm(formRule, staff.value))
    for (let key in error) {
        if (error[key] !== false) return false
    }
    return true
}

const staffInfo = reactive({
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
    maBoPhan: 'PB01',
    maChucVu: '',
})

const setActiveTab = (tab) => {
    activeTab.value = tab
}

const getStaffById = async () => {
    const id = maNhanVien.value
    try {
        const response = await get(`/api/v1/employees/${id}`)
        staff.value = response.data
        console.log(staff.value)
    } catch (error) {
        console.error(error)
    }
}

const saveStaff = async () => {
    if (!validate()) {
        Swal.fire({
            title: 'Save staff',
            text: 'Nhân viên không đúng định dạng',
            icon: 'error',
            timer: 1500,
        })
        console.log(staffInfo)
        return
    }

    loading.value = true
    try {
        setStaffInfo()
        const response = await post('/api/v1/employees', staffInfo)
        if (response.success) {
            Swal.fire({
                title: 'Save staff',
                text: 'Save staff successfully',
                icon: 'success',
                timer: 1500,
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Save staff',
            text: 'Failed to save staff',
            icon: 'error',
            timer: 1500,
        })
    } finally {
        loading.value = false
    }
}

const setStaffInfo = () => {
    staffInfo.maNhanVien = staff.value.maNhanVien
    staffInfo.hoTen = staff.value.hoTen
    staffInfo.gioiTinh = staff.value.gioiTinh
    staffInfo.ngaySinh = staff.value.ngaySinh
    staffInfo.dienThoai = staff.value.dienThoai
    staffInfo.cccd = staff.value.cccd
    staffInfo.diaChi = staff.value.diaChi
    staffInfo.hinhAnh = staff.value.hinhAnh
    staffInfo.email = staff.value.email
    staffInfo.maPhongBan = staff.value.maPhongBan
    staffInfo.maBoPhan = 'BP01'
    staffInfo.maChucVu = staff.value.maChucVu
}
</script>
