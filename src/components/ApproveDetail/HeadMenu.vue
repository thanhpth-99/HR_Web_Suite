<template>
    <div class="p-4 border-0 border-bottom border-secondary-subtle">
        <div class="head-menu col-12">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <button
                        type="submit"
                        class="btn btn-secondary w-100 fw-bold me-2"
                        :disabled="loading"
                        :class="{ loading: loading }"
                    >
                        <span
                            v-if="loading"
                            class="spinner-border me-2 spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        <span v-if="!loading"><i class="fa-solid fa-rotate me-2"></i></span>Rút lại
                    </button>
                </div>
                <div>
                    <button class="btn btn-success me-2">
                        <i class="fa-regular fa-circle-check me-2"></i>Xác nhận
                    </button>
                    <button class="btn btn-danger"><i class="fa-regular fa-circle-xmark me-2"></i>Từ chối</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    loading: Boolean,
})
</script>

<style scoped>
.spinner-border {
    width: 1.2rem;
    height: 1.2rem;
}
</style>