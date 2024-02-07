<template>
  <div class="flex justify-between items-center p-1 border-b-2">
    <div>
      <div class="text-2xl font-semibold">{{ transaction.description }}</div>
      <div class="flex gap-2">
        <span class="text-gray-400"> {{ transaction.date }}</span>
        <span
          v-if="transaction.category"
          class="bg-blue-700 text-white px-1 rounded-2xl"
        >
          {{ transaction.category }}</span
        >
      </div>
    </div>

    <div class="font-bold text-lg">{{ transaction.amount }}</div>
  </div>
</template>

<script setup lang="ts">
import { Transaction } from "../types";

defineProps<{
  transaction: Transaction;
}>();
</script>
