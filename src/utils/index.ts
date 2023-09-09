export const formateDate = (
  dateSQLformat: string,
  showDay?: boolean
): string => {
  var jsDate = new Date(dateSQLformat).toLocaleDateString();
  const monthArray = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  let dayChange =
    jsDate.split(".")[0][0] === "0"
      ? jsDate.split(".")[0][1]
      : jsDate.split(".")[0];
  let day = showDay ? dayChange + "," : "";
  return `${monthArray[Number(jsDate.split(".")[1]) - 1]} ${day} ${
    jsDate.split(".")[2]
  }`;
};
