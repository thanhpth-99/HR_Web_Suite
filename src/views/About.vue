<script setup></script>
<template>
    <div class="about">
        <h1>This is an about page</h1>
        <a href=""><RouterLink :to="{path: '/users'}">User</RouterLink></a>
        <a href=""><RouterLink :to="{path: '/posts'}">Post</RouterLink></a>
    </div>
</template>

<style scoped>

</style>
