<template>
  <div class="chat ml-3">
    <div
      class="board flex flex-col gap-y-2 overflow-y-auto h-[500px] w-[730px] border border-solid border-gray-300 rounded mb-6 py-3 px-3"
    >
      <Message
        v-for="message in messages"
        :message="message"
        :key="message.id"
        :class="{ sent: message.isSent }"
        class="message"
      />
    </div>
    <MessageForm @create="createMessage" />
  </div>
</template>

<script setup>
import Message from '../components/Message.vue';
import MessageForm from '../components/MessageForm.vue';
import { useMessageStore } from '../store/index.js';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const store = storeToRefs(useMessageStore());
const { messages } = storeToRefs(useMessageStore());
const { fetchMessages, setMessages, addMessage } = useMessageStore();
onMounted(() => {
  fetchMessages();
});
function createMessage(message) {
  if (message.text.value !== '') {
    addMessage(message);
  }
  return;
}
</script>

<style>
.sent {
  margin-left: 450px;
}
.board {
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  scroll-snap-type: y proximity;
}
.message:last-child {
  scroll-snap-align: end;
  scroll-margin-block-end: 5rem;
}
.board::-webkit-scrollbar {
  display: none;
}
.board {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
