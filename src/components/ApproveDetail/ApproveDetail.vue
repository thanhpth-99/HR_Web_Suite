<template>
    <HeadMenu :loading="loading" />

    <div class="container">
        <StaffDetailForm />
    </div>
</template>

<script setup>
import HeadMenu from './HeadMenu.vue'
import StaffDetailForm from './ApproveDetailForm.vue'
import { ref, onMounted, reactive } from 'vue'
import { get, post } from '@/stores/https'

const loading = ref(false)
</script>
