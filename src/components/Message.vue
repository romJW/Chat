<template>
  <div class="message">
    <div class="content flex justify-start gap-2">
      <div class="avatar placeholder">
        <div class="bg-gray-200 text-neutral-content rounded-full w-8">
          <span class="text-xs">{{ message.author }}</span>
        </div>
      </div>
      <p
        class="content__text border border-gray-300 rounded-lg max-w-[220px] max-h-36 pl-2 py-1 pr-3 whitespace-normal"
      >
        {{ message.text }}
      </p>
      <p class="time ml-2 self-end justify-self-end text-gray-400 text-xs">
        {{ message.time }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.content {
  overflow-wrap: break-word;
}
.content__text {
  overflow-wrap: break-word;
}
.time {
  overflow-wrap: break-word;
}
</style>
