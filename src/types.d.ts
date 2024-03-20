export interface User {
  id: number
  name: string
  settings: string[]
}

export interface Entry {
  text: string
  emoji: Emoji
  id: string
  createdAt: Date
  userId: string
}

export type Emoji = ''
| "confused"
| "cool"
| "crying"
| "grinning-squinting"
| "happy"
| "heart-eyes"
| "laugh"
| "sad"
| "shocked"
| "smiling"
| "smiling-with-eyes"
| "surprised"
| "wink"
| "worried";


export interface InjectionCount {
  increment: () => void,
  decrement: () => void,
  count: number
}

export type CountFunction = Pick<InjectionCount, 'increment' | 'decrement'>;
export type Count = Pick<InjectionCount, 'count'>;