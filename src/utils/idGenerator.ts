export const randomId = (): string => {
  return Math.round(Math.random() * 36 ** 8).toString(36)
}
