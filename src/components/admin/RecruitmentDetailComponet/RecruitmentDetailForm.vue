<template>
    <div class="p-4">
        <div class="row row-cols-md-3s g-4">
            <div class="col">
                <h4>Tạo và cập nhật hồ sơ</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div class="card h-100" v-if="candidate.trangThai === 1">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">{{ candidate.maUngVien }}</h5>
                                    <span class="status-indicator">:</span>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 3, '')"
                                        >
                                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                                        </button>
                                    </div>
                                    <div class="col-4 d-flex justify-content-end fs-4">
                                        <span class="badge bg-danger rounded-pill">N</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Phỏng Vấn</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div class="card h-100" v-if="candidate.trangThai === 2">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">{{ candidate.maUngVien }}</h5>
                                    <span class="status-indicator">:</span>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 3, '')"
                                        >
                                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                                        </button>
                                    </div>
                                    <div class="col-4 d-flex justify-content-end fs-4">
                                        <span class="badge bg-danger rounded-pill">N</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Chấp nhận</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div class="card h-100" v-if="candidate.trangThai === 3">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">{{ candidate.maUngVien }}</h5>
                                    <span class="status-indicator">:</span>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 3, '')"
                                        >
                                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                                        </button>
                                    </div>
                                    <div class="col-4 d-flex justify-content-end fs-4">
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
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div class="card h-100" v-if="candidate.trangThai === 4">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">{{ candidate.maUngVien }}</h5>
                                    <span class="status-indicator">:</span>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThaiApprove', candidate.maUngVien, 3, '')"
                                        >
                                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                                        </button>
                                    </div>
                                    <div class="col-4 d-flex justify-content-end fs-4">
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
import { ref } from 'vue' 

const listCandidate = ref([
    { maUngVien: '001', hoTen: 'Nguyễn Văn A', trangThai: 1 },
    { maUngVien: '003', hoTen: 'Lê Văn C', trangThai: 3 },
    { maUngVien: '004', hoTen: 'Phạm Thị D', trangThai: 4 },
    { maUngVien: '005', hoTen: 'Hoàng Văn E', trangThai: 1 },
    { maUngVien: '006', hoTen: 'Ngô Thị F', trangThai: 2 },
])
</script>