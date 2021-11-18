export const DEFAULT_FORMAT = "YYYY-MM-DD";
export const UI_DEFAULT_FORMAT = "DD/MM/YYYY";

export function generateCurrentDate(params = {}) {
  const {
    generateTomorrowDate = false,
    stringifiedDate = true,
    dateToGen,
  } = params;

  if (dateToGen) {
    const generatedDate = new Date(dateToGen);

    if (stringifiedDate) {
      return `${generatedDate.getDate()}/${
        generatedDate.getMonth() + 1
      }/${generatedDate.getFullYear()}`;
    }

    return generatedDate;
  }

  const currentDate = new Date();

  if (generateTomorrowDate) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    if (stringifiedDate) {
      return `${nextDay.getDate()}/${
        nextDay.getMonth() + 1
      }/${nextDay.getFullYear()}`;
    }

    return nextDay;
  }

  if (stringifiedDate) {
    return `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
  }
  return currentDate;
}
