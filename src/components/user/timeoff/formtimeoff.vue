<template>
    <div class="wrapper card">
        <div class="border-bottom border-2">
            <h4>{{ $t('create_onleave.title') }}</h4>
        </div>
        <div class="py-2">
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="hoTen" class="form-label">{{ $t('create_onleave.items.full_name') }}</label>
                    <input type="text" id="hoTen" class="bg-active form-control disabled" v-model="data.hoTen" disabled>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="maNhanVien" class="form-label disabled">{{ $t('create_onleave.items.employee_id') }}</label>
                    <input type="text" id="maNhanVien" class="bg-active form-control" v-model="formData.maNhanVien"
                        disabled>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-4">
                    <label for="chucVu" class="form-label">{{ $t('create_onleave.items.position') }}</label>
                    <input type="text" id="chucVu" class="bg-active form-control disabled" v-model="data.tenChucVu"
                        disabled>
                </div>
                <div class="col-md-4 pt-md-0 pt-3">
                    <label for="phongBan" class="form-label disabled">{{ $t('create_onleave.items.job_title') }}</label>
                    <input type="text" id="phongBan" class="bg-active form-control" v-model="data.tenBoPhan" disabled>
                </div>
                <div class="col-md-4 pt-md-0 pt-3">
                    <label for="phongBan" class="form-label disabled">{{ $t('create_onleave.items.department') }}</label>
                    <input type="text" id="phongBan" class="bg-active form-control" v-model="data.tenPhongBan" disabled>
                </div>
            </div>
            <div class="col-md-12">
                <label for="truongPhong" class="form-label">{{ $t('create_onleave.items.approver') }}</label>
                <input type="text" id="truongPhong" class="bg-light form-control" value="Phạm Hoàng Hà">
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="lydo" class="form-label">{{ $t('create_onleave.items.reason') }}</label>
                    <select class="form-select" id="lydo" v-model="formData.loaiDon"
                        :class="{ 'is-invalid': error.loaiDon }">
                        <option selected disabled>Chọn loại nghỉ phép</option>
                        <option>Nghỉ phép năm</option>
                        <option>Nghỉ ốm</option>
                        <option>Nghỉ thai sản</option>
                        <option>Nghỉ không lương</option>
                    </select>
                    <div class="invalid-feedback">
                        Chưa chọn lý do
                    </div>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="batdau" class="form-label">{{ $t('create_onleave.items.from_day') }}</label>
                    <input type="date" v-model="formData.ngayBatDau" id="batdau" class="bg-light form-control"
                        :class="{ 'is-invalid': error.ngayBatDau }">
                    <div class="invalid-feedback">
                        Ngày không phù hợp
                    </div>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="ketthuc" class="form-label">{{ $t('create_onleave.items.to_day') }}</label>
                    <input type="date" v-model="formData.ngayKetThuc" id="ketthuc" class="bg-light form-control"
                        :class="{ 'is-invalid': error.ngayKetThuc }">
                    <div class="invalid-feedback">
                        Ngày không phù hợp
                    </div>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-12">
                    <label for="ghichu" class="form-label">{{ $t('create_onleave.items.note') }}</label>
                    <textarea type="text" id="phone" rows="5" class="bg-light form-control"
                        v-model="formData.moTa"></textarea>
                </div>
            </div>
            <div class="py-3 pb-4 border-bottom text-center">
                <button class="btn btn-primary me-3" @click.prevent="btnCreateDonYeuCau_click">{{ $t('create_onleave.buttons.send') }}</button>
                <router-link :to="{ path: '/user/timeoff' }">
                    <button class="btn btn-outline-secondary">{{ $t('create_onleave.buttons.back') }}</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 30px 50px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin: 10px auto;
    max-width: 900px;
}
</style>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { post, get } from '@/stores/https';
import { useValidation } from '@/stores/mixin/validate_form'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const data = ref({})

const formData = reactive({
    maNhanVien: '',
    loaiDon: '',
    ngayBatDau: '',
    ngayKetThuc: '',
    moTa: ''
})
const loadInfoUser = async () => {
    try {
        const response = await get(`/api/v1/employees/${sessionStorage.getItem('maNhanVien')}`)

        if (response.success) {
            data.value = {
                hoTen: response.data.hoTen,
                maNhanVien: response.data.maNhanVien,
                tenChucVu: response.data.tenChucVu,
                tenBoPhan: response.data.tenBoPhan,
                tenPhongBan: response.data.tenPhongBan
            }

            formData.maNhanVien = data.value.maNhanVien;
        }
        else {
            await Swal.fire({
                title: 'Lỗi',
                text: 'Lấy thông tin thất bại',
                icon: 'error',
                timer: 1500,
            })
        }
    } catch (error) {
        await Swal.fire({
            title: 'Error',
            text: error,
            icon: 'error',
            timer: 1500,
        })
        console.log(error)
    }
}

const btnCreateDonYeuCau_click = async () => {
    console.log(formData)

    if (!validate()) {
        await Swal.fire({
            title: 'Có lỗi xảy',
            text: 'Error',
            icon: 'error',
            timer: 1500,
        })
        return
    }

    try {
        const response = await post('/api/v1/don-yeu-cau', formData)

        if (response.success) {
            await Swal.fire({
                title: 'Tạo đơn nghỉ phép',
                text: 'Đã gửi',
                icon: 'success',
                timer: 1500,
            })
        } else {
            await Swal.fire({
                title: 'Tạo đơn nghỉ phép',
                text: 'Gửi thất bại',
                icon: 'error',
                timer: 1500,
            })
        }
    } catch (error) {
        await Swal.fire({
            title: 'Có lỗi',
            text: 'Gửi thất bại',
            icon: 'error',
            timer: 1500,
        })
    }

}

const { validateForm } = useValidation()

const error = reactive({
    loaiDon: '',
    ngayBatDau: '',
    ngayKetThuc: ''
})

const validate = () => {
    const formRule = {
        loaiDon: {
            required: true
        },
        ngayBatDau: {
            required: true,
            compareDate: `>= ${new Date().toISOString().split('T')[0]}`
        },
        ngayKetThuc: {
            required: true,
            compareDate: `>= ${formData.ngayBatDau}`
        }
    }
    const validationData = {
        loaiDon: formData.loaiDon,
        ngayBatDau: formData.ngayBatDau,
        ngayKetThuc: formData.ngayKetThuc
    }
    Object.assign(error, validateForm(formRule, validationData))
    for (let key in error) {
        if (error[key] !== false) return false
    }
    return true
}

onMounted(async () => {
    await loadInfoUser()
})
</script>