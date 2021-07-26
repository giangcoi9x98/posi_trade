export interface ItemTitleOrederHistory {
  title: string;
  id: string;
}

export interface ItemTradeOrderHistory {
  time: string;
  symbol: string;
  side: string;
  price: string;
  quantity: string;
  fee: string;
  realizedProfit: string;
  id: string;
}

export interface ItemTabOrderHistory {
  time: string;
  symbol: string;
  type: string;
  side: string;
  average: string;
  price: string;
  excuted: string;
  amount: string;
  reduceOnly: string;
  postOnly: string;
  triggerConditions?: string;
  id: string;
}

export interface ItemOpenOrder {
  time: string;
  symbol: string;
  type: string;
  side: string;
  price: string;
  amount: string;
  frilled: string;
  reduceOnly: string;
  postOnly: string;
  triggerOnditions: string;
  tpsl: string;
  id: string;
}

export interface ItemTabPosition {
  symbol: string;
  size: string;
  entyPrice: string;
  markPrice: string;
  liqPrice: string;
  marginRatio: string;
  margin: string;
  pnl: string;
  id: string;
}

export interface ItemContentTabPosition {
  symbol: string;
  size: string;
  entyPrice: string;
  markPrice: string;
  liqPrice: string;
  marginRatio: string;
  margin: string;
  pnl: string;
  id: string;
}
