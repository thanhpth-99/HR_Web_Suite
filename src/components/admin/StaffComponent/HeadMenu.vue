<template>
    <div class="head-menu border-0 border-bottom border-secondary-subtle col-12">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <div class="dropdown">
                    <button
                        class="btn btn-primary d-flex align-items-center me-2"
                        type="button"
                        id="drop_save"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        New <span class="material-symbols-outlined ms-1">keyboard_arrow_down</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="drop_save">
                        <li>
                            <router-link :to="{ path: '/admin/staff/AddStaff' }" class="dropdown-item">New</router-link>
                        </li>
                        <li>
                            <!-- <router-link
                                :to="{ path: '/admin/staff/AddStaffByFileExcel' }"
                                @click="showPopup = true"
                                class="dropdown-item"
                                ></router-link
                            > -->
                            <span @click="showPopup = true" class="dropdown-item">Add staff by excel</span>
                        </li>
                    </ul>
                </div>

                <h5 class="mb-0">Employees</h5>
            </div>

            <div class="form-group fs has-search me-2">
                <span class="material-symbols-outlined form-control-feedback">search</span>
                <input
                    type="search"
                    class="form-control"
                    @input="$emit('search', searchQuery)"
                    placeholder="Search"
                    v-model="searchQuery"
                />
            </div>

            <div class="pagination d-flex justify-content-center align-items-center">
                <span>Trang {{ currentPage }} / {{ totalPages }}</span>
                <button
                    class="btn btn-secondary rounded-0 mx-1 d-flex align-items-center"
                    :disabled="currentPage === 1"
                    @click="$emit('prevPage')"
                >
                    <span class="material-symbols-outlined"> keyboard_double_arrow_left </span>
                </button>
                <button
                    class="btn btn-secondary rounded-0 d-flex align-items-center"
                    :disabled="currentPage === totalPages"
                    @click="$emit('nextPage')"
                >
                    <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
                </button>
            </div>
            <div class="pagination d-flex justify-content-center align-items-center">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{
                                'active': activeTab === 'table',
                                'text-dark': activeTab !== 'table',
                            }"
                            @click.prevent="$emit('tab-change', 'table')"
                            href="#"
                        >
                            <i class="fas fa-table"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ 'active': activeTab === 'card', 'text-dark': activeTab !== 'card' }"
                            @click.prevent="$emit('tab-change', 'card')"
                            href="#"
                        >
                            <i class="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div :class="['popup', { show: showPopup }]" tabindex="-1">
        <div class="popup-content modal-dialog">
            <div class="modal-content p-4 border-0">
                <h2 class="modal-title border-bottom mb-4">Add staff by excel</h2>
                <div class="modal-body border-none">
                    <AddStaffByFileExcel />
                </div>
                <div class="modal-footer d-flex justify-content-end align-items-end">
                    <i @click="showPopup = false" class="text-danger fs-3 fa-solid fa-circle-xmark"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- <div :class="['popup', { show: showPopup }]" tabindex="-1">
        <div class="popup-content modal-dialog">
            <div class="modal-content p-4">
                <h2 class="modal-title">Add staff by excel</h2>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer d-flex justify-content-end mt-2 me-2">
                    <button class="btn btn-danger" @click="showPopup = false">Đóng</button>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import AddStaffByFileExcel from '../AddStaffByFileExcelComponent/AddStaffByFileExcel.vue'
import { ref } from 'vue'
const searchQuery = ref('')
const showPopup = ref(false)

const emit = defineEmits(['tab-change', 'prevPage', 'nextPage', 'search'])

const props = defineProps({
    activeTab: {
        type: String,
        required: true,
    },
    currentPage: {
        type: Number,
        default: 1,
    },
    totalPages: {
        type: Number,
        default: 1,
    },
})
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

.dropdown-menu {
  min-width: 190px;
  padding: 8px;
  border-radius: 1rem;
  background-color: #fff;
  border: 1px solid #e4e4e7;
}

.dropdown-item {
  font-size: 0.875rem;
  padding: 8px;
  border-radius: 0.625rem;
  transition: all 0.2s ease;
  color: #000;
}

.dropdown-item:hover {
  background-color: #f4f4f5;
  color: #000;
}

.dropdown-item:focus {
  background-color: #f4f4f5;
  color: #000;
}

.dropdown-item:active {
  background-color: #f4f4f5;
  color: #000;
}

.nav-tabs {
    background-color: #f4f4f5 !important;
    border-radius: 0.75rem !important;
    padding: 6px !important;
    min-width: fit-content !important;
}

.nav-link {
    padding: 6px 12px !important;
    border: none !important;
    background-color: transparent !important;
    color: #52525b !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    border-radius: calc(0.75rem - 2px) !important;
    font-size: 0.875rem !important;
}

.nav-link.active {
    background-color: #fff !important;
    color: #000 !important;
    border: none !important;
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
</style>
