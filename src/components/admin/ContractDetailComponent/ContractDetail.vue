<template>
    <HeadMenu/>
    <div class="container-fluid p-0">
        <ContractDetailForm :Contract="Contract"  />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { get } from '@/stores/https'
import router from '@/router'
import HeadMenu from './HeadMenu.vue'
import ContractDetailForm from './ContractDetailForm.vue'
const Contract = ref({})

onMounted(() => {
console.log(router.currentRoute.value.params.id)
    const param = router.currentRoute.value.params.id
    if (param) {
        Contract.soHopDong = param
        getInfoBysoHopDong(Contract.soHopDong)
    }
})

const getInfoBysoHopDong = async (soHopDong) => {
    try {
        const response = await get('/api/v1/hop-dong/search', { soHopDong })
        if (response && response.data) {
            Contract.value = response.data
        }
    } catch (error) {
        Swal.fire({
            title: 'Thất bại',
            text: 'Không thể tải lên dữ liệu hợp đồng',
            icon: 'error',
            timer: 1500,
        })
        console.error(error)
    }
}
</script>
