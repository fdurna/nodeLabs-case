import { useQuery } from '@tanstack/react-query';
import { getFinancialWallet } from 'api/financialApi';

export const useFinancialWallet = () => {
  return useQuery({
    queryKey: ["financialWallet"],
    queryFn: getFinancialWallet,
  });
};
