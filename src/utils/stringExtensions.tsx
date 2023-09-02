/**
 * Trucates a string based on maxlenght and appends "..." at the end
 * @param text input string that should be truncated
 * @param maxLength max length of strin
 * @returns truncated string
 */
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space character within the maxLength
  const lastSpaceIndex = text.lastIndexOf(' ', maxLength);

  if (lastSpaceIndex === -1) {
    // If there's no space within the maxLength, just truncate at the maxLength
    return text.substring(0, maxLength) + '...';
  }

  // Truncate at the last space within the maxLength
  return text.substring(0, lastSpaceIndex) + '...';
}
