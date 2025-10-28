<template>
    <div>
        <header
        class="sticky top-0 px-8 md:py-12 md:px-20 z-10 bg-black/30 backdrop-blur-xl text-2xl font-semibold py-6"
        >
        <h1>Equipo de Trabajo</h1>
        <h2 class="text-xl font-semibold mt-4">Conformado por:</h2>
        </header>
        <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:px-20 md:py-12 px-8 pt-2 pb-20"
        >
        <div
            v-for="member in team"
            :key="member.ra"
            class="bg-slate-950 rounded-xl shadow-md p-4 flex flex-col items-center gap-4"
        >
            <img
            :src="member.img"
            alt="Foto de perfil"
            class="size-48 object-cover rounded-xl aspect-square"
            />
            <div class="text-center">
            <h3 class="text-lg font-semibold">{{ member.name }}</h3>
            <p class="text-sm text-gray-500">{{ member.ra }}</p>
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
    const team = [
        {
        name: "Javier Alejandro Mérida Gómez",
        ra: "202230638",
        img: "/img/xavi.jpg",
        },
        {
        name: "Fredy José Gabriel Herrera Funes",
        ra: "202130478",
        img: "/img/fredy.jpg",
        },
        {
        name: "Kike",
        ra: "202231051",
        img: "/img/kike.jpg",
        },
        {
        name: "Luis Alejandro Regalado Villatoro",
        ra: "202131920",
        img: "/img/alejo.jpg",
        },
        {
        name: "Monse",
        ra: "202230884",
        img: "/img/monse.jpg",
        },
        {
        name: "Juan Fernando García Natareno",
        ra: "202230077",
        img: "/img/fer.jpg",
        },
    ];
</script>
<style scoped></style>