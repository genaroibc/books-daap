export function isNonEmptyValue(
  value: string | null | undefined
): value is string {
  return value !== null && value !== undefined && value.trim() !== ""
}
