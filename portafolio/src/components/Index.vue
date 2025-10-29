<template>
    <div>
        <header
            class="sticky top-0 px-8 md:pt-12 md:px-20 z-10 bg-black/30 backdrop-blur-xl text-2xl font-semibold py-6">
            <h1>Vista General</h1>
        </header>
        <section class="md:px-20 px-8 pb-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                <div v-for="item in indexData.topCards" :key="item.title"
                    class="ring-1 ring-white/15 shadow-md rounded-lg p-4 bg-gradient-to-br from-neutral-800/10 to-neutral-700/40">
                    <div class="flex justify-between items-center">
                        <div class="flex flex-col gap-y-2">
                            <component :is="item.icon" class="size-7 text-white mb-2" />
                            <h6 class="text-2xl font-semibold" :class="item.class">
                                {{ item.title }}
                            </h6>
                            <code :class="{
                                'font-black !text-2xl': item.title === 'Rendimiento Total',
                                'text-red-500':
                                    item.value < 0 && item.title === 'Rendimiento Total',
                                'text-green-500':
                                    item.value >= 0 && item.title === 'Rendimiento Total',
                            }" class="text-xl font-semibold">{{
                                item.value.toLocaleString("en-GB", {
                                    style: "currency",
                                    currency: "USD",
                                    signDisplay:
                                        item.title === "Rendimiento Total"
                                            ? "exceptZero"
                                            : "auto",
                                })
                            }}</code>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="text-2xl font-semibold py-6">Flujo de las ganancias</h1>
            <div class="">
                <div ref="chartDiv" class="rounded-lg overflow-hidden ring-2 ring-white/15"></div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { indexData } from "../data/indexData";
import { BaselineSeries, createChart } from "lightweight-charts";

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
    const areaSeries = chart.addSeries(BaselineSeries, {
        baseValue: { type: "price", price: 0 },
        topLineColor: "#d5fff1",
        topFillColor1: "rgba(66, 245, 188,0.8)",
        topFillColor2: "rgba(38, 209, 186,0.6)",
        bottomLineColor: "#dcd5ff",
        bottomFillColor1: "rgba(88, 64, 207,0.8)",
        bottomFillColor2: "rgba(122, 46, 199,0.6)",
    });

    

    areaSeries.setData([
        { value: 5.94, time: 1751500800 }, // 4/07/2025
        { value: -2328.59, time: 1752192000 }, // 11/07/2025
        { value: 295.21, time: 1752796800 }, // 18/07/2025
        { value: 4968.53, time: 1753401600 }, // 25/07/2025
        { value: -12870.66, time: 1754006400 }, // 1/08/2025
        { value: 15575.21, time: 1754611200 }, // 8/08/2025
        { value: 13378.81, time: 1755216000 }, // 15/08/2025
        { value: 10426.85, time: 1755820800 }, // 22/08/2025
        { value: 15644.96, time: 1756425600 }, // 29/08/2025
        { value: 26778.61, time: 1757030400 }, // 5/09/2025
        { value: 27708.44, time: 1757635200 }, // 12/09/2025
        { value: 32072.45, time: 1758240000 }, // 19/09/2025
        { value: 28394.97, time: 1758844800 }, // 26/09/2025
        { value: 38172.61, time: 1759449600 }, // 3/10/2025
        { value: 48602.32, time: 1760054400 }, // 10/10/2025
        { value: 56519.01, time: 1760659200 }, // 17/10/2025
        { value: 72133.97, time: 1761264000 }, // 24/10/2025
    ]);

    chart.timeScale().fitContent();
});
</script>
<style scoped></style>