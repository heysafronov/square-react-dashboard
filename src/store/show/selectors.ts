export const getShowState = (state: any): object => {
  return state.show.list
}

export const getKanbanOption = (state: any): boolean => {
  return state.show.kanban
}
