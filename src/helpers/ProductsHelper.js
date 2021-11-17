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

export const filterProductsInfos = ({
  selectedCategory,
  typedFilter,
  unfilteredData = [],
}) => {
  let filteredData = unfilteredData;

  if (typedFilter) {
    const typedFilterLowerCase = typedFilter.toLowerCase();

    filteredData = filteredData.filter(
      (item) =>
        item?.name.toLowerCase().includes(typedFilterLowerCase) ||
        item?.description?.toLowerCase().includes(typedFilterLowerCase) ||
        item?.type.toLowerCase().includes(typedFilterLowerCase)
    );
  }

  if (selectedCategory) {
    filteredData = filteredData.filter(
      (item) => item.category === selectedCategory
    );
  }

  return filteredData;
};
