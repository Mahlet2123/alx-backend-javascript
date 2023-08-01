export default function hasValuesFromArray(set, array) {
  let result;
  for (const values of array) {
    if (set.has(values)) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}
