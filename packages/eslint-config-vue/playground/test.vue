<script setup>
import { ref } from 'vue'

const name = ref<string>('')

name.value = 'John'

const array = ['string', 1]
const object = { item: '' }
const clickFn = () => {
  if (name.value === 'John') name.value = 'Potato'
  else name.value = 'John'
}
</script>

<template>
  <input v-model="name" type="text"/>
  <div>multi root</div>
  <div
    :class="$style.multi"
    title="clicky"
    alt="clicky"
    style="background-color: blue;"
    @click="clickFn"
  >break and format more than 4 attrs</div>
</template>

<style module>
.multi {
  font-size: 20px;
}
</style>

<style lang="postcss">
input {
  color: white;
}
</style>

<style lang="scss" scoped>
.hey {
  color: blue;
}
</style>
