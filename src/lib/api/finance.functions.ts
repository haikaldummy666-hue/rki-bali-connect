import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { FINANCE } from "../constants";

// Global in-memory state for demonstration purposes
// NOTE: In Vercel serverless functions, this will reset on cold starts.
// For persistent storage, use a real database like Vercel KV or PostgreSQL.
let financeData = { ...FINANCE };

export const getFinanceData = createServerFn({ method: "GET" })
  .handler(async () => {
    return financeData;
  });

export const addDonation = createServerFn({ method: "POST" })
  .inputValidator(z.object({ amount: z.number().min(1) }))
  .handler(async ({ data }) => {
    financeData.income += data.amount;
    financeData.deficit = financeData.expense - financeData.income;
    return financeData;
  });

export const updateFinanceData = createServerFn({ method: "POST" })
  .inputValidator(z.object({ income: z.number().min(0), expense: z.number().min(0) }))
  .handler(async ({ data }) => {
    financeData.income = data.income;
    financeData.expense = data.expense;
    financeData.deficit = data.expense - data.income;
    return financeData;
  });
