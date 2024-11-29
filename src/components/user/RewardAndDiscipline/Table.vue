<template>
    <div class="card">
        <!-- Header Section -->
        <div class="card-header border-bottom text-center d-flex align-items-center justify-content-between px-3 fs-4">
            <div class="float-start mt-2">
                Khen thưởng & Kỷ luật
            </div>
        </div>
        <!-- Main Content Section -->
        <div id="tableRAD" class="card-body">
            <table class="table table-striped table-hover">
                <thead class="table-secondary">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Ngày tháng</th>
                        <th scope="col">Nội dung</th>
                        <th scope="col">Người ký</th>
                        <th scope="col">Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>20-11-2024</td>
                        <td>Kỷ luật</td>
                        <td>Phạm Hoàng Hà</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>19-11-2024</td>
                        <td>Khen thưởng tiến độ</td>
                        <td>Phạm Hoàng Hà</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>10-10-2024</td>
                        <td>Khen thưởng</td>
                        <td>Nguyễn Minh Nam</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
.card-header {
    font-weight: bold;
}

.text-header {
    font-size: 15px;
}
</style>
