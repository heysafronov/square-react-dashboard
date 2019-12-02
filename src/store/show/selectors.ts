export const getShowState = (state: any): object => {
  return state.show.list
}

export const filteredWrappers = (state: any, type: string): boolean => {
  return state.show.list.includes(type)
}
