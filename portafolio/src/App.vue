<template>
  <main class="bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-zinc-100">
    <!-- Sidebar -->
    <aside
      class="fixed top-0 left-0 w-80 h-full backdrop-blur-xl bg-zinc-950/80 border-r border-zinc-800/40 overflow-y-auto z-40 transition-transform duration-300"
      :class="{
        'translate-x-0': menuOpen,
        '-translate-x-full': !menuOpen,
      }"
    >
      <div class="px-6 pt-6 pb-4 sticky top-0 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/40">
        <div class="flex items-center justify-between">
          <AnOutlinedStock class="size-12 text-indigo-500" />
          <button
            class="inline-block md:hidden items-center cursor-pointer p-2.5 my-2 hover:bg-white/10 transition-colors rounded-lg"
            @click="menuOpen = !menuOpen"
          >
            <ClCloseMd class="text-zinc-300" />
          </button>
        </div>
        <h1 class="text-xl font-semibold tracking-wide mt-2 text-zinc-200">Portafolio de Inversiones</h1>
      </div>

      <nav class="py-4 px-4">
        <ul class="space-y-1.5">
          <ListItem v-for="item in menuItems" :key="item.name" :item="item" />
        </ul>
      </nav>
    </aside>

    <!-- Contenido principal -->
    <div class="ml-0 md:ml-80 h-screen overflow-auto transition-all duration-300">
      <label
        class="inline-block md:hidden items-center cursor-pointer p-2.5 mx-4 mt-6 hover:bg-white/10 transition-colors rounded-lg"
      >
        <input type="checkbox" class="hidden" v-model="menuOpen" />
        <ChMenuHamburger class="text-zinc-300" />
      </label>

      <!-- Transición del contenido -->
      <router-view v-slot="{ Component, route }">
        <transition name="fade-up" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </main>
</template>




<script setup lang="jsx">
  import {
    AnOutlinedStock,
    ChMenuHamburger,
    ClCloseMd,
  } from "@kalimahapps/vue-icons";
  import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
  import { defineComponent, ref } from "vue";
  import { RouterLink } from "vue-router";
  import { menuItems } from "./data/indexData";

  const breakpoint = useBreakpoints(breakpointsTailwind);
  const menuOpen = ref(breakpoint.smaller("sm").value ? false : true);

  const ListItem = defineComponent({
    props: {
      item: Object,
    },
    setup(props) {
      const Icon = props.item.icon;
      return () => (
        <>
          {props.item.separator ? (
            <li class="py-2 pl-6 text-xs font-light uppercase tracking-widest text-gray-300">
              {props.item.name}
            </li>
          ) : (
            <li>
              <RouterLink
                to={props.item.path}
                onClick={() => {
                  breakpoint.smaller("sm").value && (menuOpen.value = false);
                }}
                active-class={`bg-black font-bold hover:!bg-black px-3 ${props.item.class}`}
                class="py-4 flex items-center gap-3 hover:bg-black  rounded-tl-xl rounded-bl-xl pl-4 ml-4 transition-all"
              >
                <Icon class="w-6 h-6" />
                {props.item.name}
              </RouterLink>
            </li>
          )}
        </>
      );
    },
  });
</script>





<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>