export const SALES_DATA_INDEXES = {
  CREATED_DATE: "createdDate",
  EMAIL: "email",
  ORDER_NUMBER: "orderNumber",
  ORDER_STATUS: "status",
  PAYMENT_TYPE: "paymentType",
  REJECT_JUSTIFICATION: "rejectJustification",
  SUBTOTAL_VALUE: "subTotalPrice",
  TAX_VALUE: "tax",
  TOTAL_VALUE: "totalPrice",
};

export const PAYMENT_TYPES = Object.freeze({
  CARD: "CARD",
  MONEY: "MONEY",
});

export const PAYMENT_PLACES = Object.freeze({
  APP: "APP",
  DESTINATION: "DEST",
});

export const STATUS_TYPES = Object.freeze({
  FINISHED: "Finalizado",
  PENDING: "Pendente",
  PREPARING: "Separando",
  REJECTED: "Rejeitado",
});

export const DEFAULT_CELL_ALIGNMENT = "center";
