<template>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" readonly></textarea>
</template>

<script setup>
const props = defineProps({
    approveDetail: Object,
})
</script>

<style>
.summary-card {
    border: 1px solid #dee2e6;
    border-radius: 10px;
    padding: 20px;
}

.experience-entry {
    border-left: 4px solid #17a2b8; /* Highlight bar */
    padding-left: 10px;
    margin-bottom: 15px;
    position: relative;
}

.experience-entry p {
    margin: 0;
}

.delete-icon {
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    color: #6c757d;
}

.delete-icon:hover {
    color: #dc3545;
}

.add-btn {
    float: right;
}

.experience-date {
    color: #6c757d;
}
</style>