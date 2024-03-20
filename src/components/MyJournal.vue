<script setup lang="ts">
import { type Entry, type Count } from '@/types'
import RenderEmoji from '@/components/RenderEmoji.vue'
import { inject } from 'vue'
defineProps<{ entries: Entry[] }>()

const { count } = inject('count') as Count

</script>

<template>
  <ul class="journal">
    <h1>Number of remember {{ count }}</h1>
    <li class="wrapper-card" v-for="entry in entries" :key="entry.id">
      <div class="card">
        <RenderEmoji class="emoji" :name="entry.emoji"/>
        <p>{{ entry.text }}</p>
      </div>
      <time class="time">{{ entry.createdAt.toLocaleString() }}</time>
    </li>
  </ul>
</template>

<style scoped>

.journal {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
}

ul {
  padding: 0;
  list-style: none;
}

.wrapper-card {
  border-bottom: solid rgb(117, 117, 117) 1px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

.card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;

}

.emoji {
  width: 50px;
  height: 50px;
  transition: .3s;
}

.time {
  text-align: end;
}

</style>