<template>
  <div v-if="show" class="modal-overla" @click.self="emit('close')">
    <div class="modal-conten">
      <h2>{{ $t ("ord") }}</h2>
      <p>{{ $t ("waiter") }}</p>
      <button class="close-bt" @click="emit('close')">{{ $t ("agree") }}</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean
});
const emit = defineEmits(["close"]);
</script>

<style scoped>

</style>
