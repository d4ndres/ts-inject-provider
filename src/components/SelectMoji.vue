<script setup lang="ts">
import RenderEmoji from '@/components/RenderEmoji.vue'
import { ref, watch } from 'vue'
import { useEmojis } from '@/hooks/useEmojis'
const { emojis } = useEmojis()
import { type Emoji } from '@/types'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, (newValue) => {
  selectedEmoji.value = newValue
})

const selectedEmoji = ref<Emoji>(props.modelValue)

const handleClick = (name: Emoji): void => {
  if (selectedEmoji.value === name) {
    selectedEmoji.value = ''
    emit('update:modelValue', '')
    return
  }
  selectedEmoji.value = name
  emit('update:modelValue', name)
}


</script>

<template>
  <ul class="emojis">
    <RenderEmoji :class="{ selected: selectedEmoji === emoji.name }" v-for="emoji in emojis" :key="emoji.name"
      :name="emoji.name" @click="handleClick(emoji.name)" />
  </ul>
</template>

<style scoped>
.emojis {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
  padding: 0;
  gap: .5rem
}
</style>