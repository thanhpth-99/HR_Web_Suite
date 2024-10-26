<template>
    <div class="wrapper bg-white">
        <h4 class="pb-4 border-bottom">Thông tin cá nhân</h4>
        <div class="row g-3 border-bottom pb-4 mt-2">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body px-2">
                        <div class="account-settings">
                            <div class="user-profile text-center">
                                <img class="img rounded-circle border"
                                    src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                <h5 class="user-name my-3">Nguyễn Minh Nam</h5>
                                <p class="fw-bold">Nhân viên - Ban quản lý nhân sự</p>
                                <div class="col-sm-12 row m-0 ps-4 text-start">
                                    <h6 class="col-sm-5">Email: </h6>
                                    <span class="col-sm-7">xxxx@gmail.com</span>
                                </div>
                                <div class="col-sm-12 row m-0 ps-4 text-start">
                                    <h6 class="col-sm-5">Số điện thoại: </h6>
                                    <span class="col-sm-7">0823 667 555</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">CCCD:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                052204008381
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Ngày sinh:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                10/11/2004
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Giới tính:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                Nam
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                xxxxx@gmail.com
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Điện thoại:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                0823 667 555
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Địa chỉ:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                TP. Hồ Chí Minh
                            </div>
                        </div>
                        <hr>
                        <div class="row text-end">
                            <div class="col-sm-12">
                                <router-link :to="{ path: '/user/staff/0' }">
                                    <button class="btn btn-info">Edit</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    
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
    max-width: 1000px;
}

h4 {
    letter-spacing: -1px;
    font-weight: 400;
}

.img {
    width: 120px;
    height: 120px;
    border-radius: 6px;
    object-fit: cover;
}


label {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    color: #777;
    padding-left: 3px;
}
</style>