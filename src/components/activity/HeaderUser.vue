<template>
    <div class="col-12 row m-0 p-0 align-items-center text-center my-3 fw-bold">
        <h2 class="text-start text-black mb-1 col-5">Theo dõi chấm công</h2>
        <div class="col-5 row justify-content-center align-items-center">
            <select v-model="month" class="form-select mx-2 fw-bold" style="width: 150px;" @change="onMonthChange">
                <option v-for="(monthName, index) in monthNames" :value="index + 1" :key="index">
                    Tháng {{ monthName }}
                </option>
            </select>
            {{ year }}
        </div>
        <div class="col-1">
            <i class="fas fa-chevron-left fs-3 px-3 py-2 bg-danger text-white rounded-3" @click="prevMonth"></i>
        </div>
        <div class="col-1">
            <i class="fas fa-chevron-right fs-3 px-3 py-2 bg-danger text-white rounded-3" @click="nextMonth"></i>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Month and year state
const month = ref(new Date().getMonth() + 1);
const year = ref(new Date().getFullYear());

// Month names
const monthNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// Emit month and year when they change
const emit = defineEmits(['updateDate']);
watch([month, year], () => {
    emit('updateDate', { month: month.value, year: year.value });
});

// Functions to change month
const nextMonth = () => {
    if (month.value === 12) {
        month.value = 1;
        year.value++;
    } else {
        month.value++;
    }
};

const prevMonth = () => {
    if (month.value === 1) {
        month.value = 12;
        year.value--;
    } else {
        month.value--;
    }
};
</script>
