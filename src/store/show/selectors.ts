export const isBacklog = (state: any): boolean => {
  return state.show.show.includes('Backlog')
}
