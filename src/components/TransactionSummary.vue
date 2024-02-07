<template>
  <div class="p-2 border-2 border-purple-500 rounded-md">
    <div class="text-center mb-2">
      <div class="text-3xl font-bold text-purple-600">$ {{ summary }}</div>
    </div>
    <div class="flex justify-center gap-11">
      <div class="text-2xl text-green-500 font-semibold">
        +$ {{ incomesSummary }}
      </div>

      <div class="text-2xl text-red-600 font-semibold">
        -$ {{ expensesSummary }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { expenses, incomes } from "../store/transactions";

const expensesSummary = computed(() => {
  return expenses.value.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
});

const incomesSummary = computed(() => {
  return incomes.value.reduce((total, income) => {
    return total + income.amount;
  }, 0);
});

const summary = computed(() => incomesSummary.value - expensesSummary.value);
</script>
