<template>
    <form>
        <div class="row">
            <h5>Thông tin cá nhân</h5>
            <div class="col-md-6">
                <div class="form-group row mb-3">
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
                <div class="form-group row mb-3">
                    <label for="educationLevel" class="col-sm-4 col-form-label">Căn cước công dân</label>
                    <div class="col-sm-8">
                        <input type="text" v-model="props.staff.cccd" class="form-control" id="cccd" value="cccd" />
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
