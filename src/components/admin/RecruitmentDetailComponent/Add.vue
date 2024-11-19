<template>
    <div class="p-4 border-0 border-bottom border-secondary-subtle">
        <div class="head-menu col-12">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <router-link :to="{ path: '/admin/recruitment/add' }" class="btn btn-primary me-2">Save</router-link>
                    <h5 class="mb-0">Recruitment</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="card custom-card border-0">
        <div class="row">
            <div class="col-md-9">
                <label for="hoTen" class="col-sm-4 col-form-label">Họ và tên</label>
                <input type="text" class="form-control" id="hoTen">
            </div>
        </div>

        <div class="row mt-4">
            <div class="row mt-4">
    <div class="col-md-6">
        <h5 class="section-title">Thông tin cá nhân</h5>
        
        <div class="row mb-3">
            <label for="phone" class="col-sm-4 col-form-label">Số điện thoại</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" id="phone" placeholder="Nhập số điện thoại">
            </div>
        </div>

        <div class="row mb-3">
            <label for="email" class="col-sm-4 col-form-label">Email</label>
            <div class="col-sm-8">
                <input type="email" class="form-control" id="email" placeholder="Nhập email">
            </div>
        </div>

        <div class="row mb-3">
            <label for="cccd" class="col-sm-4 col-form-label">CCCD</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" id="cccd" placeholder="Nhập CCCD">
            </div>
        </div>
    </div>

    <!-- Cột bên phải: Thông tin bổ sung -->
    <div class="col-md-6">
        <h5 class="section-title">Thông tin bổ sung</h5>

        <div class="row mb-3">
            <label for="address" class="col-sm-4 col-form-label">Địa chỉ</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" id="address" placeholder="Nhập địa chỉ">
            </div>
        </div>

        <div class="row mb-3">
            <label for="dob" class="col-sm-4 col-form-label">Ngày sinh</label>
            <div class="col-sm-8">
                <input type="date" class="form-control" id="dob">
            </div>
        </div>

        <div class="row mb-3">
            <label for="gender" class="col-sm-4 col-form-label">Giới tính</label>
            <div class="col-sm-8">
                <select class="form-control" id="gender">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                </select>
            </div>
        </div>
         <div class="row mb-3">
            <label for="position" class="col-sm-4 col-form-label">Vị trí tuyển dụng</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" id="position" placeholder="Nhập vị trí tuyển dụng">
            </div>
        </div>

        <div class="row mb-3">
            <label for="department" class="col-sm-4 col-form-label">Phòng ban</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" id="department" placeholder="Nhập phòng ban">
            </div>
        </div>

        <div class="row mb-3">
            <label for="image" class="col-sm-4 col-form-label">Hình ảnh</label>
            <div class="col-sm-8">
                <input type="file" class="form-control" id="image">
            </div>
        </div>
    </div>
</div>
</div>
</div>
</template>
