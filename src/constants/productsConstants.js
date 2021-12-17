export const PRODUCT_FORM_INFOS = [
  {
    fieldName: "name",
    fieldType: "input",
    isRequired: true,
    placeHolder: "Digite o Nome do Produto",
    requiredMessage: "Digite o nome do Produto",
    stepTitle: "Nome do Produto",
  },
  {
    fieldName: "description",
    fieldType: "input",
    isRequired: true,
    placeHolder: "Digite a Descrição do Produto",
    requiredMessage: "Digite a descrição do Produto",
    stepTitle: "Descrição do Produto",
  },
  {
    fieldName: "category",
    fieldType: "select",
    isRequired: true,
    placeHolder: "Selecione uma categoria",
    requiredMessage: "Selecione a categoria do Produto",
    stepTitle: "Categoria",
  },
  {
    fieldName: "defaultImage",
    fieldType: "input",
    isRequired: true,
    placeHolder: "Digite a URL da Imagem",
    requiredMessage: "Digite a URL da imagem",
    stepTitle: "URL da Imagem",
  },
  {
    fieldName: "type",
    fieldType: "input",
    isRequired: true,
    placeHolder: "Digite a Unidade do Produto",
    requiredMessage: "Digite a unidade do produto",
    stepTitle: "Unidade do Produto",
  },
  {
    fieldName: "enabled",
    fieldType: "checkbox",
    isRequired: false,
    placeHolder: "Produto Disponível",
    requiredMessage: "",
    stepTitle: "Disponibilidade do Produto",
  },
];

const ENABLE_PRODUCT = {
  true: "Desabilitar Produto",
  false: "Habilitar Produto",
};

const EDIT_PRODUCT_LABEL = "Editar Produto";

export { EDIT_PRODUCT_LABEL, ENABLE_PRODUCT };
