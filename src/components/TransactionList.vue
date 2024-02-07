<template>
  <div class="flex flex-col gap-4 md:flex-row md:justify-between">
    <div class="flex-1 p-3 rounded shadow-md">
      <h1 class="text-2xl font-bold bg-gray-100 py-2 px-1 mb-2">Expenses</h1>
      <div class="h-56 overflow-y-auto overflow-x-hidden">
        <Transaction
          v-for="(expense, index) of expenses"
          :transaction="expense"
          :key="index"
        />
      </div>
    </div>
    <div class="flex-1 p-3 rounded shadow-md">
      <h1 class="text-2xl font-bold bg-gray-100 py-2 px-1 mb-2">Incomes</h1>
      <div class="h-56 overflow-y-auto overflow-x-hidden">
        <Transaction
          v-for="(income, index) of incomes"
          :transaction="income"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { expenses, incomes } from "../store/transactions";
import Transaction from "./Transaction.vue";
</script>
