<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import SelectMoji from '@/components/SelectMoji.vue'
import { type Emoji, type Entry, type CountFunction } from '@/types'


// inject
const { increment } = inject('count') as CountFunction


//emits
const emit = defineEmits<{
  (event: 'createEntry', entry: Entry): void
}>()

// Textarea
const text = ref<string>('')
const maxTextLength = 280
const textLength = computed(() => text.value.length)
const handleText = (ev: Event) => {
  const target = ev.target as HTMLTextAreaElement
  text.value = target.value

  if (textLength.value > maxTextLength) {
    text.value = text.value.slice(0, maxTextLength)
  } 
}

// Emoji
const selectedEmoji = ref<Emoji>('')

// onsubmit
const handleSubmit = () => {
  if( !textLength.value || selectedEmoji.value === '') return

  increment()

  emit('createEntry', {
    text: text.value,
    emoji: selectedEmoji.value,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    userId: crypto.randomUUID()

  })
  text.value = ''
  selectedEmoji.value = ''
}


</script>

<template>
  <form @submit.prevent="handleSubmit">
    <textarea @input="handleText" :value="text" autofocus></textarea>
    <SelectMoji v-model="selectedEmoji"/>
    <div class="flex-between">
      <span>{{ textLength }} / {{ maxTextLength }}</span>
      <button>Remember</button>
    </div>
  </form>
</template>

<style scoped>
form {
  padding: 1rem;
  border: solid rgb(117, 117, 117) 1px;
  border-radius: 11px;
}

</style>
