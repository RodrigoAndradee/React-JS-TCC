// Helpers
import { DEFAULT_FORMAT } from "./DateGeneratorHelper";

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

export const filterStockInfos = ({
  selectedCategory,
  selectedDueDate,
  typedFilter,
  unfilteredData = [],
}) => {
  let filteredData = unfilteredData;

  if (typedFilter) {
    const typedFilterLowerCase = typedFilter.toLowerCase();

    filteredData = filteredData.filter(
      (item) =>
        item?.product?.name.toLowerCase().includes(typedFilterLowerCase) ||
        item?.product?.description
          ?.toLowerCase()
          .includes(typedFilterLowerCase) ||
        item?.product?.type.toLowerCase().includes(typedFilterLowerCase)
    );
  }

  if (selectedCategory) {
    filteredData = filteredData.filter(
      (item) => item.product.category === selectedCategory
    );
  }

  if (selectedDueDate) {
    const formattedSelectedDueDate = selectedDueDate.format(DEFAULT_FORMAT);

    filteredData = filteredData.filter((item) => {
      return item.dueDate.includes(formattedSelectedDueDate);
    });
  }

  return filteredData;
};
