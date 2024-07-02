export default function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  // Remove the trailing dash
  result = result.slice(0, -1);

  return result;
}
