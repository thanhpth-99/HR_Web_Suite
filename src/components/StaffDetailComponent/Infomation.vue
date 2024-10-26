<template>
    <form>
        <div class="row">
            <!-- Liên hệ riêng tư -->
            <div class="col-md-6">
                <h5>Thông tin cá nhân</h5>

                <!-- Địa chỉ riêng -->

                <div class="form-group row mb-3">
                    <label for="gioiTinh" class="col-sm-4 col-form-label">Giới tính</label>
                    <div class="col-sm-8">
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                v-model="props.nhanVien.gioiTinh"
                                type="radio"
                                name="gioiTinh"
                                id="nam"
                                :value="true"
                            />
                            <label class="form-check-label" for="nam">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                v-model="props.nhanVien.gioiTinh"
                                class="form-check-input"
                                type="radio"
                                name="gioiTinh"
                                id="nu"
                                :value="false"
                            />
                            <label class="form-check-label" for="nu">Nữ</label>
                        </div>
                    </div>
                </div>

                <!-- Điện thoại -->
                <div class="form-group row mb-3">
                    <label for="ngaySinh" class="col-sm-4 col-form-label">Ngày sinh</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="ngaySinh" v-model="props.nhanVien.ngaySinh" />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <!-- Giáo dục -->
                <h5>GIÁO DỤC</h5>

                <!-- Cấp độ chứng chỉ -->
                <div class="form-group row mb-3">
                    <label for="educationLevel" class="col-sm-4 col-form-label">Cấp độ chứng chỉ</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="educationLevel" value="Khác" />
                    </div>
                </div>

                <!-- Lĩnh vực nghiên cứu -->
                <div class="form-group row mb-3">
                    <label for="field" class="col-sm-4 col-form-label">Lĩnh vực nghiên cứu</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="field" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { watch, toRef } from 'vue'

const props = defineProps({
    nhanVien: Object,
})

// Sử dụng watch để theo dõi các thay đổi của nhanVien
watch(
    () => props.nhanVien,
    (newValue, oldValue) => {
        console.log('Giá trị nhanVien đã thay đổi:', newValue)
    },
    { deep: true }, // Theo dõi sâu để phát hiện các thay đổi bên trong object
)
</script>
