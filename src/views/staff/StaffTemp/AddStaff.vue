<template>
    <div class="d-flex align-items-center">
        <router-link to="" @click="$router.go(-1)" class="btn btn-primary me-2">Back</router-link>
        <h5 class="mb-0">Employees</h5>
    </div>
    <div class="container">
        <form>
            <div class="form-section">
                <h3>Thêm nhân sự mới</h3>
                <p>Hãy chọn một tài khoản để tạo mới thông tin nhân sự</p>
                <div class="mb-3">
                    <label for="username" class="form-label">Chọn một tài khoản *</label>
                    <input type="text" class="form-control" id="username" placeholder="Nhập @ để nhắc tới" />
                </div>
                <div class="mb-3">
                    <label for="idMaNhanVien" class="form-label">Mã nhân sự</label>
                    <input
                        type="text"
                        v-model="staff.maNhanVien"
                        class="form-control"
                        id="idMaNhanVien"
                        placeholder="Mã nhân sự"
                    />
                    <small class="form-text text-muted">Gợi ý: Mã nhân sự gần nhất là {{ maNhanSuFinal }}</small>
                </div>
            </div>
            <div class="form-section">
                <h5>Thông tin nhân sự</h5>
                <hr />
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="idHoTen" class="form-label">Họ tên</label>
                        <input
                            type="text"
                            v-model="staff.hoTen"
                            class="form-control"
                            id="idHoTen"
                            placeholder="Họ tên"
                        />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="idEmail" class="form-label">Email</label>
                        <input
                            type="email"
                            v-model="staff.email"
                            class="form-control"
                            id="idEmail"
                            placeholder="Email"
                        />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="idDienThoai" class="form-label">Điện thoại</label>
                        <input
                            type="text"
                            v-model="staff.dienThoai"
                            class="form-control"
                            id="idDienThoai"
                            placeholder="Điện thoại"
                        />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="chucVuSelect" class="form-label">Chức danh hiện tại</label>
                        <select id="chucVuSelect" v-model="staff.maChucVu" class="slim-select">
                            <option v-for="chucVu in listChucVu" :key="chucVu.maChucVu" :value="chucVu.maChucVu">
                                {{ chucVu.tenChucVu }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="phongBanSelect" class="form-label">Phòng ban</label>
                        <select id="phongBanSelect" v-model="staff.maPhongBan" class="slim-select">
                            <option
                                v-for="phongBan in listPhongBan"
                                :key="phongBan.maPhongBan"
                                :value="phongBan.maPhongBan"
                            >
                                {{ phongBan.tenPhongBan }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="trinhDoSelect" class="form-label">Trình độ hiện tại</label>
                        <select id="trinhDoSelect" v-model="staff.maTrinhDo" class="slim-select">
                            <option v-for="trinhDo in listTrinhDo" :key="trinhDo.maTrinhDo" :value="trinhDo.maTrinhDo">
                                {{ trinhDo.tenTrinhDo }}
                            </option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="boPhanSelect" class="form-label">Bộ phận</label>
                        <select id="boPhanSelect" v-model="staff.maBoPhan" class="slim-select">
                            <option v-for="boPhan in listBoPhan" :key="boPhan.maBoPhan" :value="boPhan.maBoPhan">
                                {{ boPhan.tenBoPhan }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <button type="button" @click="saveStaff" class="btn btn-primary">Thêm nhân sự</button>
        </form>
    </div>
</template>
<script setup>
import SlimSelect from 'slim-select'
import { onMounted, reactive, ref, nextTick } from 'vue'
import { post, get } from '@/stores/https'
import router from '@/router'

onMounted(async () => {
    await getAllStaff()
    await getAllBoPhan()
    await getAllChucVu()
    await getAllTrinhDo()
    await getAllPhongBan()
    await nextTick()
    createSlimSelect()
})

const staff = reactive({
    maNhanVien: '',
    hinhAnh: '',
    hoTen: '',
    email: '',
    dienThoai: '',
    diaChi: '',
    maPhongBan: '',
    maBoPhan: '',
    maChucVu: '',
    maTrinhDo: '',
})

const listPhongBan = ref([])
const listTrinhDo = ref([])
const listChucVu = ref([])
const listBoPhan = ref([])
const maNhanSuFinal = ref('')
const createSlimSelect = () => {
    new SlimSelect({ select: '#chucVuSelect' })
    new SlimSelect({ select: '#phongBanSelect' })
    new SlimSelect({ select: '#trinhDoSelect' })
    new SlimSelect({ select: '#boPhanSelect' })
}

const saveStaff = async () => {
    try {
        const response = await post('/api/v1/employees', staff)
        if (response.success) {
            Swal.fire({
                title: 'Thành công',
                text: 'Thêm nhân sự thành công',
                icon: 'success',
                timer: 1500,
            })
            getAllStaff()
        } else {
            Swal.fire({
                title: 'Thất bại',
                text: 'Thêm nhân sự thất bại',
                icon: 'error',
                timer: 1500,
            })
            console.log(error)
        }
    } catch (error) {
        Swal.fire({
            title: 'Thất bại',
            text: 'Thêm nhân sự thất bại',
            icon: 'error',
            timer: 1500,
        })
        console.log(error)
    }
}

const getAllStaff = async () => {
    const response = await get('/api/v1/employees')
    const listNhanSu = response.data
    maNhanSuFinal.value = listNhanSu[listNhanSu.length - 1].maNhanVien
    console.log(listNhanSu)
}

const getAllPhongBan = async () => {
    listPhongBan.value = [
        {
            maPhongBan: 'PB01',
            tenPhongBan: 'Phong ban 1',
            truongPhong: 'NV03',
        },
        {
            maPhongBan: 'PB02',
            tenPhongBan: 'Phong ban 2',
            truongPhong: 'NV02',
        },
        {
            maPhongBan: 'PB03',
            tenPhongBan: 'Phong ban 3',
            truongPhong: 'NV05',
        },
        {
            maPhongBan: 'PB04',
            tenPhongBan: 'Phong ban 4',
            truongPhong: 'NV04',
        },
    ]
}
const getAllBoPhan = async () => {
    listBoPhan.value = [
        {
            maBoPhan: 'BP01',
            tenBoPhan: 'Bo phan 1',
        },
        {
            maBoPhan: 'BP02',
            tenBoPhan: 'Bo phan 2',
        },
        {
            maBoPhan: 'BP03',
            tenBoPhan: 'Bo phan 3',
        },
        {
            maBoPhan: 'BP04',
            tenBoPhan: 'Bo phan 4',
        },
    ]
}
const getAllChucVu = async () => {
    listChucVu.value = [
        {
            maChucVu: 'CV01',
            tenChucVu: 'Chuc vu 1',
        },
        {
            maChucVu: 'CV02',
            tenChucVu: 'Chuc vu 2',
        },
        {
            maChucVu: 'CV03',
            tenChucVu: 'Chuc vu 3',
        },
        {
            maChucVu: 'CV04',
            tenChucVu: 'Chuc vu 4',
        },
    ]
}
const getAllTrinhDo = async () => {
    listTrinhDo.value = [
        {
            maTrinhDo: 'TD01',
            tenTrinhDo: 'Trinh do 1',
        },
        {
            maTrinhDo: 'TD02',
            tenTrinhDo: 'Trinh do 2',
        },
        {
            maTrinhDo: 'TD03',
            tenTrinhDo: 'Trinh do 3',
        },
        {
            maTrinhDo: 'TD04',
            tenTrinhDo: 'Trinh do 4',
        },
    ]
}
</script>

<style scope>
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}
.form-section {
    margin-bottom: 20px;
}
.form-section h5 {
    margin-bottom: 10px;
}
.form-section p {
    margin-bottom: 20px;
    color: #6c757d;
}
.form-section hr {
    margin-top: 0;
}
.form-check-label {
    margin-left: 10px;
}
.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}
</style>
