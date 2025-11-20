import { useQuery } from "@tanstack/react-query";
import { getScheduledTransfers } from "api/financialApi";

export const useScheduledTransfers = () => {
  return useQuery({
    queryKey: ["scheduled-transfers"],
    queryFn: getScheduledTransfers,
  });
};




