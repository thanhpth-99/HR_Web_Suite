<template>
    <table class="table table-bordered text-center mt-1">
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
                <td v-for="(day, index) in week" :key="day" class="day-cell">
                    <div  class="cell-content">
                        <div class="d-flex justify-content-between align-items-center">
                            <b>{{ day }}</b>
                            <i v-if="index < 6 && day" class="fa-solid fa-user-check text-success"></i>                         
                        </div>
                        <div class="d-flex justify-content-between align-items-center text-success" v-if="index < 6 && day">
                            <span>In: 8:30</span>
                            <span>Out: 17:30</span>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { computed } from 'vue';
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
.table-bordered {
    border: 1px solid #dee2e6;
}

th {
    background-color: var(--color-sidebar) !important;
    color: white;
}

td.day-cell {
    width: 100px;
    height: 100px;
    vertical-align: top;
    padding: 8px 12px;
}

.cell-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

span, .fa-solid {
    font-size: 14px;
}
</style>
