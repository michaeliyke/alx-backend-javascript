export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new RangeError('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}
