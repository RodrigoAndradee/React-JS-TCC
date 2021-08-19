export const returnCapitalizeFirstLetter = (productAttribute) => {
  return (
    productAttribute.charAt(0).toUpperCase() +
    productAttribute.substr(1).toLowerCase()
  );
};

export const capitalizeFirstLetter = (productInfo) => {
  return {
    ...productInfo,
    name: returnCapitalizeFirstLetter(productInfo.name),
    description: returnCapitalizeFirstLetter(productInfo.description),
  };
};

export const filterSelectedCategory = (productsInfoData, selectedCategory) => {
  if (!selectedCategory) {
    return productsInfoData;
  }

  return productsInfoData.filter(
    (product) => product.category === selectedCategory
  );
};

export const filterProductByName = (productsInfoData, typedProductName) => {
  if (!typedProductName) {
    return productsInfoData;
  }

  return productsInfoData.filter((product) =>
    product.name.toLowerCase().includes(typedProductName.toLowerCase())
  );
};
