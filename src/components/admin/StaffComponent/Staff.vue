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
                <ListgroupItem :departments="departments" @filterStaffByDepartment="filterStaffByDepartment" />
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
import HeadMenu from './HeadMenu.vue'
import StaffTable from './StaffTable.vue'
import StaffCard from './StaffCard.vue'
import ListgroupItem from './ListgroupItem.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { get } from '@/stores/https'

const listStaff = ref([])
const activeTab = ref('table')
const currentPage = ref(1)
const pageSize = ref(12)
const filteredStaffs = ref([])
const departmentFilter = ref([])
const searchQuery = ref('')
const departments = ref([])

onMounted(async () => {
    await getAllStaff()
    await getDepartments()
})

const getAllStaff = async () => {
    const response = await get('/api/v1/employees')
    listStaff.value = response.data
    applyFilters() // Gọi lọc ngay sau khi có dữ liệu ban đầu
}

const getDepartments = async () => {
    const response = await get('/api/v1/phong_ban')
    departments.value = response.data
}

// Hàm applyFilters để lọc dựa trên cả phòng ban và từ khóa tìm kiếm
const applyFilters = () => {
    filteredStaffs.value = listStaff.value.filter((staff) => {
        const matchesDepartment =
            departmentFilter.value.length === 0 || departmentFilter.value.includes(staff.maPhongBan)
        const matchesQuery =
            searchQuery.value === '' ||
            (staff.hoTen && staff.hoTen.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
            (staff.dienThoai && staff.dienThoai.includes(searchQuery.value)) ||
            (staff.email && staff.email.toLowerCase().includes(searchQuery.value.toLowerCase()))
        return matchesDepartment && matchesQuery
    })
    if (filteredStaffs.value.length === 0) {
        Swal.fire({
            title: 'Không tìm thấy nhân viên',
            text: 'Không tìm thấy nhân viên với các tiêu chí đã chọn',
            icon: 'error',
            timer: 1500,
        })
    }
}

// Gọi applyFilters khi thay đổi từ khóa tìm kiếm hoặc phòng ban
const filterStaffBySearchQuery = (query) => {
    searchQuery.value = query
    applyFilters()
}

const filterStaffByDepartment = (selectedOptions) => {
    departmentFilter.value = selectedOptions
    applyFilters()
}

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

const setActiveTab = (newTab) => {
    activeTab.value = newTab
    currentPage.value = 1
}
</script>

