<template>
    <div class="container mt-4">
        <div class="row">
            <div class="summary-card col-6">
                <div class="row">
                    <div class="col-6"><h6>Kinh nghiệm</h6></div>
                    <div class="col-6"><button class="btn btn-secondary add-btn">THÊM VÀO</button></div>
                </div>

                <div class="experience-entry mt-4">
                    <span class="experience-date">24/04/2024 - Hiện tại</span>
                    <p><strong>Tiên Phong CDS</strong></p>
                    <p>Chuyên viên phân tích kinh doanh</p>
                    <span class="delete-icon">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

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