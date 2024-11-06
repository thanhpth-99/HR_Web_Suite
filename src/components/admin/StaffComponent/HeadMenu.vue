<template>
    <div class="head-menu border-0 border-bottom border-secondary-subtle col-12">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <div class="dropdown">
                    <button
                        class="btn btn-primary dropdown-toggle"
                        type="button"
                        id="drop_save"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        New
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
                            <p @click="showPopup = true" class="dropdown-item">Add staff by excel</p>
                        </li>
                    </ul>
                </div>

                <h5 class="mb-0">Employees</h5>
            </div>
            <div class="input-group w-25">
                <input type="text" class="form-control" placeholder="Search..." v-model="searchQuery" />
                <span class="input-group-text" @click="$emit('search', searchQuery)">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <div class="pagination d-flex justify-content-center align-items-center">
                <span>Trang {{ currentPage }} / {{ totalPages }}</span>
                <button
                    class="btn btn-secondary rounded-0 mx-1"
                    :disabled="currentPage === 1"
                    @click="$emit('prevPage')"
                >
                    &lt;&lt;
                </button>
                <button
                    class="btn btn-secondary rounded-0"
                    :disabled="currentPage === totalPages"
                    @click="$emit('nextPage')"
                >
                    &gt;&gt;
                </button>
            </div>
            <div class="pagination d-flex justify-content-center align-items-center">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{
                                'active text-primary': activeTab === 'table',
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
                            :class="{ 'active text-primary': activeTab === 'card', 'text-dark': activeTab !== 'card' }"
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
            <div class="modal-content p-4">
                <h2 class="modal-title">Add staff by excel</h2>
                <div class="modal-body">
                    <AddStaffByFileExcel />
                </div>
                <div class="modal-footer d-flex justify-content-end mt-2 me-2">
                    <button class="btn btn-danger" @click="showPopup = false">Đóng</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AddStaffByFileExcel from '../AddStaffByFileExcelComponent/AddStaffByFileExcel.vue'
import { ref } from 'vue'
const searchQuery = ref('')
const showPopup = ref(false)
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
</style>
