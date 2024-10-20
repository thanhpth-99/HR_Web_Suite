<template>
    <article>
                <!--  Start Header  -->
                <Header />
                <!--  End Header  -->
                <!--  Start Main  -->
                <main>
                </main>
                <!--  End Main  -->
            </article>
            <!--  End Home  -->
    <div class="row">
        <div class="col-2">
            <Aside />
        </div>
        <div class="col-10">
            <Staff />
        </div>
    </div>
</template>
<script setup>
import Staff from './StaffTemp/Staff.vue'
import Header from '@/components/main/Header.vue'
import Aside from '@/components/main/Aside.vue'
</script>
<style scoped>
</style>