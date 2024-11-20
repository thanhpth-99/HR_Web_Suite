<template>
    <form>
        <div class="row">
            <div class="col-md-6">
                <h5>Thông tin cá nhân</h5>
                <div class="form-group row mb-3" :class="{ 'is-invalid': error.gioiTinh }">
                    <label for="gioiTinh" class="col-sm-4 col-form-label">Giới tính</label>
                    <div class="col-sm-8">
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                v-model="props.staff.gioiTinh"
                                type="radio"
                                name="gioiTinh"
                                id="nam"
                                :value="true"
                            />
                            <label class="form-check-label" for="nam">Nam</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                v-model="props.staff.gioiTinh"
                                class="form-check-input"
                                type="radio"
                                name="gioiTinh"
                                id="nu"
                                :value="false"
                            />
                            <label class="form-check-label" for="nu">Nữ</label>
                        </div>
                        <!-- Hiển thị thông báo lỗi -->
                        <div v-if="error.gioiTinh" class="invalid-feedback">
                            {{ error.gioiTinh }}
                        </div>
                    </div>
                </div>

                <!-- Điện thoại -->
                <div class="form-group row mb-3">
                    <label for="ngaySinh" class="col-sm-4 col-form-label">Ngày sinh</label>
                    <div class="col-sm-8">
                        <div class="mb-3">
                            <input type="date" class="form-control" v-model="props.staff.ngaySinh" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <h5>GIÁO DỤC</h5>
                <div class="form-group row mb-3">
                    <label for="educationLevel" class="col-sm-4 col-form-label">Cấp độ chứng chỉ</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="educationLevel" value="Khác" />
                    </div>
                </div>
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
const props = defineProps({
    staff: Object,
    error: Object,
})
</script>
