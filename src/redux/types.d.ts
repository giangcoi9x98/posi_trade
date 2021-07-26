// Define a type for the slice state
export interface GlobalState {
  value: number;
}

export interface OrderConfig {
  time: string;
  symbol: string;
  type: 'Limit' | 'Market' | 'Stop Limit';
  side: string;
  price: string;
  amount: string;
  filled: string;
  reduceOnly?: boolean;
  postOnly?: string;
  triggerConditions?: string;
  tpsl: string;
  status: string;
}

export interface OrderState {
  openOrderData: OrderConfig[];
}
