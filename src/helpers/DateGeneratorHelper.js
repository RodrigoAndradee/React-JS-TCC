export const DEFAULT_FORMAT = "YYYY-MM-DD";
export const UI_DEFAULT_FORMAT = "DD/MM/YYYY";

export function generateCurrentDate() {
  const currentDate = new Date();

  return `${currentDate.getUTCDate()}/${
    currentDate.getUTCMonth() + 1
  }/${currentDate.getUTCFullYear()}`;
}
