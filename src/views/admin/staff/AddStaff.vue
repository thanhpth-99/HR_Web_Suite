<template>
    <div class="bg-light">
        <article>
            <!--  Start Header  -->
            <Header />
            <!--  End Header  -->
            <!--  Start Main  -->
            <main>
                <div class="row">
                    <div class="col-2">
                        <Aside />
                    </div>
                    <div class="col-10">
                        <div class="me-2">
                            <StaffDetail />
                        </div>
                    </div>
                </div>
            </main>
            <!--  End Main  -->
        </article>
        <!--  End Home  -->
    </div>
</template>

<script setup>
import StaffDetail from '@/components/admin/StaffDetailComponent/StaffDetail.vue';
import Header from '@/components/main/Header.vue'
import Aside from '@/components/main/Aside.vue'
</script>