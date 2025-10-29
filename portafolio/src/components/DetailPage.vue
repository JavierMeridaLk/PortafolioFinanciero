<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white pb-20">
    <header
      class="sticky top-0 z-10 px-8 md:px-20 py-8 bg-gradient-to-r from-slate-950/80 to-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
    >
      <h1 class="text-3xl font-bold tracking-tight flex items-center gap-3">
        <component :is="stockData.icon" class="size-10" :class="stockData.class" />
        <span>{{ stockData.name }}</span>
        <code class="text-gray-400 text-lg">({{ stockData.code }})</code>
      </h1>
    </header>

    <section class="md:px-20 px-8 pt-10">
      <h5 class="font-black text-xl text-gray-300 mb-4">Detalles de la inversión</h5>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in stockData.cards"
          :key="item.title"
          class="group bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-indigo-800/30 transition-all duration-500 hover:scale-[1.02]"
        >
          <div class="flex flex-col gap-y-2">
            <component :is="item.icon" class="size-7 text-indigo-300 mb-2 group-hover:text-indigo-400 transition-colors" />
            <h6 class="text-lg font-semibold text-gray-200" :class="item.class">{{ item.title }}</h6>
            <code
              class="text-xl font-semibold flex items-center gap-x-3"
              :class="{
                'font-black !text-2xl': item.title === 'Ganancia',
                'text-red-400': item.value < 0 && item.title === 'Ganancia',
                'text-green-400': item.value >= 0 && item.title === 'Ganancia',
              }"
            >
              {{
                item.title !== "Acciones Compradas"
                  ? item.value.toLocaleString("en-GB", {
                      style: "currency",
                      currency: "USD",
                      signDisplay:
                        item.title === "Ganancia" ? "exceptZero" : "auto",
                    })
                  : `${item.value} acciones`
              }}
            </code>
          </div>
        </div>
      </div>

      <h5 class="font-black text-xl text-gray-300 mt-12 mb-4">Gráfica</h5>
      <div
        ref="chartDiv"
        class="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-indigo-900/30"
      ></div>

      <h5 class="font-black text-xl text-gray-300 mt-12 mb-3">Justificación de compra</h5>
      <p class="text-lg leading-relaxed text-gray-300">
        {{ stockData.description }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { stocksIdInfo } from "../data/infoIndividual";
import { FaArrowTrendDown, FaArrowTrendUp } from "@kalimahapps/vue-icons";
import { AreaSeries, CandlestickSeries, createChart } from "lightweight-charts";
import { onMounted, ref } from "vue";

const route = useRoute();
const stockData = stocksIdInfo[route.params.name];

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
  const areaSeries = chart.addSeries(AreaSeries, {
    topLineColor: "#e9d5ff",
    topFillColor1: "rgba(192,132,252,0.8)",
    topFillColor2: "rgba(126,34,206,0.6)",
    bottomLineColor: "#f9a8d4",
    bottomFillColor1: "rgba(244,114,182,0.8)",
    bottomFillColor2: "rgba(190,24,93,0.6)",
  });


  areaSeries.setData(stockData.history);

  areaSeries.createPriceLine({
    price: stockData.initialValue,
    color: 'yellow',
    lineWidth: 2,
    axisLabelVisible: true,
  });
  chart.timeScale().fitContent();
});
</script>

<style scoped></style>
