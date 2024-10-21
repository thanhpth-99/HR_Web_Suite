<template>
    <div>
        <Aside />
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
                        <Department />
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
import Department from './DepartmentComponent/Department.vue'
</script>