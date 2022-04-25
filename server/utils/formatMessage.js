export function formatMessage(str) {
  if (!str) return "";

  // Make first letter capital
  return str.charAt(0).toUpperCase() + str.slice(1);
}
