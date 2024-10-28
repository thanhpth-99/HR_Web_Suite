<template>
    <div class="wrapper bg-white">
        <h4 class="pb-4 border-bottom">Thay đổi thông tin cá nhân</h4>
        <div class="d-flex align-items-start py-3 border-bottom">
            <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="img rounded-circle" alt="Profile Photo">
            <div class="ps-sm-4 ps-2" id="img-section">
                <b class="d-block mb-2">Ảnh đại diện</b>
                <button class="btn btn-outline-secondary"><b>Upload</b></button>
            </div>
        </div>
        <div class="py-2">
            <div class="row py-2">
                <div class="pt-md-0 pt-3">
                    <label for="language" class="form-label">Căn cước công dân</label>
                    <input type="text" id="cccd" class="bg-light form-control"
                        placeholder="Vui lòng nhập căn cước công dân" value="052204008381" v-model="cccd">
                </div>
                <div class="col-md-6">
                    <label for="firstname" class="form-label">Họ</label>
                    <input type="text" id="firstname" class="bg-light form-control" placeholder="Vui lòng điền họ">
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="lastname" class="form-label">Tên</label>
                    <input type="text" id="lastname" class="bg-light form-control" placeholder="Vui lòng điền tên">
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="birthday" class="form-label">Ngày sinh</label>
                    <input type="email" id="birthday" class="bg-light form-control"
                        placeholder="Vui lòng nhập ngày sinh" value="10/11/2004">
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="gender" class="form-label">Giới tính</label>
                    <div class="px-3 py-1">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="genderOptions" id="maleGender" value="0"
                                checked />
                            <label class="form-check-label" for="maleGender">Nam</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="genderOptions" id="femaleGender"
                                value="1" />
                            <label class="form-check-label" for="femaleGender">Nữ</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="bg-light form-control" placeholder="Vui lòng nhập email"
                        value="xxxxx@gmail.com">
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="phone" class="form-label">Số điện thoại</label>
                    <input type="text" id="phone" class="bg-light form-control"
                        placeholder="Vui lòng nhập số điện thoại" value="0823 667 555">
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-12">
                    <label for="address" class="form-label">Địa chỉ</label>
                    <input type="text" id="phone" class="bg-light form-control" placeholder="Vui lòng nhập địa chỉ"
                        value="TP. Hồ Chí Minh">
                </div>
            </div>
            <div class="py-3 pb-4 border-bottom text-center">
                <button class="btn btn-primary me-3">Lưu thay đổi</button>                
                <router-link :to="{ path: '/user/information' }">
                    <button class="btn btn-outline-secondary">Quay lại</button>
                </router-link>
            </div>
        </div>
    </div>

</template>
<script setup>
    import { ref } from 'vue'

    const cccd = ref('')
    const ho = ref('')
    const ten = ref('')
    const ngaySinh = ref('')
    const gioiTinh = ref(true)
</script>

<style scoped>
body {
    background-color: aliceblue;
}

.wrapper {
    padding: 30px 50px;
    border: 1px solid #ddd;
    border-radius: 15px;
    margin: 10px auto;
    max-width: 900px;
}

h4 {
    letter-spacing: -1px;
    font-weight: 400;
}

.img {
    width: 70px;
    height: 70px;
    border-radius: 6px;
    object-fit: cover;
}

#img-section p,
#deactivate p {
    font-size: 12px;
    color: #777;
    margin-bottom: 10px;
    text-align: justify;
}

#img-section b,
#img-section button,
#deactivate b {
    font-size: 14px;
}

label {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    color: #777;
    padding-left: 3px;
}

.form-label {
    margin-bottom: 8px;
}

.form-control {
    border-radius: 10px;
}

input[placeholder] {
    font-weight: 500;
}

.form-control:focus {
    box-shadow: none;
    border: 1.5px solid #0779e4;
}

select {
    display: block;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 40px;
    padding: 5px 10px;
    /* -webkit-appearance: none; */
}

select:focus {
    outline: none;
}

.button {
    background-color: #fff;
    color: #0779e4;
}

.button:hover {
    background-color: #0779e4;
    color: #fff;
}

.btn-primary {
    background-color: #0779e4;
}

.danger {
    background-color: #fff;
    color: #e20404;
    border: 1px solid #ddd;
}

.danger:hover {
    background-color: #e20404;
    color: #fff;
}

@media(max-width:576px) {
    .wrapper {
        padding: 25px 20px;
    }

    #deactivate {
        line-height: 18px;
    }
}
</style>