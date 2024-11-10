<template>
    <div class="wrapper bg-white">
        <h4 class="pb-4 border-bottom">Thay đổi thông tin cá nhân</h4>
        <!-- <div class="d-flex align-items-start py-3 border-bottom">
            <img :src="infoNV.hinhAnh || 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'"
                class="img rounded-circle" alt="Profile Photo">
            <div class="ps-sm-4 ps-2" id="img-section">
                <b class="d-block mb-2">Ảnh đại diện</b>
                <button class="btn btn-outline-secondary"><b>Upload</b></button>
            </div>
        </div> -->
        <div class="d-flex align-items-start py-3 border-bottom">
            <img :src="previewImage || infoNV.hinhAnh || 'http://res.cloudinary.com/dqqqjxnfh/image/upload/21885d26-2818-4cdb-ad00-49369a91b11a_GF4VwGiaYAAsI_t.jpg'"
                class="img rounded-circle" alt="Profile Photo" width="100" height="100">
            <div class="ps-sm-4 ps-2" id="img-section">
                <b class="d-block mb-2">Ảnh đại diện</b>
                <input type="file" @change="uploadImage" accept="image/*" class="d-none" ref="fileInput">
                <button class="btn btn-outline-secondary" @click="fileInput.click()"><b>Upload</b></button>
            </div>
        </div>
        <div class="py-2">
            <div class="row py-2">
                <div class="pt-md-0 pt-3">
                    <label for="cccd" class="form-label">Căn cước công dân</label>
                    <input type="text" id="cccd" class="bg-light form-control"
                        placeholder="Vui lòng nhập căn cước công dân" v-model="infoNV.cccd"
                        :class="{ 'is-invalid': error.cccd }">
                    <div class="invalid-feedback">
                        Căn cước không phù hợp
                    </div>
                </div>
                <div class="pt-md-0 pt-3">
                    <label for="firstname" class="form-label">Họ Tên</label>
                    <input type="text" id="firstname" class="bg-light form-control" placeholder="Vui lòng điền họ tên"
                        v-model="infoNV.hoTen" :class="{ 'is-invalid': error.hoTen }">
                    <div class="invalid-feedback">
                        Chưa nhập họ tên
                    </div>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="birthday" class="form-label">Ngày sinh</label>
                    <input type="date" id="birthday" class="bg-light form-control" placeholder="Vui lòng nhập ngày sinh"
                        v-model="infoNV.ngaySinh" :class="{ 'is-invalid': error.ngaySinh }">
                    <div class="invalid-feedback">
                        Ngày sinh không hợp lệ
                    </div>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="gender" class="form-label">Giới tính</label>
                    <div class="px-3 py-1">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="genderOptions" id="maleGender"
                                v-model="infoNV.gioiTinh" :value="true" />
                            <label class="form-check-label" for="maleGender">Nam</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="genderOptions" id="femaleGender"
                                v-model="infoNV.gioiTinh" :value="false" />
                            <label class="form-check-label" for="femaleGender">Nữ</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="bg-light form-control" placeholder="Vui lòng nhập email"
                        v-model="infoNV.email" :class="{ 'is-invalid': error.email }">
                    <div class="invalid-feedback">
                        Email không hợp lệ
                    </div>
                </div>
                <div class="col-md-6 pt-md-0 pt-3">
                    <label for="phone" class="form-label">Số điện thoại</label>
                    <input type="text" id="phone" class="bg-light form-control"
                        placeholder="Vui lòng nhập số điện thoại" v-model="infoNV.dienThoai"
                        :class="{ 'is-invalid': error.dienThoai }">
                    <div class="invalid-feedback">
                        Số điện thoại không phù hợp
                    </div>
                </div>
            </div>
            <div class="row py-2">
                <div class="col-md-12">
                    <label for="address" class="form-label">Địa chỉ</label>
                    <input type="text" id="address" class="bg-light form-control" placeholder="Vui lòng nhập địa chỉ"
                        v-model="infoNV.diaChi" :class="{ 'is-invalid': error.diaChi }">
                    <div class="invalid-feedback">
                        Chưa nhập địa chỉ
                    </div>
                </div>
            </div>
            <div class="py-3 pb-4 border-bottom text-center">
                <button class="btn btn-primary me-3" @click.prevent="btnUpdateInfo_Click">Lưu thay đổi</button>
                <router-link :to="{ path: '/user/information' }" class="btn btn-outline-secondary">
                    Quay lại
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import { useValidation } from '@/stores/mixin/validate_form'
import { post, get, put } from '@/stores/https';

const infoNV = reactive({
    maNhanVien: '',
    hoTen: '',
    gioiTinh: null,
    ngaySinh: '',
    dienThoai: '',
    email: '',
    cccd: '',
    diaChi: '',
    hinhAnh: '',
    maBoPhan: '',
    maChucVu: '',
    maPhongBan: '',
    tenBoPhan: '',
    tenChucVu: '',
    tenPhongBan: '',
    tenTruongPhong: ''
});

