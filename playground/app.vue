<script setup>
import "~/assets/scss/app.scss";

const items = computed(() => [
  {
    label: "Home",
    icon: "i-lucide-home",
    to: { name: "index" },
    children: [],
  },
]);
</script>

<template>
  <UApp>
    <UHeader
:ui="{ left: 'lg:flex-initial', container: 'gap-8', center: 'grow', title: 'text-green-alt' }"
      title="Nuxt Dials">
      <UNavigationMenu
variant="link" class="w-full" color="primary" type="single" :items="items"
        :disable-pointer-leave-close="true">
      </UNavigationMenu>

      <template #right>
        <UTooltip text="Change Colour Mode" :kbds="['meta', 'C']">
          <UColorModeButton />
        </UTooltip>
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
        <USeparator class="py-4" />
      </template>
    </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter>
      <template #left>
        <ULink :to="{ name: 'index' }" target="_blank">Sounds Designed</ULink>
        {{ new Date().getFullYear() }}
      </template>
    </UFooter>
  </UApp>
</template>
