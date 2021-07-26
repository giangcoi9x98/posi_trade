import {
  ItemTitleOrederHistory,
  ItemTradeOrderHistory,
  ItemTabPosition,
  ItemOpenOrder,
  ItemTabOrderHistory,
} from './type';

export const TitleOpenOrder: ItemTitleOrederHistory[] = [
  {
    title: 'time',
    id: '1',
  },
  {
    title: 'Symbol',
    id: '2',
  },
  {
    title: 'Type',
    id: '3',
  },
  {
    title: 'Side',
    id: '4',
  },
  {
    title: 'Price',
    id: '5',
  },
  {
    title: 'Amount',
    id: '6',
  },
  {
    title: 'Filled',
    id: '7',
  },
  {
    title: 'Reduce Only',
    id: '8',
  },
  {
    title: 'Post Only',
    id: '9',
  },
  {
    title: 'Trigger Conditions',
    id: '10',
  },
  {
    title: 'TP/SL',
    id: '11',
  },
];

export const TitleTabOrderHistory: ItemTitleOrederHistory[] = [
  {
    title: 'time',
    id: '1',
  },
  {
    title: 'Symbol',
    id: '2',
  },
  {
    title: 'Type',
    id: '3',
  },
  {
    title: 'Side',
    id: '4',
  },
  {
    title: 'Average',
    id: '5',
  },
  {
    title: 'Price',
    id: '6',
  },
  {
    title: 'Excuted',
    id: '7',
  },
  {
    title: 'Amount',
    id: '8',
  },
  {
    title: 'Reduce Only',
    id: '9',
  },
  {
    title: 'Post Only',
    id: '10',
  },
  {
    title: 'Trigger Conditions',
    id: '11',
  },
];

export const TitleListTabOrderHistory: ItemTitleOrederHistory[] = [
  {
    title: 'Position',
    id: ' 1',
  },
  {
    title: 'Open Order',
    id: ' 2',
  },
  {
    title: 'Order History',
    id: ' 3',
  },
  {
    title: 'Trade History',
    id: ' 4',
  },
];

export const TitleTabPosition: ItemTitleOrederHistory[] = [
  {
    title: 'Symbol',
    id: '1',
  },
  {
    title: 'Size',
    id: '2',
  },
  {
    title: 'Entry Price',
    id: '3',
  },
  {
    title: 'Mark Price',
    id: '4',
  },
  {
    title: 'Liq.Price',
    id: '5',
  },
  {
    title: 'Margin Ratio',
    id: '6',
  },
  {
    title: 'Margin',
    id: '7',
  },
  {
    title: 'PNL(ROE%) ',
    id: '8',
  },
  {
    title: 'Close All Positions',
    id: '9',
  },
  {
    title: 'TP/SL For Positions',
    id: '10',
  },
];

export const TitleTradeHistory: ItemTitleOrederHistory[] = [
  {
    title: 'Time',
    id: '1',
  },
  {
    title: 'Symbol',
    id: '2',
  },
  {
    title: 'Side',
    id: '3',
  },
  {
    title: 'Price',
    id: '4',
  },
  {
    title: 'Quantity',
    id: '5',
  },
  {
    title: 'Fee',
    id: '6',
  },
  {
    title: 'realizedProfit',
    id: '7',
  },
];

export const ContentTradeHistory: ItemTradeOrderHistory[] = [
  {
    time: '1',
    symbol: '2',
    side: '3',
    price: '4',
    quantity: '5',
    fee: '6',
    realizedProfit: '7',
    id: '1',
  },
  {
    time: '1',
    symbol: '2',
    side: '3',
    price: '4',
    quantity: '5',
    fee: '6',
    realizedProfit: '7',
    id: '2',
  },
  {
    time: '1',
    symbol: '2',
    side: '3',
    price: '4',
    quantity: '5',
    fee: '6',
    realizedProfit: '7',
    id: '3',
  },
];

export const ContentTabOrderHistory: ItemTabOrderHistory[] = [
  {
    time: '1',
    symbol: '2',
    type: '3',
    side: '4',
    average: '4',
    price: '5',
    excuted: '6',
    amount: '7',
    reduceOnly: '8',
    postOnly: '9',
    triggerConditions: '10',
    id: '1',
  },
  {
    time: '1',
    symbol: '2',
    type: '3',
    side: '4',
    average: '4',
    price: '5',
    excuted: '6',
    amount: '7',
    reduceOnly: '8',
    postOnly: '9',
    triggerConditions: '10',
    id: '2',
  },
  {
    time: '1',
    symbol: '2',
    type: '3',
    side: '4',
    average: '4',
    price: '5',
    excuted: '6',
    amount: '7',
    reduceOnly: '8',
    postOnly: '9',
    triggerConditions: '10',
    id: '3',
  },
];

export const ContentOpenOrder: ItemOpenOrder[] = [
  {
    time: '1',
    symbol: '2',
    type: '3',
    side: '4',
    price: '4',
    amount: '5',
    frilled: '6',
    reduceOnly: '7',
    postOnly: '8',
    triggerOnditions: '9',
    tpsl: '10',
    id: '1',
  },
  {
    time: '1',

    symbol: '2',
    type: '3',
    side: '4',
    price: '4',
    amount: '5',
    frilled: '6',
    reduceOnly: '7',
    postOnly: '8',
    triggerOnditions: '9',
    tpsl: '10',
    id: '2',
  },
  {
    time: '1',
    symbol: '2',
    type: '3',
    side: '4',
    price: '4',
    amount: '5',
    frilled: '6',
    reduceOnly: '7',
    postOnly: '8',
    triggerOnditions: '9',
    tpsl: '10',
    id: '3',
  },
];

export const ContentTabPosition: ItemTabPosition[] = [
  {
    symbol: '1',
    size: '2',
    entyPrice: '3',
    markPrice: '4',
    liqPrice: '5',
    marginRatio: '6',
    margin: '7',
    pnl: '8',
    id: '1',
  },
  {
    symbol: '1',
    size: '2',
    entyPrice: '3',
    markPrice: '4',
    liqPrice: '5',
    marginRatio: '6',
    margin: '7',
    pnl: '8',
    id: '2',
  },
  {
    symbol: '1',
    size: '2',
    entyPrice: '3',
    markPrice: '4',
    liqPrice: '5',
    marginRatio: '6',
    margin: '7',
    pnl: '8',
    id: '3',
  },
];
