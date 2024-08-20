<template>
    <div class="about">
        <h1 class="">This is an home page</h1>
        <a href="">
            <RouterLink :to="{ path: '/about' }">about</RouterLink>
        </a>
        <span class="material-symbols-outlined">
            Favorite
        </span>
        <button class="btn btn-danger" @click="hello">Favorite</button>
    </div>
</template>
<script setup>
const hello = () => {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
    });
}
</script>