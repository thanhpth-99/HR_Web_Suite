<template>
    <div class="container-fluid">
        <div class="d-flex align-items-center mb-2">
            <label for="maPhongBan" class="form-label me-2 text-nowrap" style="width: 12rem"> Vị trí tuyển dụng </label>
            <input type="text" class="form-control" id="viTriTuyenDUng" placeholder="Vị trí tuyển dụng" />
        </div>

        <div class="d-flex align-items-center mb-2">
            <label for="tenPhongBan" class="form-label me-2 text-nowrap" style="width: 12rem"> Tên phòng ban </label>
            <div class="w-100">
                    <select id="phongBanSelect" class="slim-select">
                        <option
                            v-for="PB in listPB"
                            :key="PB.maPhongBan"
                            :value="PB.maPhongBan"
                        >
                            {{ PB.tenPhongBan }}
                        </option>
                    </select>
                </div>
        </div>
        <div class="row mb-3">
            <div class="d-flex align-items-center">
                <label for="truongPhongSelect" class="form-label me-2 text-nowrap" style="width: 9rem">
                    Số lượng tuyển 
                </label>
                <input type="text" class="form-control" id="soLuongTuyen" placeholder="Số lượng tuyển" />
            </div>
        </div>
        <div class="d-flex justify-content-end"><button class="btn btn-success">Save</button></div>
    </div>
</template>
    
  <script setup>
import { onMounted, ref } from 'vue'
import SlimSelect from 'slim-select'
const loading = ref(false)
const listPB = ref([])
const slimSelectInstance = ref('')

onMounted(async () => {
    await getListPB()
    createSlimSelect()
})

const createSlimSelect = () => {
    slimSelectInstance.value = new SlimSelect({
        select: '#maPhongBanSelect',
        closeOnSelect: false,
    })
}
const getListPB = async () => {
    listPB.value = [
        {
            maPhongBan: 'PB01',
            tenPhongBan: 'Ban quản lí',
        },
        {
            maPhongBan: 'PB02',
            tenPhongBan: 'Ban sản xuất',
        },
    ]
}
</script>
    
<style>
@import url('https://cdn.jsdelivr.net/npm/slim-select@latest/dist/slimselect.min.css');
</style>