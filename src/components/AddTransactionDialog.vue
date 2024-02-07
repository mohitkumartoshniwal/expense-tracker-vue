<template>
  <Teleport to="body">
    <div class="w-full h-full absolute top-0 bg-black bg-opacity-30">
      <div
        class="bg-white shadow-lg shadow-slate-900 fixed top-1/2 left-1/2 w-3/4 md:w-2/5 lg:w-1/4 -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl"
      >
        <div class="flex justify-between">
          <span class="font-bold text-2xl"> Add Transaction</span>
          <button @click="emit('close-dialog')">&#10006;</button>
        </div>
        <div class="p-1">
          <form @submit.prevent="addTransaction" class="flex flex-col gap-2">
            <label for="type">Type</label>
            <select
              name="type"
              id="type"
              class="border-2 rounded p-1"
              v-model="type"
            >
              <option :value="TYPES.EXPENSE">{{ TYPES.EXPENSE }}</option>
              <option :value="TYPES.INCOME">{{ TYPES.INCOME }}</option>
            </select>

            <template v-if="type === TYPES.EXPENSE">
              <label for="category">Category</label>
              <select
                name="type"
                id="type"
                class="border-2 rounded p-1"
                v-model="category"
              >
                <option v-for="category of categories" :key="category">
                  {{ category }}
                </option>
              </select>
            </template>

            <label for="description">Description</label>
            <input
              type="text"
              id="description"
              class="border-2 rounded p-1"
              required
              v-model="description"
            />

            <label for="amount">Amount</label>
            <input
              type="number"
              id="amount"
              class="border-2 rounded p-1"
              required
              min="1"
              v-model="amount"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
const categories = ["FOOD", "RENT", "ELECTRICITY", "WATER"];

import { ref } from "vue";
import { TYPES } from "../types";
import { expenses, incomes } from "../store/transactions";

const emit = defineEmits<{
  (e: "close-dialog"): void;
}>();

const type = ref<TYPES>(TYPES.EXPENSE);
const description = ref("");
const category = ref(categories[0]);
const amount = ref(0);

function addTransaction() {
  if (type.value === TYPES.EXPENSE) {
    expenses.value.unshift({
      category: category.value,
      amount: amount.value,
      description: description.value,
      date: new Date().toLocaleDateString(),
    });
  } else if (type.value === TYPES.INCOME) {
    incomes.value.unshift({
      amount: amount.value,
      description: description.value,
      date: new Date().toLocaleDateString(),
    });
  }

  emit("close-dialog");
}
</script>
