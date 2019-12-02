export const filteredWrappers = (state: any, type: string): boolean => {
  return state.show.show.includes(type)
}
