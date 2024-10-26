<template>
    <div class="p-4">
        <div class="row row-cols-md-3s g-4">
            <div class="col">
                <h4>Chờ duyệt</h4>
                <div class="mb-3" v-for="approve in listApprove" :key="approve.maDon">
                    <div class="card h-100" v-if="approve.trangThai === 1">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">REF0001</h5>
                                    <span class="status-indicator">:</span>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Mượn đồ</p>
                                    <p class="m-0">17/11/2024 - 24/11/2024</p>
                                </div>
                                <div class="row">
                                    <div class="col-6 d-flex justify-content-start fs-4">
                                        <button class="btn btn-success me-2">
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button class="btn btn-danger">
                                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                                        </button>
                                    </div>
                                    <div class="col-6 d-flex justify-content-end fs-4">
                                        <span class="badge bg-danger rounded-pill">N</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Đã phê duyệt</h4>
                <div class="mb-3" v-for="approve in listApprove" :key="approve.maDon">
                    <div class="card h-100" v-if="approve.trangThai === 2">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">REF0001</h5>
                                    <span class="status-indicator">:</span>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Mượn đồ</p>
                                    <p class="m-0">17/11/2024 - 24/11/2024</p>
                                </div>
                                <div class="row">
                                    <div class="col-6 d-flex justify-content-start fs-4">
                                        <span class="badge bg-success rounded-pill"
                                            ><i class="fa-solid fa-bars"></i
                                        ></span>
                                    </div>
                                    <div class="col-6 d-flex justify-content-end fs-4">
                                        <span class="badge bg-danger rounded-pill">N</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Từ chối</h4>
                <div class="mb-3" v-for="approve in listApprove" :key="approve.maDon">
                    <div class="card h-100" v-if="approve.trangThai === 3">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">REF0001</h5>
                                    <span class="status-indicator">:</span>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Mượn đồ</p>
                                    <p class="m-0">17/11/2024 - 24/11/2024</p>
                                </div>
                                <div class="row">
                                    <div class="col-6 d-flex justify-content-start fs-4">
                                        <span class="badge bg-success rounded-pill"
                                            ><i class="fa-solid fa-bars"></i
                                        ></span>
                                    </div>
                                    <div class="col-6 d-flex justify-content-end fs-4">
                                        <span class="badge bg-danger rounded-pill">N</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    listApprove: {
        type: Array,
    },
})
</script>