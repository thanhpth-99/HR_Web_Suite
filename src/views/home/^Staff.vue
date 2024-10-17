<template>
    <div class="container-fluid p-5">
        <div class="row">
            <div class="col-6">
                <h2>Quản lý nhân viên</h2>
            </div>
            <div class="col-6 mb-4">
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Tìm kiếm"
                        v-model="search"
                        @input="filterStaffs"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                    <span class="input-group-text btn btn-success" id="basic-addon1">Tìm</span>
                </div>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-light table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col" class="locked">Mã nhân viên</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Họ tên</th>
                                <th scope="col">Giới tính</th>
                                <th scope="col">Điện thoại</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Phòng ban</th>
                                <th scope="col">Bộ phận</th>
                                <th scope="col">Chức vụ</th>
                                <th scope="col">Trình độ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="staff in paginatedStaffs" :key="staff.maNhanVien">
                                <td class="locked">{{ staff.maNhanVien }}</td>
                                <td>{{ staff.hinhAnh }}</td>
                                <td>{{ staff.hoTen }}</td>
                                <td>{{ staff.gioiTinh ? 'Nam' : 'Nữ' }}</td>
                                <td>{{ staff.dienThoai }}</td>
                                <td>{{ staff.diaChi }}</td>
                                <td>{{ staff.maPhongBan }}</td>
                                <td>{{ staff.maBoPhan }}</td>
                                <td>{{ staff.maChucVu }}</td>
                                <td>{{ staff.maTrinhDo }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item" :class="{ disabled: currentPage === 1 }">
                            <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
                        </li>
                        <li
                            class="page-item"
                            v-for="page in totalPages"
                            :key="page"
                            :class="{ active: currentPage === page }"
                        >
                            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                            <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { post, get } from '@/stores/https'
import { useI18n } from 'vue-i18n'

const search = ref('')
const currentPage = ref(1)
const perPage = ref(10)
const filteredStaffs = ref([])
const staffs = ref([])

onMounted(() => {
    getStaffs()
})

const paginatedStaffs = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    const end = start + perPage.value
    return filteredStaffs.value.slice(start, end)
})

// Tính tổng số trang
const totalPages = computed(() => {
    return Math.ceil(filteredStaffs.value.length / perPage.value)
})

// Chuyển trang
const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}

// Lọc danh sách nhân viên dựa trên giá trị tìm kiếm
const filterStaffs = () => {
    if (search.value) {
        filteredStaffs.value = staffs.value.filter((staff) =>
            staff.hoTen.toLowerCase().includes(search.value.toLowerCase()),
        )
    } else {
        filteredStaffs.value = staffs.value
    }
    currentPage.value = 1 // Reset về trang đầu sau khi tìm kiếm
}
const getStaffs = async () => {
    const response = await get('employees')
    staffs.value = response.data
    filteredStaffs.value = staffs.value
}
</script>
