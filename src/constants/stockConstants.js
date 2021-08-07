export const TOOLTIP_TITLE = {};

export const TOOLTIP_LABELS = {
  currentQunatity: "Quantidade atual em estoque",
};

export const DRAWER_LABELS = {
  title: "Adicionar produto ao Estoque",
  cancelButton: "Cancelar",
  confirmButton: "Adicionar",
};

export const DECREASE_QUANTITY_LABEL = "Diminuir a quantidade em estoque";
export const INCREASE_QUANTITY_LABEL = "Aumentar a quantidade em estoque";
export const QUANTITY_LABEL = "Quantidade em estoque";

export const STOCK_FORM_INFOS = [
  {
    fieldName: "productId",
    fieldType: "select",
    isRequired: true,
    placeHolder: "Selecione um Produto",
    requiredMessage: "Selecione um produto",
    stepTitle: "Selecione um Produto",
  },
  {
    fieldName: "quantity",
    fieldType: "inputNumber",
    isRequired: true,
    placeHolder: "Digite a Quantidade do Produto",
    requiredMessage: "Quantidade do Produto",
    stepTitle: "Quantidade do Produto",
  },
  {
    fieldName: "price",
    fieldType: "inputNumber",
    isRequired: true,
    placeHolder: "Digite o Preço do Produto",
    requiredMessage: "Preço do Produto",
    stepTitle: "Preço do Produto",
  },
  {
    fieldName: "dueDate",
    fieldType: "date",
    isRequired: true,
    placeHolder: "Selecione a Data de Vencimento",
    requiredMessage: "Selecione a Data de Vencimento",
    stepTitle: "Data de Vencimento",
  },
];
