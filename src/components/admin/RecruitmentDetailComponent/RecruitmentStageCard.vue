<template>
    <div class="p-4">
        <div class="row row-cols-md-3s g-4">
            <div class="col">
                <h4>Tạo và cập nhật hồ sơ</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div
                        class="card h-100"
                        v-if="candidate.trangThai === 1"
                        @click="$router.push(`/admin/recruitmentstage/${candidate.maUngVien}`)"
                    >
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">Mã ứng viên:{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Họ tên:{{ candidate.hoTen }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Phỏng vấn lần đầu</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div
                        class="card h-100"
                        v-if="candidate.trangThai === 2"
                        @click="$router.push(`/admin/recruitmentstage/${candidate.maUngVien}`)"
                    >
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">Mã ứng viên:{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Họ tên:{{ candidate.hoTen }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>Phỏng vấn lần hai</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div
                        class="card h-100"
                        v-if="candidate.trangThai === 3"
                        @click="$router.push(`/admin/recruitmentstage/${candidate.maUngVien}`)"
                    >
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">Mã ứng viên:{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Họ tên:{{ candidate.hoTen }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>Hợp đồng</h4>
                <div class="mb-3" v-for="candidate in listCandidate" :key="candidate.maUngVien">
                    <div
                        class="card h-100"
                        v-if="candidate.trangThai === 4"
                        @click="$router.push(`/admin/recruitmentstage/${candidate.maUngVien}`)"
                    >
                        <div class="card-body d-flex p-0">
                            <div class="px-3 py-2 flex-grow-1 p-3">
                                <div class="d-flex justify-content-between align-items-start">
                                    <h5 class="card-title">Mã ứng viên:{{ candidate.maUngVien }}</h5>
                                </div>
                                <div class="mb-2">
                                    <p class="m-0">Họ tên:{{ candidate.hoTen }}</p>
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
