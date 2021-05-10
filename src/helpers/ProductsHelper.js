export const returnCapitalizeFirstLetter = (productAttribute) => {
  return productAttribute.replace(/\b\w/g, (l) => {
    return l.toUpperCase();
  });
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

  const filteredProducts = productsInfoData.filter((product) => {
    return product.type === selectedCategory;
  });

  return filteredProducts;
};

export const filterProductByName = (productsInfoData, typedProductName) => {
  if (!typedProductName) {
    return productsInfoData;
  }

  const enhancementTypedProductName = returnCapitalizeFirstLetter(
    typedProductName
  );

  const filteredProducts = productsInfoData.filter((product) => {
    return product.name.includes(enhancementTypedProductName);
  });

  return filteredProducts;
};
