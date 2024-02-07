<template>
  <div>
    <h1 class="text-center font-semibold">Expenses Chart</h1>
    <div>
      <Doughnut
        :data="data"
        :options="{
          responsive: true,
          maintainAspectRatio: false,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
ChartJS.register(ArcElement, Tooltip, Legend);

import { ref, watch } from "vue";
import { expenses } from "../store/transactions";
import { Transaction } from "../types";
import { COLORS } from "../constants";

const data: any = ref({});

watch(expenses, (newExpenses) => formatExpenses(newExpenses), {
  immediate: true,
  deep: true,
});

function formatExpenses(expenses: Transaction[]) {
  let map = new Map();

  expenses.forEach(({ category, amount }) => {
    if (map.has(category)) {
      const oldAmount = map.get(category);
      map.set(category, oldAmount + amount);
    } else {
      map.set(category, amount);
    }
  });

  data.value = {
    labels: Array.from(map.keys()),
    datasets: [
      {
        data: Array.from(map.values()),
        backgroundColor: COLORS,
      },
    ],
  };
}
</script>
