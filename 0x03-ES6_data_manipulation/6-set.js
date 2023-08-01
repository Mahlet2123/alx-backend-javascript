export default function setFromArray(array) {
  const newSet = new Set();

  for (const value of array) {
    newSet.add(value);
  }
  return newSet;
}
