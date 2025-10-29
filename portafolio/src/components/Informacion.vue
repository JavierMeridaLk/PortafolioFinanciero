<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
        <header
        class="sticky top-0 z-10 px-8 md:px-20 py-8 bg-gradient-to-r from-slate-950/80 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
        >
        <h1 class="text-4xl font-bold tracking-tight mb-2">Presentación - Inversiones</h1>
        <h2 class="text-lg font-medium text-gray-400">
            Economía - Segundo Semestre 2025
        </h2>
        </header>

        <section class="flex flex-col items-center justify-center mt-24 space-y-8 px-8">
        <a
            href="https://docs.google.com/spreadsheets/d/1zuO-SxR01sXohxI0pUoqmb0WqW8R5GBMHfNGmVUikao/edit?usp=sharing"
            target="_blank"
            class="group text-2xl font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
        >
            <span class="text-white group-hover:text-indigo-100 transition-colors">Enlace a hoja de cálculo:</span>
            <span class="ml-2 underline decoration-indigo-400/50 group-hover:decoration-indigo-300">Google Sheets</span>
        </a>

        <div class="relative flex flex-col items-center">
            <img
            class="rounded-2xl w-10/12 md:w-10/12 shadow-lg shadow-indigo-900/30 hover:scale-105 transition-transform duration-500"
            src="/img/qr.png"
            alt="Código QR de Google Sheets"
            />
            <p class="text-zinc-400 text-sm mt-4 text-center">
            Escanea este código para acceder rápidamente
            </p>
        </div>
        </section>
    </div>
</template>
<script setup></script>
<style scoped>
/* Suave animación de entrada */
section {
    animation: fadeIn 1.2s ease forwards;
    }
    @keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }
</style>