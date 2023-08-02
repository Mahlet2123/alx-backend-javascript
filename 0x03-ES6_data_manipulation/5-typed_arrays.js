export default function createInt8TypedArray(length, position, value) {
  // Step 1: Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Step 2: Create a DataView to access the buffer
  const dataView = new DataView(buffer);

  // Step 3: Check if the position is within the range of the buffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Step 4: Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  // Step 5: Return the ArrayBuffer
  return dataView;
}
