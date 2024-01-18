export function mergeArrays<T>(first: T[], second: T[], targetLength: number): T[] {
  const firstLength = first.length;
  const secondLength = second.length;
  if (secondLength >= targetLength) {
    return second.slice(-targetLength);
  }
  if (firstLength + secondLength <= targetLength) {
    return first.concat(second);
  }
  return first.slice(-(targetLength - secondLength)).concat(second);
}
