<script setup lang="ts">
import {ref, provide} from 'vue'

const count = ref(0)
const increment = () => (count.value++)
const decrement = () => (count.value--)

provide('count', {
  count,
  increment,
  decrement
})
</script>


<template>
  <slot>
  </slot>
</template>