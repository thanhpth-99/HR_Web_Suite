<template>
    <div class="container-fluid mt-3" style="overflow-x: auto">
        <div class="row">
            <div class="head-menu border-0 border-bottom border-secondary-subtle col-12">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <router-link to="/home/addstaff" class="btn btn-primary me-2">New</router-link>
                        <h5 class="mb-0">Employees</h5>
                    </div>

                    <!-- Middle Section: Search Bar -->
                    <div class="input-group w-25">
                        <input type="text" class="form-control" v-model="searchQuery" placeholder="Search..." />
                        <span class="input-group-text" @click="filterStaffBySearchQuery()">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>

                    <div class="pagination d-flex justify-content-center align-items-center">
                        <span class="me-2">{{ startItem }}-{{ endItem }} / {{ filteredStaffs.length }}</span>
                        <button
                            class="btn btn-secondary rounded-0 me-1"
                            :disabled="currentPage === 1"
                            @click="currentPage--"
                        >
                            &lt;&lt;
                        </button>
                        <button
                            class="btn btn-secondary rounded-0"
                            :disabled="currentPage === phongBanFilter.length || startItem >= filteredStaffs.length"
                            @click="currentPage++"
                        >
                            &gt;&gt;
                        </button>
                    </div>

                    <div class="nav nav-tabs">
                        <button
                            :class="{ active: currentTab === 'table' } + ' ' + 'btn btn-secondary rounded-0 me-1 p-1'"
                            :style="{ background: currentTab === 'table' ? '#007bff' : '' }"
                            @click="currentTab = 'table'"
                        >
                            <i class="fas fa-table"></i>
                        </button>
                        <button
                            :class="
                                { active: currentTab === 'components' } + ' ' + 'btn btn-secondary rounded-0 me-1 p-1'
                            "
                            :style="{ background: currentTab === 'components' ? '#007bff' : '' }"
                            @click="currentTab = 'components'"
                        >
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-2" style="overflow-y: auto; max-height: 600px">
                    <div class="list-group border-0 border-end border-secondary-subtle" style="min-height: 600px">
                        <h6 class="mt-3 ms-2 text-uppercase fw-bold"><i class="fas fa-users"></i> Department</h6>

                        <label for="phongBanSelect" class="form-label">Phòng ban</label>
                        <select
                            v-model="phongBanFilter"
                            @change="filterStaffByPhongBan()"
                            id="phongBanSelect"
                            multiple
                            class="slim-select"
                        >
                            <option
                                v-for="phongBan in listPhongBan"
                                :key="phongBan.maPhongBan"
                                :value="phongBan.maPhongBan"
                            >
                                {{ phongBan.tenPhongBan }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="col-10" style="overflow-x: auto">
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content">
                                <div v-if="currentTab === 'table'">
                                    <table class="table table-hover align-middle table-responsive">
                                        <thead class="table-light">
                                            <tr>
                                                <th scope="col">
                                                    <input class="form-check-input" type="checkbox" />
                                                </th>
                                                <th scope="col">Họ tên</th>
                                                <th scope="col">Số điện thoại</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Trạng thái</th>
                                                <th scope="col">Next Activity Deadline</th>
                                                <th scope="col">Phòng ban</th>
                                                <th scope="col">Vị trí</th>
                                                <th scope="col">Quản lý</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="nhanVien in paginatedStaffs" :key="nhanVien.maNhanVien">
                                                <td>
                                                    <input class="form-check-input" type="checkbox" />
                                                </td>
                                                <td>{{ nhanVien.hoTen }}</td>
                                                <td>{{ nhanVien.dienThoai }}</td>
                                                <td>{{ nhanVien.email }}</td>
                                                <td><i class="fas fa-clock"></i></td>
                                                <td></td>
                                                <td>{{ nhanVien.maChucVu }}</td>
                                                <td>{{ nhanVien.maPhongBan }}</td>
                                                <td><span class="badge bg-success">T</span> TRỊNH QUỐC TƯ</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div v-if="currentTab === 'components'">
                                    <div class="p-4">
                                        <div class="row row-cols-1 row-cols-md-3 g-4">
                                            <div v-for="staff in paginatedStaffs" :key="staff.maNhanVien" class="col">
                                                <div class="card h-100">
                                                    <div class="card-body d-flex p-0">
                                                        <div class="employee-avatar">
                                                            <img
                                                                v-if="!staff.hinhAnh"
                                                                :src="staff.hinhAnh"
                                                                :alt="staff.hoTen"
                                                                class="img-fluid"
                                                            />
                                                            <div v-else>
                                                                <img
                                                                src="https://cdn.kona-blue.com/upload/kona-blue_com/post/images/2024/09/18/457/avatar-mac-dinh-11.jpg"
                                                                class="img-fluid"
                                                            />
                                                            </div>
                                                        </div>
                                                        <div class="employee-info px-3 py-0 flex-grow-1">
                                                            <div
                                                                class="d-flex justify-content-between align-items-start mt-2"
                                                            >
                                                                <h5 class="card-title">{{ staff.hoTen }}</h5>
                                                                <span class="status-indicator"></span>
                                                            </div>
                                                            <p v-if="staff.maChucVu" class="card-subtitle">
                                                                {{ staff.maChucVu }}
                                                            </p>
                                                            <p class="card-text">
                                                                <i class="bi bi-envelope"></i> hoangha@gmail.com
                                                            </p>
                                                            <p v-if="staff.dienThoai" class="card-text">
                                                                <i class="bi bi-telephone"></i> {{ staff.dienThoai }}
                                                            </p>
                                                            <div
                                                                v-if="staff.maPhongBan && staff.maPhongBan.length"
                                                                class="mt-2"
                                                            >
                                                                <!-- <span
                                                                    v-for="skill in employee.skills"
                                                                    :key="skill"
                                                                    class="badge me-1"
                                                                    :class="getSkillClass(skill)"
                                                                    >{{ skill }}</span> -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { post, get } from '@/stores/https'
import SlimSelect from 'slim-select'

const currentTab = ref('table')
const searchQuery = ref('')
const currentPage = ref(1)
const perPage = ref(12)
const totalPages = ref(0)
const filteredStaffs = ref([])
const staffs = ref([])
const listPhongBan = ref([])
const startItem = computed(() => (currentPage.value - 1) * perPage.value + 1)
const endItem = computed(() => Math.min(currentPage.value * perPage.value, filteredStaffs.value.length))
const phongBanFilter = ref([])

const getSkillClass = (skill) => {
    const classes = {
        Python: 'bg-purple text-white',
        ERP: 'bg-blue text-white',
        // Add more skill-specific classes here
    }
    return classes[skill] || 'bg-light text-dark'
}

const employees = ref([
    {
        id: 1,
        name: 'Administrator',
        email: 'quynhngadauthi2003@gmail.com',
        avatar: 'https://cdn.ketnoibongda.vn/upload/images/team/cdc1d7e2-d4b9-48c9-93fe-0ea5e97311d1-2023-09-21.jpeg',
        status: false,
        position: '',
    },
    {
        id: 2,
        name: 'CAM QUỐC BẢO LONG',
        avatar: 'https://cdn.ketnoibongda.vn/upload/images/team/cdc1d7e2-d4b9-48c9-93fe-0ea5e97311d1-2023-09-21.jpeg',
        status: true,
        position: '',
    },
    {
        id: 3,
        name: 'Cao Thục Nhi',
        position: 'BUSINESS ANALYST',
        avatar: 'https://cdn.ketnoibongda.vn/upload/images/team/cdc1d7e2-d4b9-48c9-93fe-0ea5e97311d1-2023-09-21.jpeg',
        status: true,
    },
    {
        id: 4,
        name: 'Administrator',
        email: 'quynhngadauthi2003@gmail.com',
        avatar: 'https://cdn.ketnoibongda.vn/upload/images/team/cdc1d7e2-d4b9-48c9-93fe-0ea5e97311d1-2023-09-21.jpeg',
        status: false,
        position: '',
    },
    {
        id: 5,
        name: 'CAM QUỐC BẢO LONG',
        avatar: 'https://cdn.ketnoibongda.vn/upload/images/team/cdc1d7e2-d4b9-48c9-93fe-0ea5e97311d1-2023-09-21.jpeg',
        status: true,
        position: '',
    },
    {
        id: 6,
        name: 'Cao Thục Nhi',
        position: 'BUSINESS ANALYST',
        avatar: 'https://cdn.ketnoibongda.vn/upload/images/team/cdc1d7e2-d4b9-48c9-93fe-0ea5e97311d1-2023-09-21.jpeg',
        status: true,
    },
])

onMounted(async () => {
    await getStaffs()
    await getAllPhongBan()
    createSlimSelect()
})

const getAllPhongBan = async () => {
    listPhongBan.value = [
        { maPhongBan: 'PB01', tenPhongBan: 'Phong ban 1', truongPhong: 'NV03' },
        { maPhongBan: 'PB02', tenPhongBan: 'Phong ban 2', truongPhong: 'NV02' },
        { maPhongBan: 'PB03', tenPhongBan: 'Phong ban 3', truongPhong: 'NV05' },
        { maPhongBan: 'PB04', tenPhongBan: 'Phong ban 4', truongPhong: 'NV04' },
    ]
}

const createSlimSelect = () => {
    const slimSelectInstance = new SlimSelect({
        select: '#phongBanSelect',
        closeOnSelect: false,
        onChange: () => filterStaffByPhongBan(), // Gọi hàm lọc khi có sự thay đổi
    })
}

const filterStaffByPhongBan = () => {
    const selectedOptions = document.querySelector('#phongBanSelect').selectedOptions
    phongBanFilter.value = Array.from(selectedOptions).map((option) => option.value)

    filteredStaffs.value = staffs.value.filter(
        (staff) => phongBanFilter.value.includes(staff.maPhongBan) || phongBanFilter.value.length === 0,
    )
}

const filterStaffBySearchQuery = () => {
    const query = searchQuery.value.toLowerCase()
    filteredStaffs.value = staffs.value.filter((nhanVien) => {
        const hoTen = nhanVien.hoTen ? nhanVien.hoTen.toLowerCase() : ''
        const dienThoai = nhanVien.dienThoai || ''
        const email = nhanVien.email ? nhanVien.email.toLowerCase() : ''

        return hoTen.includes(query) || dienThoai.includes(query) || email.includes(query)
    })
}

const getStaffs = async () => {
    const response = await get('employees')
    staffs.value = response.data
    filteredStaffs.value = staffs.value
    totalPages.value = Math.ceil(filteredStaffs.value.length / perPage.value)
}

const paginatedStaffs = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    const end = start + perPage.value
    return filteredStaffs.value.slice(start, end)
})
</script>

<style scoped>
.body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.head-menu {
    padding: 0.88rem 1rem;
    width: 100%;
    position: relative;
    height: calc(100% - 60px - 0.88rem * 2);
    background-color: var(--color-main);
    transition: var(--tran-05);
    border: 1px solid var(--color-border);
}
.pagination {
    margin-top: 20px;
    display: flex;
    align-items: center;
}
.pagination span {
    margin-right: 10px;
}

.card {
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-height: 100px;
}

.employee-avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.employee-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.letter-avatar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
}

.bg-purple {
    background-color: #9c27b0;
}

.bg-brown {
    background-color: #795548;
}

.employee-info {
    min-width: 0;
}

.card-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.card-subtitle {
    font-size: 0.875rem;
    color: #6c757d;
}

.card-text {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
}

.status-indicator.active {
    background-color: #ffc107;
}

.status-indicator.inactive {
    background-color: #6c757d;
}

.badge {
    font-weight: normal;
    font-size: 0.75rem;
    padding: 0.25em 0.5em;
    border-radius: 1rem;
}

.bg-purple {
    background-color: #9c27b0;
}

.bg-blue {
    background-color: #2196f3;
}
</style>
