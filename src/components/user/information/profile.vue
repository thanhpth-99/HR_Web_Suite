<template>
    <div class="wrapper bg-white">
        <h4 class="pb-4 border-bottom fw-medium">{{ $t('profile.title') }}</h4>
        <div class="row g-3 border-bottom pb-4 mt-2">
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body px-2">
                        <div class="account-settings">
                            <div class="user-profile text-center">
                                <img class="img rounded-circle border"
                                    :src="infoNV.hinhAnh || 'http://res.cloudinary.com/dqqqjxnfh/image/upload/21885d26-2818-4cdb-ad00-49369a91b11a_GF4VwGiaYAAsI_t.jpg'">
                                <h5 class="user-name my-3">{{ infoNV.hoTen }}</h5>
                                <p class="fw-bold">{{ infoNV.tenChucVu }} - {{ infoNV.tenPhongBan }}</p>
                                <p class="fw-bold">{{ infoNV.tenBoPhan }}</p>
                                <div class="d-flex align-items-center justify-content-center">
                                    <h6 class="m-0 p-2">Email: </h6>
                                    <span class="p-2">{{ infoNV.email }}</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <h6 class="m-0 p-2">{{ $t('profile.items.phone') }} </h6>
                                    <span class="p-2">{{ infoNV.dienThoai }}</span>
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
                                {{ infoNV.cccd }}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">{{ $t('profile.items.birthday') }}:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                {{ infoNV.ngaySinh }}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">{{ $t('profile.items.gender') }}:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                {{ infoNV.gioiTinh ? 'Nam' : 'Nữ' }}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                {{ infoNV.email }}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">{{ $t('profile.items.phone') }}:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                {{ infoNV.dienThoai }}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">{{ $t('profile.items.address') }}:</h6>
                            </div>
                            <div class="col-sm-9 text-body-secondary">
                                {{ infoNV.diaChi }}
                            </div>
                        </div>
                        <hr>
                        <div class="row text-end">
                            <div class="col-sm-12">
                                <router-link :to="{ path: `/user/information/${infoNV.maNhanVien}` }">
                                    <button class="btn btn-info">{{ $t('profile.buttons.edit') }}</button>
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
import { onMounted, ref } from 'vue'
import { get } from '@/stores/https'

const infoNV = ref({})

const loadInfoUser = async () => {
    try {
        const userName = sessionStorage.getItem('user');
        const response = await get('/api/v1/employees/me', { username: userName })
        const maNV = response.data.maNhanVien
        const maNVSession = sessionStorage.setItem('maNhanVien', maNV);
        const responseInfo = await get(`/api/v1/employees/${maNV}`)
        if (response.success) {
            infoNV.value = {
                maNhanVien: responseInfo.data.maNhanVien,
                hoTen: responseInfo.data.hoTen,
                gioiTinh: responseInfo.data.gioiTinh,
                ngaySinh: responseInfo.data.ngaySinh,
                dienThoai: responseInfo.data.dienThoai,
                email: responseInfo.data.email,
                cccd: responseInfo.data.cccd,
                diaChi: responseInfo.data.diaChi,
                hinhAnh: responseInfo.data.hinhAnh,
                maBoPhan: responseInfo.data.maBoPhan,
                maChucVu: responseInfo.data.maChucVu,
                maPhongBan: responseInfo.data.maPhongBan,
                tenBoPhan: responseInfo.data.tenBoPhan,
                tenChucVu: responseInfo.data.tenChucVu,
                tenPhongBan: responseInfo.data.tenPhongBan,
                tenTruongPhong: responseInfo.data.tenTruongPhong
            }

            const date = new Date(infoNV.value.ngaySinh);
            const formattedDate =
                ('0' + date.getDate()).slice(-2) + '-' +
                ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
                date.getFullYear();
            
            infoNV.value.ngaySinh = formattedDate
        }
    } catch (error) {
        await Swal.fire({
            title: ('login.messages.login_fail_server.title'),
            text: ('login.messages.login_fail_server.text'),
            icon: 'error',
            timer: 1500,
        })
        console.error('Error during login:', error)
    }
}

onMounted(async () => {
    await loadInfoUser()
})
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