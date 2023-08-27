/**
 * returns a random element in an array
 * @param array input array
 * @returns random element from array
 */
export function getRandomElement<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
