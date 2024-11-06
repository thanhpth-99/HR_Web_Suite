<template>
    <div class="container-fluid">
    <div class="p-4 border-0 border-bottom border-secondary-subtle">
        <div class="head-menu col-12">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <button
                        @click="saveStaffs"
                        type="button"
                        class="btn btn-success btn-sm fw-bold me-2 px-4"
                        :disabled="loading"
                        :class="{ loading: loading }"
                    >
                        <span
                            v-if="loading"
                            class="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        <span v-if="!loading"><i class="fa-solid fa-download me-2"></i></span>Save
                    </button>

                    <!-- Input group for file upload -->
                    <div class="input-group">
                        <input type="file" ref="fileInput" @change="handleFileUpload" accept=".xlsx, .xls" class="form-control" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
  
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const loading = ref(false)
const fileInput = ref(null)

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (!file) {
        alert('Please select a file.')
    }
}

const saveStaffs = async () => {
    const file = fileInput.value?.files[0] // Lấy tệp từ input

    if (file) {
        loading.value = true // Bắt đầu loading
        const formData = new FormData()
        formData.append('file', file) // Thêm tệp vào FormData

        try {
            const responseData = await axios.post('http://localhost:1688/api/v1/upload-file/employees', formData)
            Swal.fire({
                title: 'Save staff',
                text: 'Save staff successfully',
                icon: 'success',
                timer: 1500,
            })
        } catch (error) {
            console.error(error)
            Swal.fire({
                title: 'Save staff',
                text: 'Save staff failed',
                icon: 'error',
                timer: 1500,
            })
        } finally {
            loading.value = false // Kết thúc loading
        }
    } else {
        Swal.fire({
            title: 'Select file',
            text: 'please select a file',
            icon: 'error',
            timer: 1500,
        })
    }
}
</script>
