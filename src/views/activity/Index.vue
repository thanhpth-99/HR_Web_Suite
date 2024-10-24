<template>
    <div>
        <Aside @toggle-sidebar="handleToggleSidebar" />
        <article>
            <!--  Start Header  -->
            <Header />
            <!--  End Header  -->
            <!--  Start Main  -->
            <main class="container-fluid" :class="{ close: !isShow }" >
                <!-- <div class="card border-3 border-black p-3" style="background-color: transparent;"> -->
                    <!-- Lắng nghe sự kiện từ HeaderCalendar lấy tháng bà năm -->
                    <!-- <HeaderCalendar @updateDate="updateMonthYear" /> -->
                    <!-- Truyền tháng và năm xuống Table -->
                    <!-- <Table :month="selectedMonth" :year="selectedYear" /> -->
                <!-- </div> -->
                 <TableManager />
            </main>
            <!--  End Main  -->
        </article>
        <!--  End Home  -->
    </div>
</template>

<script setup>
import Header from '@/components/main/Header.vue';
import Aside from '@/components/main/Aside.vue';
import HeaderCalendar from '@/components/activity/HeaderUser.vue';
import Table from '@/components/activity/TableUser.vue';
import { ref } from 'vue';
import TableManager from '@/components/activity/TableManager.vue';

const isShow = ref(true);
const selectedMonth = ref(new Date().getMonth() + 1);
const selectedYear = ref(new Date().getFullYear());

// Hàm cập nhật tháng và năm từ HeaderCalendar
const updateMonthYear = ({ month, year }) => {
    selectedMonth.value = month;
    selectedYear.value = year;
};

const handleToggleSidebar = (show) => {
    isShow.value = show;
};
</script>
<style scoped>
main {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 18.5%;
    width: 80%;
    display: inline-block;
    transition: var(--tran-04);
}

main.close {
    margin-left: 6.5%;
    width: 92%;
    display: inline-block;
    transition: var(--tran-05);
}
</style>