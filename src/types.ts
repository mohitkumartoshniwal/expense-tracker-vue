export enum TYPES {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export type Transaction = {
  category?: string;
  description: string;
  amount: number;
  date: string;
};
