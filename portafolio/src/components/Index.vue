<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
        <!-- Encabezado -->
        <header
        class="sticky top-0 z-10 px-8 md:px-20 py-8 md:py-12 bg-gradient-to-r from-slate-950/80 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
        >
        <h1 class="mb-2 text-4xl font-bold tracking-tight">Vista General</h1>
        <h2 class="text-lg font-medium text-gray-400">
            Resumen de Inversiones
        </h2>
        </header>

        <!-- Sección principal -->
        <section class="md:px-20 px-8 pb-20 pt-10">
        <!-- Tarjetas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
            v-for="item in indexData.topCards"
            :key="item.title"
            class="group bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-indigo-800/30 transition-all duration-500 hover:scale-[1.02]"
            >
            <div class="flex flex-col gap-y-3">
                <component
                :is="item.icon"
                class="size-8 text-indigo-300 group-hover:text-indigo-400 transition-colors duration-300"
                />
                <h6
                class="text-xl font-semibold tracking-wide"
                :class="item.class"
                >
                {{ item.title }}
                </h6>
                <code
                :class="{
                    'font-black !text-2xl': item.title === 'Rendimiento Total',
                    'text-red-400':
                    item.value < 0 && item.title === 'Rendimiento Total',
                    'text-green-400':
                    item.value >= 0 && item.title === 'Rendimiento Total',
                }"
                class="text-xl font-semibold"
                >
                {{
                    item.value.toLocaleString("en-GB", {
                    style: "currency",
                    currency: "USD",
                    signDisplay:
                        item.title === "Rendimiento Total"
                        ? "exceptZero"
                        : "auto",
                    })
                }}
                </code>
            </div>
            </div>
        </div>

        <!-- Gráfico -->
        <h1 class="text-2xl font-semibold pt-16 pb-6 text-gray-200">
            Flujo general de inversión
        </h1>

        <div
            ref="chartDiv"
            class="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-indigo-900/30"
        ></div>
        </section>
    </div>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import { indexData } from "../data/indexData";
    import { createChart } from "lightweight-charts";

    const chartDiv = ref(null);
    onMounted(() => {
        const chartOptions = {
        layout: {
            textColor: "white",
            background: { type: "solid", color: "black" },
        },
        grid: {
            vertLines: {
            color: "rgba(255, 255, 255, 0.05)",
            },
            horzLines: {
            color: "rgba(255, 255, 255, 0.05)",
            },
        },
        height: 500,
        localization: {
            priceFormatter: (price) => {
            return price.toLocaleString("en-GB", {
                style: "currency",
                currency: "USD",
            });
            },
        },
        };
        const chart = createChart(chartDiv.value, chartOptions);
        const areaSeries = chart.addBaselineSeries({
        baseValue: { type: "price", price: 0 },
        topLineColor: "#e9d5ff",
        topFillColor1: "rgba(192,132,252,0.8)",
        topFillColor2: "rgba(126,34,206,0.6)",
        bottomLineColor: "#f9a8d4",
        bottomFillColor1: "rgba(244,114,182,0.8)",
        bottomFillColor2: "rgba(190,24,93,0.6)",
        });

        const data = [
        { value: 0, time: 1723686030 },
        { value: 9_584.1, time: 1724290830 },
        { value: -5_073.93, time: 1724895630 },
        { value: -30_718.62, time: 1725500430 },
        { value: -10_201.75, time: 1726105230 },
        { value: 31_730.69, time: 1726710030 },
        { value: 46_565.06, time: 1727314830 },
        { value: 5_331.91, time: 1727919630 },
        { value: 2_230.38, time: 1728524430 },
        { value: 39_374.32, time: 1729129230 },
        { value: 50_290.29, time: 1729734030 },
        { value: 49_072.61, time: 1730338830 },
        ];

        areaSeries.setData(data);

        chart.timeScale().fitContent();
    });
</script>
<style scoped></style>