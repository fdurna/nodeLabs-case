import { useQuery } from '@tanstack/react-query';
import { getFinancialSummary } from 'api/financialApi';

export const useFinancialSummary = () => {
  return useQuery({
    queryKey: ["financialSummary"],
    queryFn: getFinancialSummary,
  });
};
