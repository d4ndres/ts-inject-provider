import { reactive } from 'vue'
import { type Component } from 'vue'
const files = import.meta.glob('@/assets/icons/emojis/*.svg', { eager: true })
import type { Emoji } from '@/types'

type emojiComponent = { name: Emoji, component: Component }[]


export const useEmojis = () => {
  const emojis : emojiComponent = reactive([])

  for( const path in files) {
    const component = files[path] as Component
    const newPath = path.replace('/src/assets/icons/emojis/', "").replace("-emoji.svg", "") as Emoji
    emojis.push({ name: newPath, component})
  }

  return { emojis }
}