export const returnCapitalizeFirstLetter = (productAttribute) => {
  return (
    productAttribute.charAt(0).toUpperCase() +
    productAttribute.substr(1).toLowerCase()
  );
};

export const capitalizeFirstLetter = (stockInfoData) => {
  return {
    ...stockInfoData,
    name: returnCapitalizeFirstLetter(stockInfoData.name),
    description: returnCapitalizeFirstLetter(stockInfoData.description),
  };
};

export const filterStockByCategory = (stockInfoData, selectedCategory) => {
  if (!selectedCategory) {
    return stockInfoData;
  }

  return stockInfoData.filter(
    (stock) => stock.product.type === selectedCategory
  );
};

export const filterStockByName = (stockInfoData, typedProductName) => {
  if (!typedProductName) {
    return stockInfoData;
  }

  const enhancementTypedProductName = returnCapitalizeFirstLetter(
    typedProductName
  );

  return stockInfoData.filter((stock) =>
    stock.product.name.includes(enhancementTypedProductName)
  );
};

export const filterStockByDueDate = (stockInfoData, selectedDate) => {
  if (!selectedDate) {
    return stockInfoData;
  }

  return stockInfoData.filter((stock) => stock.dueDate.includes(selectedDate));
};
