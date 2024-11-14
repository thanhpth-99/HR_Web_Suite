<template>
    <div class="container-fluid">
        <!-- Mã phòng ban -->
        <div class="d-flex align-items-center mb-2">
            <label for="maPhongBan" class="form-label me-2 text-nowrap" style="width: 12rem"> Mã phòng ban </label>
            <input type="text" class="form-control" id="maPhongBan" placeholder="Mã phòng ban" />
        </div>

        <!-- Tên phòng ban -->
        <div class="d-flex align-items-center mb-2">
            <label for="tenPhongBan" class="form-label me-2 text-nowrap" style="width: 12rem"> Tên phòng ban </label>
            <input type="text" class="form-control" id="tenPhongBan" placeholder="Tên phòng ban" />
        </div>
        <div class="row mb-3">
            <div class="d-flex align-items-center">
                <label for="truongPhongSelect" class="form-label me-2 text-nowrap" style="width: 9rem">
                    Tên trưởng phòng
                </label>
                <div class="w-100">
                    <select id="truongPhongSelect" class="slim-select">
                        <option
                            v-for="leadStaff in listLeadStaff"
                            :key="leadStaff.maNhanVien"
                            :value="leadStaff.maNhanVien"
                        >
                            {{ leadStaff.hoTen }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end"><button class="btn btn-success">Save</button></div>
    </div>
</template>
    
  <script setup>
import { onMounted, ref } from 'vue'
import SlimSelect from 'slim-select'
const loading = ref(false)
const listLeadStaff = ref([])
const slimSelectInstance = ref('')

onMounted(async () => {
    await getListLeadStaff()
    createSlimSelect()
})

const createSlimSelect = () => {
    slimSelectInstance.value = new SlimSelect({
        select: '#truongPhongSelect',
        closeOnSelect: false,
    })
}
const getListLeadStaff = async () => {
    listLeadStaff.value = [
        {
            maNhanVien: 'NV01',
            hoTen: 'Nguyen Van A',
        },
        {
            maNhanVien: 'NV02',
            hoTen: 'Nguyen Van B',
        },
        {
            maNhanVien: 'NV03',
            hoTen: 'Nguyen Van C',
        },
        {
            maNhanVien: 'NV04',
            hoTen: 'Nguyen Van E',
        },
        {
            maNhanVien: 'NV05',
            hoTen: 'Nguyen Van F',
        },
    ]
}
</script>
    
<style>
@import url('https://cdn.jsdelivr.net/npm/slim-select@latest/dist/slimselect.min.css');
</style>