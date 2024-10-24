<template>
    <table class="table text-center table-bordered mt-1 ">
        <thead>
            <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="week in calendarRows" :key="week">
                <td v-for="day in week" :key="day" style="height: 100px;" >
                    <div class="d-flex flex-column align-content-around justify-content-between" style="height: 100%;">
                        <div class="d-flex justify-content-between align-items-center">
                            <i class="fa-solid fa-user-check text-success" v-if="day" ></i>
                            {{ day }}
                        </div>
                        <div class="d-flex justify-content-between align-items-center text-success" v-if="day">
                            <span>In: 8:30:00</span>
                            <span>Out: 17:30:00</span>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// Receive month and year as props
const props = defineProps(['month', 'year']);

const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
const firstDayOfMonth = computed(() => new Date(props.year, props.month - 1, 1).getDay());

const calendarRows = computed(() => {
    const days = [];
    const totalDays = daysInMonth(props.month, props.year);
    let week = new Array(firstDayOfMonth.value === 0 ? 6 : firstDayOfMonth.value - 1).fill('');

    for (let day = 1; day <= totalDays; day++) {
        week.push(day);
        if (week.length === 7) {
            days.push(week);
            week = [];
        }
    }

    if (week.length > 0) {
        while (week.length < 7) {
            week.push('');
        }
        days.push(week);
    }

    return days;
});
</script>
<style scoped>
span {
    font-size: 12px;
}
</style>