const previewImage = ref(null);

const fileInput = ref(null);

const uploadImage = (event) => {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
        previewImage.value = URL.createObjectURL(file);
        console.log(previewImage.value);
        const formData = new FormData();
        formData.append("file", file);
        infoNV.hinhAnh = formData;
    }
};

const loadInfoUser = async () => {
    try {
        const userName = sessionStorage.getItem('user');
        const response = await get('/api/v1/employees/me', { username: userName })
        const maNV = response.data.maNhanVien
        const maNVSession = sessionStorage.setItem('maNhanVien', maNV);
        const responseInfo = await get(`/api/v1/employees/${maNV}`)
        if (responseInfo.success) {
            Object.assign(infoNV, responseInfo.data);
        }
    } catch (error) {
        await Swal.fire({
            title: 'Error',
            text: error,
            icon: 'error',
            timer: 1500,
        })
        console.error('Error during login:', error)
    }
}

onMounted(async () => {
    await loadInfoUser()
})

const { validateForm } = useValidation()

const error = reactive({
    cccd: '',
    hoTen: '',
    ngaySinh: '',
    email: '',
    dienThoai: '',
    diaChi: ''
})

const btnUpdateInfo_Click = async () => {
    if (!validate()) {
        await Swal.fire({
            title: 'Lưu không thành công',
            text: 'Thông tin không hợp lệ',
            icon: 'error',
            timer: 1500,
        })
        return
    }
    try {
        const updateInfo = {
            maNhanVien: infoNV.maNhanVien,
            hoTen: infoNV.hoTen,
            gioiTinh: infoNV.gioiTinh,
            ngaySinh: infoNV.ngaySinh,
            dienThoai: infoNV.dienThoai,
            email: infoNV.email,
            cccd: infoNV.cccd,
            diaChi: infoNV.diaChi,
            hinhAnh: infoNV.hinhAnh,
        }

        console.log(updateInfo)

        Object.assign(infoNV, updateInfo);
        console.log(infoNV)

        const response = await put('/api/v1/employees', infoNV)
        if (response.success) {
            Swal.fire({
                title: 'Thành công',
                text: 'Đã thay đổi thông tin',
                icon: 'success',
                timer: 1500,
            })
        } else {
            Swal.fire({
                title: 'Thất bại',
                text: 'Thay đối thất bại',
                icon: 'error',
                timer: 1500,
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Lỗi',
            text: 'Error',
            icon: 'error',
            timer: 1500,
        })
        console.error('Error during update info:', error)
    }
}

const validate = () => {
    const formRule = {
        cccd: {
            required: true,
            minLength: '12',
            maxLength: '12'
        },
        hoTen: {
            required: true,
        },
        ngaySinh: {
            required: true,
        },
        email: {
            required: true,
        },
        dienThoai: {
            required: true,
            number: true,
            minLength: '10',
            maxLength: '10'
        },
        diaChi: {
            required: true
        }
    }
    const formData = {
        cccd: infoNV.cccd,
        hoTen: infoNV.hoTen,
        ngaySinh: infoNV.ngaySinh,
        email: infoNV.email,
        dienThoai: infoNV.dienThoai,
        diaChi: infoNV.diaChi
    }
    Object.assign(error, validateForm(formRule, formData))
    for (let key in error) {
        if (error[key] !== false) return false
    }
    return true
}
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

<!-- <template>
    <div class="row my-3">
        <div class="col-md-8 mx-auto my-5">
            <form @submit.prevent="addArticle">
                <div class="form-group mb-2">
                    <input 
                        type="text" 
                        v-model="data.title"
                        placeholder="Title"
                        class="form-control"
                        :required="true">
                </div>
                <div class="form-group mb-2">
                    <input 
                        type="file" 
                        name="photo" 
                        @change="getImage"
                        :required="true">
                </div>
                <div class="form-group mb-2">
                    <textarea 
                        rows="5" cols="30" 
                        v-model="data.body" 
                        placeholder="Body"
                        class="form-control"
                        :required="true"
                    ></textarea>
                </div>
                <div class="form-group mb-2">
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

    const data = reactive({
        title: '',
        body: '',
        image: null,
    });

    const getImage = (event) => {
        data.image = event.target.files[0];
    };

    const addArticle = async () => {
        try {
            const formData = new FormData();
            formData.append('image', data.image);
            formData.append('title', data.title);
            formData.append('body', data.body);
            formData.append('_method', 'put');
            await axios.post(`/api/articles`, formData);
            console.log('Article updated')
        } catch (error) {
            console.log(error);
        }
    }
</script>

<style>
</style> -->