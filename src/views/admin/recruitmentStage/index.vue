<template>
    <div>
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
                            <RecruitmentStage />
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
import Header from '@/components/main/Header.vue'
import Aside from '@/components/main/Aside.vue'
import RecruitmentStage from '@/components/admin/RecruitmentDetailComponent/RecruitmentStage.vue'
</script>

<style scope>
</style>