<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'

const emit = defineEmits(['toggle-sidebar']);
const isShow = ref(true);

const btnControlSidebar_Click = () => {
  isShow.value = !isShow.value;
  emit('toggle-sidebar', isShow.value);
};
emit('toggle-sidebar', isShow.value);

const authStore = useAuthStore()
</script>
<template>
    <aside class="position-fixed top-0 start-0" :class="{ close: !isShow }">
        <header class="position-relative">
            <div class="image-text d-flex align-items-center">
                <span class="image d-flex align-items-center">
                    <img src="@/assets/images/logo.png" alt="VANGUARD" />
                </span>
                <div class="text header-text d-flex flex-column">
                    <span class="name">VANGUARD</span>
                    <span class="slogan">HRM - Final project</span>
                </div>
            </div>
            <i class="fa-solid fa-left-long toggle" @click="btnControlSidebar_Click"></i>
        </header>
        <main>
            <div class="menu">
                <ul class="menu-links p-0 m-0">
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/staff' }">
                            <i class="fa-solid fa-user"></i>
                            <span class="text nav-text">{{ $t('home.menu_item.staff') }}</span>
                        </router-link>
                    </li>
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/activity' }">
                            <i class="fa-solid fa-tasks"></i>
                            <span class="text nav-text">{{ $t('home.menu_item.activitive') }}</span>
                        </router-link>
                    </li>
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/position' }">
                            <i class="fa-solid fa-briefcase"></i>
                            <span class="text nav-text">{{ $t('home.menu_item.position') }}</span>
                        </router-link>
                    </li>
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/payroll' }">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <span class="text nav-text">{{ $t('home.menu_item.payroll') }}</span>
                        </router-link>
                    </li>
                </ul>
                <hr />
                <ul class="menu-links p-0 m-0">
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/chart' }">
                            <i class="fa-solid fa-sitemap"></i>
                            <span class="text nav-text">{{ $t('home.menu_item.chart') }}</span>
                        </router-link>
                    </li>
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/site' }">
                            <i class="fa-solid fa-map-marker-alt"></i>
                            <span class="text nav-text">{{ $t('home.menu_item.site') }}</span>
                        </router-link>
                    </li>
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/document' }">
                            <i class="fa-solid fa-file-alt"></i>
                            <span class="text nav-text">{{ $t('home.menu_item.documentation') }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <ul class="p-0 m-0">
                    <li class="nav-link-sidebar">
                        <router-link :to="{ path: '/' }">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span class="text nav-text" @click="authStore.clearToken">{{ $t('home.buttons.logout') }} </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </main>
    </aside>
</template>
<style scoped>
aside {
    height: 100%;
    width: 18%;
    padding: 0.88rem 0.88rem;
    background-color: var(--color-sidebar);
    transition: var(--tran-05);
    z-index: 100;
    border: 1px solid var(--color-border);
}

aside .text {
    transition: var(--tran-04);
    white-space: nowrap;
    opacity: 1;
}

aside.close {
    width: 6%;
}

aside.close .text {
    opacity: 0;
    display: none;
}

aside.close .toggle {
    transform: translateY(-50%) rotate(180deg);
}

aside header .image-text img {
    width: 60px;
    height: 60px;
}

aside header .image {
    min-width: 70px;
}

aside header .image-text .header-text .name {
    font-weight: 800;
    font-size: 1.25rem;
}

aside header .image-text .header-text .slogan {
    font-size: 0.85rem;
}

aside header .toggle {
    position: absolute;
    top: 50%;
    right: -32px;
    transform: translateY(-50%);
    height: 30px;
    width: 30px;
    background-color: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: black;
    font-size: 1.15rem;
    cursor: pointer;
    transition: var(--tran-03);
    border: 2px solid var(--color-border);
}

aside main {
    margin-top: 10px;
    height: calc(100% - 65px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

aside main ul li {
    height: 50px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
}

aside main li .fa-solid {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    min-width: 60px;
}

aside main li .fa-solid,
aside main li .text {
    transition: var(--tran-02);
    color: black;
}

aside main li a {
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    transition: var(--tran-02);
    border-radius: 0.8rem;
}

aside main li a:hover {
    background-color: var(--color-component);
}

aside main li a:hover .fa-solid,
aside main li a:hover .text {
    font-weight: 800;
}

aside main .menu ul li .router-link-active:before {
    content: '';
    height: 100%;
    width: 0.7rem;
    background-color: var(--color-background);
    border-radius: 5px;
    transition: var(--tran-02);
}

aside.close main .menu ul li .router-link-active {
    background-color: var(--color-background);
}

aside.close main .menu ul li .router-link-active::before{
    width: 0rem;
}
</style>
