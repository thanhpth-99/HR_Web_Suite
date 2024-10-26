<template>
    <div class="vh-100 p2 border-0 border-end border-secondary-subtle rounded-0 pe-2">
        <div class="list-group">
            <h6 class="mt-3 ms-2 text-uppercase fw-bold"><i class="fas fa-users"></i> Department</h6>
            <label for="phongBanSelect" class="form-label">Phòng ban</label>
            <select
                id="phongBanSelect"
                v-model="listOptionPhongBan"
                multiple
                class="slim-select"
                @change="$emit('filterByPhongBan', listOptionPhongBan)"
            >
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

const slimSelectInstance = ref('')
const listOptionPhongBan = ref([])

const props = defineProps({
    listPhongBan: Array,
})
onMounted(async () => {
    createSlimSelect()
})

const createSlimSelect = () => {
    slimSelectInstance.value = new SlimSelect({
        select: '#phongBanSelect',
        closeOnSelect: false,
    })
}
</script>