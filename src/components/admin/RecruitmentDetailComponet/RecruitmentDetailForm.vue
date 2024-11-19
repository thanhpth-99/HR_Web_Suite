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
                                    <h5 class="card-title">Mã ứng viên:{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Họ tên:{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 3, '')"
                                        >
                                            <i class="fa-regular fa-circle-xmark"></i>Từ chối
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Phỏng vấn lần đầu</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div class="card h-100" v-if="candidate.trangThai === 2">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 3, '')"
                                        >
                                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Phỏng vấn lần hai</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div class="card h-100" v-if="candidate.trangThai === 3">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 3, '')"
                                        >
                                            <i class="fa-regular fa-circle-xmark me-2"></i>Từ chối
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>Hợp đồng</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div class="card h-100" v-if="candidate.trangThai === 4">
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">{{ candidate.hoTen }}</p>
                                </div>
                                <div class="row">
                                    <div class="col-8 d-flex justify-content-start fs-4">
                                        <button
                                            class="btn btn-success me-2"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 2, '')"
                                        >
                                            <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                                        </button>
                                        <button
                                            class="btn btn-danger"
                                            @click="$emit('setTrangThai', candidate.maUngVien, 3, '')"
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
import { onMounted } from 'vue'

const props = defineProps({
    listCandidate: Array,
})

onMounted(async () => {})
</script>