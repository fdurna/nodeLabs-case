import { useQuery } from "@tanstack/react-query";
import { getFinancialTransactionsRecent } from "api/financialApi";

export const useRecentTransactions = (limit: number = 3) => {
  return useQuery({
    queryKey: ["recent-transactions", limit],
    queryFn: () => getFinancialTransactionsRecent(limit),
  });
};




