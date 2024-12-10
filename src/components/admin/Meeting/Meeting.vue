<template>
    <div class="container mt-4">
        <FullCalendar :options="calendarOptions" />
    </div>
    <div :class="['popup', { show: showPopup }]" tabindex="-1" :aria-hidden="!showPopup">
        <div class="popup-content modal-dialog">
            <div class="modal-content p-4">
                <h2 class="modal-title border-bottom mb-4 text-center">Meeting detail</h2>
                <div class="modal-body">
                    <MeetingDetail :event="selectedEvent" />
                </div>
                <div class="modal-footer d-flex justify-content-end align-items-end">
                    <i @click="showPopup = false" class="text-danger fs-3 fa-solid fa-circle-xmark"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import { get } from '@/stores/https'
import MeetingDetail from './MeetingDetail.vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import vn from '@fullcalendar/core/locales/vi'
import en from '@fullcalendar/core/locales/en-gb'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const selectedEvent = ref({
    maCuocHop: null,
    tenCuocHop: '',
    thoiGianBatDau: '',
    thoiGianKetThuc: '',
    viTri: '',
    ghiChu: '',
    nguoiToChuc: '',
    videoCallUrl: '',
})
const showPopup = ref(false)
const listMeeting = ref([])
const nguoiToChuc = sessionStorage.getItem('user')

const calendarEvents = computed(() =>
    listMeeting.value.map((meeting) => ({
        id: meeting.maCuocHop,
        title: meeting.tenCuocHop,
        start: meeting.thoiGianBatDau,
        end: meeting.thoiGianKetThuc,
        location: meeting.viTri,
        description: meeting.ghiChu,
        organizer: meeting.nguoiToChuc,
        url: meeting.videoCallUrl,
    })),
)

watch(locale, (newLang) => {
    calendarOptions.value.locale = newLang === 'vn' ? vn : en
})

// Cập nhật sự kiện khi calendarEvents thay đổi
watch(calendarEvents, (newEvents) => {
    calendarOptions.value.events = newEvents
})

// Khởi tạo calendarOptions
const calendarOptions = ref({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locales: [vn, en],
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth,timeGridFourDay',
    },
    editable: true,
    views: {
        timeGridFourDay: {
            type: 'timeGrid',
            duration: { days: 4 },
            buttonText: '4 days',
        },
    },
    eventClick: function (info) {
        showPopup.value = true
        selectedEvent.value = {
            maCuocHop: info.event.id,
            tenCuocHop: info.event.title,
            thoiGianBatDau: info.event.start.toISOString(),
            thoiGianKetThuc: info.event.end?.toISOString(),
            viTri: info.event.extendedProps.location,
            ghiChu: info.event.extendedProps.description,
            nguoiToChuc: info.event.extendedProps.organizer,
            videoCallUrl: info.event.extendedProps.url,
        }
        info.jsEvent.preventDefault()
        console.log(selectedEvent.value)
    },
    dateClick: function (info) {
        showPopup.value = true
        selectedEvent.value = {
            maCuocHop: null,
            tenCuocHop: 'New Event',
            thoiGianBatDau: info.dateStr,
            thoiGianKetThuc: null,
            viTri: '',
            ghiChu: '',
            nguoiToChuc: nguoiToChuc,
            videoCallUrl: '',
        }
    },
    events: calendarEvents.value,
})

// Fetch dữ liệu khi component được mount
onMounted(async () => {
    await getMeetings()
    console.log(calendarEvents.value)
})

const getMeetings = async () => {
    try {
        const response = await get('/api/v1/meetings')
        listMeeting.value = response.data
    } catch (error) {
        console.error(error)
    }
}
</script>



<style scoped>
.head-menu {
    padding: 0.88rem 1rem;
    width: 100%;
    position: relative;
    height: calc(100% - 60px - 0.88rem * 2);
    background-color: var(--color-main);
    transition: var(--tran-05);
    border: 1px solid var(--color-border);
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: start;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.popup.show {
    opacity: 1;
    visibility: visible;
}

.popup-content {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-20px);
    transition: transform 0.3s ease;
    max-width: 500px;
    width: 90%;
    margin-top: 1rem;
}

.popup.show .popup-content {
    transform: translateY(0);
}
.modal-footer {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
}
</style>