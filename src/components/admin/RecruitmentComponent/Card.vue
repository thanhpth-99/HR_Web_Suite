<template>
    <div class="p-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div
                v-for="recruitment in listRecruitment"
                :key="recruitment.maViTri"
                class="col"
                @click="$router.push('/admin/recruitment/' + recruitment.maViTri)"
            >
                <div class="card h-100">
                    <div class="card-body d-flex p-0">
                        <div class="recruitment-avatar">
                            <img
                                v-if="recruitment.logo"
                                :src="recruitment.logo"
                                :alt="recruitment.tenViTri"
                                class="img-fluid"
                            />
                            <div v-else>
                                <img
                                    src="https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-2048x1949-pq9uiebg.png"
                                    class="img-fluid"
                                />
                            </div>
                        </div>
                        <div class="recruitment-info px-3 py-0 flex-grow-1">
                            <div class="d-flex justify-content-between align-items-start mt-2">
                                <h5 class="card-title">{{ recruitment.tenViTri }}</h5>
                                <span class="status-indicator" :class="getStatusClass(recruitment.trangThai)"></span>
                            </div>
                            <p class="card-subtitle">{{ recruitment.maPhongBan }}</p>
                            <p class="card-text">
                                <i class="bi bi-people"></i> Số lượng tuyển: {{ recruitment.soLuongTuyen }}
                            </p>
                            <p class="card-text">
                                <button class="btn btn-primary oe_kanban_action oe_kanban_action_button" type="action"><span>{{recruitment.soLuongUngTuyen}}</span> Các hồ sơ ứng viên mới </button>                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    listRecruitment: {
        type: Array,
        required: true,
    },
})

const getStatusClass = (status) => {
    switch (status) {
        case 'active':
            return 'active'
        case 'inactive':
            return 'inactive'
        default:
            return ''
    }
}
</script>

<style scoped>
.card {
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-height: 200px;
}

.recruitment-avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.recruitment-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.recruitment-info {
    min-width: 0;
}

.card-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
}

.card-subtitle {
    font-size: 0.875rem;
    color: #6c757d;
}

.card-text {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
}

.status-indicator.active {
    background-color: #ffc107;
}

.status-indicator.inactive {
    background-color: #6c757d;
}

.badge {
    font-weight: normal;
    font-size: 0.75rem;
    padding: 0.25em 0.5em;
    border-radius: 1rem;
}
</style>
