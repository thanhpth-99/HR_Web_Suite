<template>
    <form>
        <div class="row">
            <!-- Liên hệ riêng tư -->
            <div class="col-md-6">
                <h5>Thông tin cá nhân</h5>

                <!-- Địa chỉ riêng -->

                <div class="form-group row mb-3">
                    <label for="email" class="col-sm-4 col-form-label">Giới tính</label>
                    <div class="col-sm-8">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gioiTinh" id="nam" value="Nam" />
                        <label class="form-check-label" for="nam">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gioiTinh" id="nu" value="Nữ" />
                        <label class="form-check-label" for="nu">Nữ</label>
                    </div>
                    </div>
                </div>

                <!-- Điện thoại -->
                <div class="form-group row mb-3">
                    <label for="phone" class="col-sm-4 col-form-label">Điện thoại</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="phone" />
                    </div>
                </div>

                <!-- Email -->
                <div class="form-group row mb-3">
                    <label for="email" class="col-sm-4 col-form-label">Email</label>
                    <div class="col-sm-8">
                        <input type="email" class="form-control" id="email" />
                    </div>
                </div>
            </div>

            <!-- Tình trạng gia đình -->
            <div class="col-md-6">
                <h5>Giáo dục</h5>

                <!-- Tình trạng hôn nhân -->
                <div class="form-group row mb-3">
                    <label for="capDoChungChi" class="col-sm-4 col-form-label">Cấp độ chứng chỉ</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="capDoChungChi" />
                    </div>
                </div>

                <div class="form-group row mb-3">
                    <label for="linhVuc" class="col-sm-4 col-form-label">Lĩnh vực</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="linhVuc" />
                    </div>
                </div>

                <div class="form-group row mb-3">
                    <label for="truongHoc" class="col-sm-4 col-form-label">Trường học</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="truongHoc" />
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <!-- Khẩn cấp -->
                <h5>KHẨN CẤP</h5>

                <!-- Tên liên lạc -->
                <div class="form-group row mb-3">
                    <label for="emergencyContact" class="col-sm-4 col-form-label">Tên liên lạc</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="emergencyContact" />
                    </div>
                </div>

                <!-- Điện thoại liên hệ -->
                <div class="form-group row mb-3">
                    <label for="emergencyPhone" class="col-sm-4 col-form-label">Điện thoại liên hệ</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="emergencyPhone" />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <!-- Giáo dục -->
                <h5>GIÁO DỤC</h5>

                <!-- Cấp độ chứng chỉ -->
                <div class="form-group row mb-3">
                    <label for="educationLevel" class="col-sm-4 col-form-label">Cấp độ chứng chỉ</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="educationLevel" value="Khác" />
                    </div>
                </div>

                <!-- Lĩnh vực nghiên cứu -->
                <div class="form-group row mb-3">
                    <label for="field" class="col-sm-4 col-form-label">Lĩnh vực nghiên cứu</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="field" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
  