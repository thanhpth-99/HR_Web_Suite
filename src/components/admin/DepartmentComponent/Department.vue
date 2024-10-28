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
                @search="filterDepartmentBySearchQuery"
            />
            <div class="col-12" style="overflow-x: auto">
                <div>
                    <DepartmentTable v-if="activeTab === 'table'" :listPhongBan="paginatedPhongBan" />
                    <DepartmentCard v-if="activeTab === 'card'" :listPhongBan="paginatedPhongBan" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import DepartmentTable from './DepartmentTable.vue'
import DepartmentCard from './DepartmentCard.vue'
import { ref, onMounted, computed } from 'vue'
import { get } from '@/stores/https'

const listPhongBan = ref([])
const activeTab = ref('table')
const currentPage = ref(1)
const pageSize = ref(6)
const filteredDepartments = ref([])

onMounted(async () => {
    await getAllPhongBan()
})

const totalPages = computed(() => {
    return Math.ceil(filteredDepartments.value.length / pageSize.value)
})

const paginatedPhongBan = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return filteredDepartments.value.slice(start, end)
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

const getAllPhongBan = async () => {
    const response = await get('/api/v1/phong_ban')
    listPhongBan.value = response.data
    filteredDepartments.value = listPhongBan.value
}

const setActiveTab = (newTab) => {
    activeTab.value = newTab
    currentPage.value = 1 // Đặt lại trang về 1 khi chuyển tab
}

const filterDepartmentBySearchQuery = (query) => {
    filteredDepartments.value = listPhongBan.value.filter((phongBan) => {
        const tenPhongBan = phongBan.tenPhongBan ? phongBan.tenPhongBan.toLowerCase() : ''
        const truongPhong = phongBan.truongPhong ? phongBan.truongPhong.toLowerCase() : ''
        return tenPhongBan.includes(query) || truongPhong.includes(query)
    })
    if (filteredDepartments.value.length === 0) {
        Swal.fire({
            title: 'Không tìm thấy phòng ban',
            text: 'Không tìm thấy phòng ban trên',
            icon: 'error',
            timer: 1500,
        })
    }
}
</script>
