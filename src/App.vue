<script setup lang="ts">
import { ref } from "vue";
import TransactionSummary from "./components/TransactionSummary.vue";
import AddTransactionDialog from "./components/AddTransactionDialog.vue";
import TransactionList from "./components/TransactionList.vue";
import ExpensesChart from "./components/ExpensesChart.vue";

const isDialogVisible = ref(false);
</script>

<template>
  <div class="p-2 md:w-3/5 h-screen mx-auto">
    <TransactionSummary />
    <div class="flex justify-end">
      <button
        class="border-2 text-gray-400 rounded my-2 p-1 font-semibold"
        @click="isDialogVisible = !isDialogVisible"
      >
        Add Transaction
      </button>
    </div>
    <TransactionList />
    <ExpensesChart />
    <AddTransactionDialog
      v-if="isDialogVisible"
      @close-dialog="isDialogVisible = !isDialogVisible"
    />
  </div>
</template>
