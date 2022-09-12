<script setup lang="ts">
import { useData } from 'vitepress'
import { VPHomeSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'

const { localeIndex } = useData()
const { data } = useSponsor()
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    :message="
      localeIndex === 'es'
        ? 'Vite es gratuito y de código abierto, hecho posible gracias a nuestros maravillosos patrocinadores.'
        : 'Vite is free and open source, made possible by wonderful sponsors.'
    "
    :action-text="
      localeIndex === 'es'
        ? 'Conviertete en un patrocinador'
        : 'Become a sponsor'
    "
    action-link="https://github.com/sponsors/yyx990803"
    :data="data"
  />
</template>
