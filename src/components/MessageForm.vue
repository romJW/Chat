<template>
  <form @submit.prevent>
    <div class="flex gap-2">
      <MessageInput
        type="text"
        placeholder="Type here"
        v-model="message.text"
        @create="createMessage"
      />
      <button @click="createMessage" class="btn btn-xs self-center bg-gray-300" type="submit">
        Send
      </button>
    </div>
  </form>
</template>

<script setup>
import MessageInput from './MessageInput.vue';
import { ref } from 'vue';
const emit = defineEmits(['create']);
const message = ref({
  text: '',
});

function createMessage() {
  message.value.id = Math.random();
  message.value.time = `${new Date().getHours()}:${new Date().getMinutes()}`;
  message.value.author = 'Me';
  message.value.isSent = true;
  emit('create', message.value);
  message.value = {
    text: '',
  };
}
</script>
