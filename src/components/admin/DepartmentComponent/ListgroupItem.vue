<template>
    <div class="vh-100 p2">
        <div class="list-group border-0 border-end border-secondary-subtle rounded-0">
            <h6 class="mt-3 ms-2 text-uppercase fw-bold"><i class="fas fa-users"></i> Department</h6>
            <label for="phongBanSelect" class="form-label">Phòng ban</label>
            <select id="phongBanSelect" multiple class="slim-select">
                <option v-for="phongBan in listPhongBan" :key="phongBan.maPhongBan" :value="phongBan.maPhongBan">
                    {{ phongBan.tenPhongBan }}
                </option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import SlimSelect from 'slim-select'

const listPhongBan = ref([])

const slimSelectInstance = ref('')
onMounted(async () => {
    await getAllPhongBan()
    createSlimSelect()
})
const getAllPhongBan = async () => {
    listPhongBan.value = [
        { maPhongBan: 'PB01', tenPhongBan: 'Phong ban 1', truongPhong: 'NV03' },
        { maPhongBan: 'PB02', tenPhongBan: 'Phong ban 2', truongPhong: 'NV02' },
        { maPhongBan: 'PB03', tenPhongBan: 'Phong ban 3', truongPhong: 'NV05' },
        { maPhongBan: 'PB04', tenPhongBan: 'Phong ban 4', truongPhong: 'NV04' },
    ]
}

const createSlimSelect = () => {
    slimSelectInstance.value = new SlimSelect({
        select: '#phongBanSelect',
        closeOnSelect: false,
    })
}
</script>