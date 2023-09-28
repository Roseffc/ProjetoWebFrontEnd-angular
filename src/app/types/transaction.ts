export type Transactions = {
  administrationFee: number;
  authorizationCode: string;
  cardBrand: string;
  channel: string;
  channelCode: number;
  cnpjRoot: number;
  date: string;
  grossAmount: number;
  id: string;
  mdrFeeAmount: number;
  mdrTaxAmount: number;
  merchantId: string;
  minimumMDRAmmount: number;
  netAmount: number;
  paymentNode: number;
  paymentType: string;
  status: string;
  terminal: string;
  truncatedCardNumber: string;
  withdrawAmount: number;
};
