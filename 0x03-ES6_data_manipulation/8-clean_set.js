export default function cleanSet(set, startString) {
  if (!startString) return '';
  const arr = Array.from(set).filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  return arr.join('-');
}
