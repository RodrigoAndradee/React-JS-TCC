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
    (stock) => stock.product.category === selectedCategory
  );
};

export const filterStockByName = (stockInfoData, typedProductName) => {
  if (!typedProductName) {
    return stockInfoData;
  }

  return stockInfoData.filter((stock) => {
    const typedInfo = stock?.toLowerCase();

    return (
      stock?.name?.toLowerCase().includes(typedInfo) ||
      stock?.description?.toLowerCase().includes(typedInfo) ||
      stock?.type.toLowerCase().includes(typedInfo)
    );
  });
};

export const filterStockByDueDate = (stockInfoData, selectedDate) => {
  if (!selectedDate) {
    return stockInfoData;
  }
  const enhancedDate = selectedDate.format("YYYY-MM-DD");

  return stockInfoData.filter((stock) => stock.dueDate.includes(enhancedDate));
};
