export const checkIfTheyAreTheSameValues = (
  param: any,
  paramToCompare: any
) => {
  var stringParam = JSON.stringify(param);
  var stringParamToCompare = JSON.stringify(paramToCompare);
  return stringParam === stringParamToCompare;
};
