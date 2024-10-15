<template>
    <div class="container-fluid h-100">
        <div class="position-fixed top-0 end-0 p-4">
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="language" class="col-form-label">{{ $t('common.select_lang') }}</label>
                </div>
                <div class="col-auto">
                    <select class="form-select" id="language" v-model="language" @change="selectLanguage_Change">
                        <option value="vn" selected>Tiếng Việt</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row h-100 d-flex justify-content-center align-items-center">
            <div class="col-lg-6 col-md-5 col-sm-7 pe-0">
                <div class="p-4 shadow-lg row d-flex justify-content-center align-items-center">
                    <div class="col">
                        <div class="w-100 d-flex justify-content-center">
                            <img src="@/assets/images/logo.png" class="w-25" alt="Logo" />
                        </div>
                        <h2 class="text-center mb-4 fw-bold">{{ $t('login.title') }}</h2>
                        <form class="row g-3 needs-validation" novalidate @submit.prevent="btnLogin_Click">
                            <div class="mb-3">
                                <label for="username" class="form-label fw-bold">{{
                                    $t('login.input_text.username')
                                    }}</label>
                                <input type="text" class="form-control" id="username" v-model="username"
                                    :placeholder="$t('login.input_text.username_placeholder')" required />
                                <div class="invalid-feedback">
                                    {{ $t('login.messages.validate.username_required') }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label fw-bold">{{
                                    $t('login.input_text.password')
                                    }}</label>
                                <input type="password" class="form-control" id="password" v-model="password"
                                    :placeholder="$t('login.input_text.password_placeholder')" required />
                                <div class="invalid-feedback">
                                    {{ $t('login.messages.validate.password_required') }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="remember"
                                        v-model="isRemember" />
                                    <label class="form-check-label" for="remember">
                                        {{ $t('login.check_box.remember') }}
                                    </label>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center align-items-center">
                                <button type="submit" class="btn btn-primary w-50">
                                    {{ $t('login.buttons.login') }}
                                </button>
                            </div>
                        </form>
                        <div class="row mt-3">
                            <router-link to="/pages/forgot_password" class="text-center text-decoration-none">
                                {{ $t('login.buttons.forgot_password') }}
                            </router-link>
                        </div>
                    </div>
                    <div class="col">
                        <img src="@/assets/images/banner.png" class="w-100" alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useValidation } from '@/stores/mixin/validate_form'
import { useAuthStore } from '@/stores/auth'
import { post } from '@/stores/https'
import router from '@/router'

const { t, locale } = useI18n()
const { validateForm } = useValidation()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const isRemember = ref(false)
const language = ref('vn')

const btnLogin_Click = async () => {
    if (validateForm()) {
        try {
            const loginInfo = {
                username: username.value,
                password: password.value,
            }

            const response = await post('auth/login', loginInfo)
            const accessToken = response.data.accessToken
            authStore.setToken(accessToken)

            Swal.fire({
                title: t('login.messages.login_success.title'),
                text: t('login.messages.login_success.text'),
                icon: 'success',
                timer: 1500,
            })
            router.push('/home/activity')
        } catch (error) {
            Swal.fire({
                title: t('login.messages.login_fail_server.title'),
                text: t('login.messages.login_fail_server.text'),
                icon: 'error',
                timer: 1500,
            })
            console.error(t('error.login'), error)
        }
    } else {
        Swal.fire({
            title: t('login.messages.login_fail.title'),
            text: t('login.messages.login_fail.text'),
            icon: 'error',
            timer: 1500,
        })
    }
}
const selectLanguage_Change = () => {
    locale.value = language.value
}
</script>
<style scope></style>
