<template>
    <div class="container-fluid">
        <div class="d-flex align-items-center mb-2">
            <label for="meetingTitle" class="form-label me-2 text-nowrap" style="width: 12rem">
                Tiêu đề cuộc họp
            </label>
            <input type="text" class="form-control" id="meetingTitle" v-model="formData.tenCuocHop" />
        </div>

        <div class="row mb-3">
            <div class="d-flex align-items-center">
                <label for="start" class="form-label me-2 text-nowrap" style="width: 9rem"> Thời gian bắt đầu </label>
                <div class="w-100">
                    <input type="datetime-local" id="start" class="form-control" v-model="formData.thoiGianBatDau" />
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="d-flex align-items-center">
                <label for="end" class="form-label me-2 text-nowrap" style="width: 9rem"> Thời gian kết thúc </label>
                <div class="w-100">
                    <input type="datetime-local" id="end" class="form-control" v-model="formData.thoiGianKetThuc" />
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="d-flex align-items-center">
                <label for="meetingParticipantsSelect" class="form-label me-2 text-nowrap" style="width: 9rem">
                    Người tham gia
                </label>
                <div class="w-100">
                    <select id="meetingParticipantsSelect" class="slim-select" multiple>
                        <option v-for="staff in listStaff" :key="staff.maNhanVien" :value="staff.maNhanVien">
                            {{ staff.hoTen }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="d-flex align-items-center mb-2">
            <label for="meetingPosition" class="form-label me-2 text-nowrap" style="width: 12rem"> Vị trí họp </label>
            <input type="text" class="form-control" id="meetingPosition" v-model="formData.viTri" />
        </div>

        <div class="d-flex align-items-center mb-2">
            <label for="linkMeeting" class="form-label me-2 text-nowrap" style="width: 12rem">
                Đường dẫn cuộc họp
            </label>
            <input type="text" class="form-control" id="linkMeeting" v-model="formData.videoCallUrl" />
        </div>

        <div class="d-flex justify-content-end">
            <button class="btn btn-success" @click="saveMeeting">Lưu cuộc họp</button>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watchEffect } from 'vue'
import { get, post } from '@/stores/https'
import SlimSelect from 'slim-select'

const props = defineProps({
    event: {
        type: Object,
        default: () => ({}), // Đảm bảo props.event luôn có giá trị mặc định
    },
})

const convertToLocalDatetime = (isoDatetime) => {
    if (!isoDatetime) return '' // Xử lý nếu giá trị không tồn tại
    const date = new Date(isoDatetime)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${year}-${month}-${day}T${hours}:${minutes}`
}

const formData = reactive({
    maCuocHop: null,
    ghiChu: '',
    nguoiToChuc: '',
    tenCuocHop: '',
    thoiGianBatDau: '',
    thoiGianKetThuc: '',
    viTri: '',
    videoCallUrl: '',
})

watchEffect(() => {
    if (props.event) {
        formData.maCuocHop = props.event.maCuocHop
        formData.ghiChu = props.event.ghiChu || ''
        formData.nguoiToChuc = props.event.nguoiToChuc || ''
        formData.tenCuocHop = props.event.tenCuocHop || ''
        formData.thoiGianBatDau = convertToLocalDatetime(props.event.thoiGianBatDau)
        formData.thoiGianKetThuc = convertToLocalDatetime(props.event.thoiGianKetThuc)
        formData.viTri = props.event.viTri || ''
        formData.videoCallUrl = props.event.videoCallUrl || ''
    }
})

const listStaff = ref([])
const slimSelectInstance = ref('')

onMounted(async () => {
    await getListStaff()
    createSlimSelect()
    console.log('Form data initialized:', formData)
})

const createSlimSelect = () => {
    slimSelectInstance.value = new SlimSelect({
        select: '#meetingParticipantsSelect',
        closeOnSelect: false,
    })
}

const getListStaff = async () => {
    const response = await get('/api/v1/employees')
    listStaff.value = response.data
}

const validate = (data) => {
    if (data.thoiGianBatDau > data.thoiGianKetThuc) {
        Swal.fire({
            title: 'Lỗi định dạng',
            text: 'Thời gian bắt đầu và thời gian kết thúc không hợp lệ',
            icon: 'error',
            timer: 1500,
        })
        return true
    }
    return false
}

const saveMeeting = async () => {
    if (validate(formData)) {
        return
    }
    try {
        const response = await post('/api/v1/meetings', formData)
        if (response) {
            Swal.fire({
                title: 'Thành công',
                text: 'Lưu cuộc hợp thành công',
                icon: 'success',
                timer: 1500,
            })
        }
    } catch (error) {
        console.error(error)
        Swal.fire({
            title: 'Thất bại',
            text: 'Lưu cuộc hợp thất bại',
            icon: 'error',
            timer: 1500,
        })
    }
}
</script>


    
<style>
@import url('https://cdn.jsdelivr.net/npm/slim-select@latest/dist/slimselect.min.css');
</style>