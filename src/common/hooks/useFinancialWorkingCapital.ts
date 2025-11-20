import { useQuery } from '@tanstack/react-query';
import { getFinancialWorkingCapital } from 'api/financialApi';

export const useFinancialWorkingCapital = () => {
  return useQuery({
    queryKey: ["financialWorkingCapital"],
    queryFn: getFinancialWorkingCapital,
  });
};
