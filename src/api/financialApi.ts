import { http } from "./httpClient";

// financial transactions

export interface Transaction {
  id: string;
  name: string;
  business: string;
  image: string;
  type: string;
  amount: number;
  currency: string;
  date: string;
  status: string;
}

export interface FinancialSummary {
  totalIncome: number;
  totalExpense: number;
  count: number;
}

export interface FinancialTransactionsResponse {
  success: boolean;
  message: string;
  data: {
    transactions: Transaction[];
    summary: FinancialSummary;
  };
}

export const getFinancialTransactionsRecent = async (limit: number = 20): Promise<Transaction[]> => {
  const res = await http.get<FinancialTransactionsResponse>(`/financial/transactions/recent?limit=${limit}`);
  return res.data.data.transactions;
};


// financial summary
export interface FinancialSummaryResponse {
  totalBalance: {
    amount: number;
    currency: string;
    change: {
      percentage: number;
      trend: "up" | "down";
    };
  };
  totalExpense: {
    amount: number;
    currency: string;
    change: {
      percentage: number;
      trend: "up" | "down";
    };
  };
  totalSavings: {
    amount: number;
    currency: string;
    change: {
      percentage: number;
      trend: "up" | "down";
    };
  };
  lastUpdated: string;
}

export const getFinancialSummary = async (): Promise<FinancialSummaryResponse> => {
  const res = await http.get("/financial/summary");
  return res.data.data;
};

// wallet card
export interface WalletCard {
  id: string;
  name: string;
  type: string;
  cardNumber: string;
  bank: string;
  network: string;
  expiryMonth: number;
  expiryYear: number;
  color: string;
  isDefault: boolean;
}

export interface WalletResponse {
  success: boolean;
  message: string;
  data: {
    cards: WalletCard[];
  };
}

export const getFinancialWallet = async (): Promise<WalletCard[]> => {
  const res = await http.get<WalletResponse>("/financial/wallet");
  return res.data.data.cards;
};


// scheduled transfer
export interface ScheduledTransfer {
  id: string;
  name: string;
  image: string;
  date: string;
  amount: number;
  currency: string;
  status: string;
}

export interface ScheduledTransfersResponse {
  success: boolean;
  message: string;
  data: {
    transfers: ScheduledTransfer[];
    summary: {
      totalScheduledAmount: number;
      count: number;
    };
  };
}


export const getScheduledTransfers = async (): Promise<ScheduledTransfer[]> => {
  const res = await http.get<ScheduledTransfersResponse>('/financial/transfers/scheduled');
  return res.data.data.transfers;
};


// working capital
export const getFinancialWorkingCapital = async (): Promise<any> => {
  const res = await http.get("/financial/working-capital");
  return res.data;
};
