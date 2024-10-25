<template>
    <div class="card custom-card border-0">
        <div class="row">
            <div class="col-md-9">
                <h2 class="card-title">{{ nhanVien.hoTen }}</h2>
                <p class="text-muted">{{ nhanVien.maChucVu }}</p>
                <span class="badge bg-primary">{{ nhanVien.maNhanVien }}</span>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-6">
                <h5 class="section-title">Thông tin liên hệ</h5>
                <!-- Work Mobile -->
                <div class="row mb-3">
                    <label for="phone" class="col-sm-4 col-form-label">Số điện thoại</label>
                    <div class="col-sm-8">
                        <input
                            type="text"
                            class="form-control"
                            id="phone"
                            placeholder="Số điện thoại"
                            :value="nhanVien.dienThoai"
                        />
                    </div>
                </div>
                <!-- Work Address -->
                <div class="row mb-3">
                    <label for="address" class="col-sm-4 col-form-label">Địa chỉ</label>
                    <div class="col-sm-8">
                        <input
                            type="text"
                            class="form-control"
                            id="address"
                            :value="nhanVien.diaChi"
                            placeholder="Địa chỉ"
                        />
                    </div>
                </div>
                <!-- Work Email -->
                <div class="row mb-3">
                    <label for="email" class="col-sm-4 col-form-label">Email công việc</label>
                    <div class="col-sm-8">
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            :value="nhanVien.email"
                            placeholder="@gmail.com"
                        />
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <h5 class="section-title">Thông tin công việc</h5>
                <!-- Department -->
                <div class="row mb-3">
                    <label for="department" class="col-sm-4 col-form-label">Phòng ban</label>
                    <div class="col-sm-8">
                        <select
                            id="phongBanSelect"
                            v-model="thongTinCongViec.phongBan"
                            @change="logPhongBanOption(thongTinCongViec.phongBan)"
                            class="form-select"
                        >
                            <option value="">Chọn phòng ban</option>
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
                <!-- Job Position -->
                <div class="row mb-3">
                    <label for="viTriSelect" class="col-sm-4 col-form-label">Vị trí</label>
                    <div class="col-sm-8">
                        <select id="viTriSelect" v-model="thongTinCongViec.viTri" class="form-select">
                            <option value="">Chọn vị trí</option>
                            <option v-for="viTri in listViTri" :key="viTri.maChucVu" :value="viTri.maChucVu">
                                {{ viTri.tenChucVu }}
                            </option>
                        </select>
                    </div>
                </div>
                <!-- Manager -->
                <div class="row mb-3">
                    <label for="manager" class="col-sm-4 col-form-label">Quản lý</label>
                    <div class="col-sm-8">
                        <input
                            type="text"
                            class="form-control"
                            v-model="thongTinCongViec.truongPhong"
                            id="manager"
                            readonly
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { get } from '@/stores/https'

const listPhongBan = ref([])
const listViTri = ref([])

const thongTinCongViec = reactive({
    phongBan: '',
    viTri: '',
    truongPhong: '',
})

const props = defineProps({
    nhanVien: Object,
})

onMounted(async () => {
    // Đảm bảo `nhanVien` đã được khởi tạo trước khi chạy các hàm dưới
    console.log(props.nhanVien)
    await getAllPhongBan()
    await getAllViTri()
    thongTinCongViec.phongBan = props.nhanVien.maPhongBan
    thongTinCongViec.viTri = props.nhanVien.maChucVu
})

const logPhongBanOption = (selectedPhongBan) => {
    // Tìm đối tượng phòng ban tương ứng với mã đã chọn
    const selectedObject = listPhongBan.value.find((phongBan) => phongBan.maPhongBan === selectedPhongBan)

    if (selectedObject) {
        thongTinCongViec.truongPhong = selectedObject.truongPhong // Lưu thông tin trưởng phòng
    } else {
        thongTinCongViec.truongPhong = ''
        console.log('Không tìm thấy phòng ban tương ứng.')
    }
}

const getAllPhongBan = async () => {
    const response = await get('/api/v1/phong_ban')
    listPhongBan.value = response.data
}

const getAllViTri = async () => {
    listViTri.value = [
        { maChucVu: 'CV00', tenChucVu: 'Giám đốc' },
        { maChucVu: 'CV01', tenChucVu: 'Phó giám đốc' },
        { maChucVu: 'CV02', tenChucVu: 'Trưởng phòng' },
        { maChucVu: 'CV03', tenChucVu: 'Phó trưởng phòng' },
        { maChucVu: 'CV04', tenChucVu: 'Nhân viên' },
        { maChucVu: 'CV05', tenChucVu: 'Thực tập sinh' },
    ]
}
</script>
