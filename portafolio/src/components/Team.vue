<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
        <header
        class="sticky top-0 z-10 px-8 md:px-20 py-8 bg-gradient-to-r from-slate-950/80 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
        >
        <h1 class="text-4xl font-bold tracking-tight mb-2">Equipo de Trabajo</h1>
        <h2 class="text-lg font-medium text-gray-400">Conformado por:</h2>
        </header>

        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:px-20 px-8 pb-20">
        <div
            v-for="member in team"
            :key="member.ra"
            class="group bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-white shadow-lg hover:shadow-indigo-800/30 hover:scale-[1.02] transition-all duration-500"
        >
            <img
            :src="member.img"
            alt="Foto de perfil"
            class="w-36 h-36 object-cover rounded-full border-4 border-slate-700 mb-4 shadow-md group-hover:border-indigo-500/50 transition-all"
            />
            <h3 class="text-xl font-semibold text-gray-100">{{ member.name }}</h3>
            <p class="text-sm text-gray-400 mt-1">{{ member.ra }}</p>
        </div>
        </section>
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
        name: "Enrique Alexander Tebalan Hernandez",
        ra: "202230026",
        img: "/img/kike.jpg",
        },
        {
        name: "Luis Alejandro Regalado Villatoro",
        ra: "202131920",
        img: "/img/alejo.jpg",
        },
        {
        name: "Maria Monserrat Gomez Rabatu",
        ra: "202030849",
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