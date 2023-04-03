<template>
  <textarea
    type="text"
    placeholder="Type here"
    class="input input-bordered input-success w-full max-w-2xl resize-none border-gray-300"
    :value="modelValue"
    @input="updateInput"
    @keydown.enter.exact.prevent
    @keyup.enter.exact="$emit('create')"
  />
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: [String, Number],
});
function updateInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<style>
input[type='text'] {
  word-wrap: break-word;
  word-break: break-all;
}
.input::-webkit-scrollbar {
  display: none;
}
.input {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
