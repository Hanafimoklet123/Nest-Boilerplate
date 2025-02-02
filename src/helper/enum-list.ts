export enum statusTransaction {
  PENDING,
  SUCCESS,
  FAILED,
  APPROVED,
  REJECTED,
}

export enum typeTransaction {
  DISTRIBUTION,
  ORDER,
  DEPOSIT_SUPPLIER,
  DEPOSIT_RETURN,
}

export enum productType {
  NORMAL,
  PROMO,
}

export enum coaType {
  WALLET,
  INCOME,
  INVENTORY,
  COST_OF_SALES,
  SALES,
  BANK,
  EXPENSE,
  ACCOUNT_RECEIVABLE,
  ACCOUNT_PAYABLE,
  BUDGET,
  CONTRA_BUDGET,
}

export enum balanceType {
  DEBIT,
  CREDIT,
}

export enum accountType {
  PARTNER,
  CUSTOMER,
}

export enum BlastEmailType {
  SPESIFIC_USER = 'specific_user',
  SPESIFIC_SERVICE = 'specific_service',
  ALL = 'all',
}

export enum AuditTable {
  CLIENT = 'CLIENT',
  CLIENT_SERVICE = 'CLIENT_SERVICE',
}
