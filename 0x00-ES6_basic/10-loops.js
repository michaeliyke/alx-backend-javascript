export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  const array2 = [];

  for (const value of array) {
    array2[index] = appendString + value;
    index += 1;
  }

  return array2;
}
