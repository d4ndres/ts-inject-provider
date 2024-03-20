<script setup lang="ts">
import EntryEditor from './components/EntryEditor.vue';
import HeaderApp from './components/HeaderApp.vue';
import MyJournal from './components/MyJournal.vue';
import { type Entry } from './types';
import { reactive } from 'vue';
import CountProvider from './context/CountProvider.vue'
const entries = reactive<Entry[]>([])

const handleSubmit = (entry : Entry) => {
  entries.push(entry)
}

</script>

<template>
  <main>
    <HeaderApp />
    <CountProvider >
      <EntryEditor @create-entry="handleSubmit"/>
      <MyJournal :entries="entries"/>
    </CountProvider>
  </main>
</template>


<style lang="scss" scoped></style>