<template>
    <div class="card custom-card border-0">
        <div class="row">
            <div class="col-md-9">
                <h5 class="card-title">Tiêu đề phê duyệt</h5>
                <input type="text" readonly value="Công tác" class="fs-2" />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-6">
                <div>
                    <div class="row mb-3">
                        <label for="nguoiYeuCau" class="col-3 col-form-label">Người yêu cầu</label>
                        <div class="col-9">
                            <input type="text" id="nguoiYeuCau" class="form-control" value="Nguyễn Minh Nam" readonly />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="danhMuc" class="col-3 col-form-label">Danh mục</label>
                        <div class="col-9">
                            <input type="text" id="danhMuc" class="form-control" value="Công tác" readonly />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="tuNgay" class="col-3 col-form-label">Giai đoạn</label>
                        <div class="col-9">
                            <div class="row">
                                <div class="row align-items-center mb-2">
                                    <div class="col-2">
                                        <label for="tuNgay" class="col-form-label">Từ</label>
                                    </div>
                                    <div class="col-10">
                                        <input
                                            type="text"
                                            id="tuNgay"
                                            class="form-control"
                                            value="07/10/2024 16:00:00"
                                            readonly
                                        />
                                    </div>
                                </div>

                                <div class="row align-items-center">
                                    <div class="col-2">
                                        <label for="tuNgay" class="col-form-label">Đến</label>
                                    </div>
                                    <div class="col-10">
                                        <input
                                            type="text"
                                            id="denNgay"
                                            class="form-control"
                                            value="03/11/2024 16:00:00"
                                            readonly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="nguoiYeuCau" class="col-3 col-form-label">Mô tả</label>
                        <div class="col-9">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" readonly>
Công tác</textarea
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div>
                    <div class="row mb-3">
                        <label for="nguoiYeuCau" class="col-3 col-form-label">Người phê duyệt</label>
                        <div class="col-9">
                            <input type="text" id="nguoiYeuCau" class="form-control" value="Phạm Hoàng Hà" readonly />
                        </div>
                    </div>
                </div>

                <div>
                    <div class="row mb-3">
                        <label for="nguoiYeuCau" class="col-3 col-form-label">Trạng thái</label>
                        <div class="col-9">
                            <span class="badge bg-warning">Đã gửi</span>
                        </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="nguoiYeuCau" class="col-3 col-form-label">Ghi chú</label>
                    <div class="col-9">
                        <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Ghi chú"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { get } from '@/stores/https'


onMounted(async () => {
 
})
</script>
