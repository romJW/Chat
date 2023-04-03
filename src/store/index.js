import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import axios from 'axios';
export const useMessageStore = defineStore('messagesvalue.', () => {
  let messages = ref([]);

  const getMessages = computed(() => messages.value);

  function createMessage(message) {
    if (message.text.value !== '') {
      messages.value.push(message.value);
      localStorage.setItem('messages', JSON.stringify(messages.value));
      console.log(messages.value);
    }
    return;
  }

  watch(
    messages,
    (messagesVal) => {
      localStorage.setItem('messages', JSON.stringify(messagesVal));
    },
    { deep: true },
  );

  async function fetchMessages() {
    if (localStorage.getItem('messages')) {
      messages.value = JSON.parse(localStorage.getItem('messages'));
    } else {
      const res = await axios.get('https://629995ce6f8c03a978453425.mockapi.io/messages');
      messages.value = res.data;
      console.log(res.data);
    }
  }
  function setMessages(messages) {
    messages.value = messages;
  }
  function addMessage(message) {
    messages.value.push(message);
  }

  return { messages, getMessages, createMessage, fetchMessages, setMessages, addMessage };
});
