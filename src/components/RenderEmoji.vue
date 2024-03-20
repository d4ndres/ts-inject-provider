<script setup lang="ts">
defineProps({
  name: String
})
</script>

<template>
  <li>
    <img :src="`assets/icons/emojis/${name}-emoji.svg`" :alt="name">
  </li>
</template>

<style scoped>
li {
  list-style: none;
  cursor: pointer;
}
img {
  filter: invert(1);
  border-radius: 50%;
  transition: .3s;
}

li.selected img {
  box-shadow: 0 0 2px 2px rgb(179, 65, 163), inset 0 0 10px 5px rgb(179, 65, 163);
}

</style>