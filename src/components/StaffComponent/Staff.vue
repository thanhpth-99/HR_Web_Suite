<template>
    <div class="container-fluid mt-3 bg-light" style="overflow-x: auto">
        <div class="row">
            <HeadMenu
                @tab-change="setActiveTab"
                :activeTab="activeTab"
                :currentPage="currentPage"
                :totalPages="totalPages"
                @prevPage="prevPage"
                @nextPage="nextPage"
                @search="filterStaffBySearchQuery"
            />
            <div class="col-2">
                <ListgroupItem :listPhongBan="listPhongBan" @filterByPhongBan="filterByPhongBan"/>
            </div>
            <div class="col-10" style="overflow-x: auto">
                <div>
                    <StaffTable v-if="activeTab === 'table'" :listStaff="paginatedStaff" />
                    <StaffCard v-if="activeTab === 'card'" :listStaff="paginatedStaff" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeadMenu from '@/components/StaffComponent/HeadMenu.vue'
import StaffTable from '@/components/StaffComponent/StaffTable.vue'
import StaffCard from '@/components/StaffComponent/StaffCard.vue'
import ListgroupItem from '@/components/StaffComponent/ListgroupItem.vue'
import { ref, onMounted, computed } from 'vue'
import { get } from '@/stores/https'

const listStaff = ref([])
const activeTab = ref('table')
const currentPage = ref(1)
const pageSize = ref(12)
const filteredStaffs = ref([])
const phongBanFilter = ref([])
const listPhongBan = ref([])

onMounted(async () => {
    await getAllStaff()
    await getAllPhongBan()
})

const totalPages = computed(() => {
    return Math.ceil(filteredStaffs.value.length / pageSize.value)
})

const paginatedStaff = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return filteredStaffs.value.slice(start, end)
})

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

const getAllStaff = async () => {
    const response = await get('/api/v1/employees')
    listStaff.value = response.data
    filteredStaffs.value = listStaff.value
}

const getAllPhongBan = async () => {
    const response = await get('/api/v1/phong_ban')
    listPhongBan.value = response.data
}

const setActiveTab = (newTab) => {
    activeTab.value = newTab
    currentPage.value = 1 // Đặt lại trang về 1 khi chuyển tab
}

const filterStaffBySearchQuery = (query) => {
    filteredStaffs.value = listStaff.value.filter((nhanVien) => {
        const hoTen = nhanVien.hoTen ? nhanVien.hoTen.toLowerCase() : ''
        const dienThoai = nhanVien.dienThoai || ''
        const email = nhanVien.email ? nhanVien.email.toLowerCase() : ''
        return hoTen.includes(query) || dienThoai.includes(query) || email.includes(query)
    })

    if (filteredStaffs.value.length === 0) {
        Swal.fire({
            title: 'Không tìm thấy nhân viên',
            text: 'Không tìm thấy nhân viên trên',
            icon: 'error',
            timer: 1500,
        })
    }
}

const filterByPhongBan = (selectedOptions) => {
    phongBanFilter.value = selectedOptions
    filteredStaffs.value = listStaff.value.filter(
        (nhanVien) => phongBanFilter.value.includes(nhanVien.maPhongBan) || phongBanFilter.value.length === 0,
    )
}
</script>
