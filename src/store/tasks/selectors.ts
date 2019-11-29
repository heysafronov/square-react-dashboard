export const filtratedTasksBacklog = state => {
  return state.tasks.filter(task => {
    return task.type === 'backlog'
  })
}

export const filtratedTasksTodo = state => {
  return state.tasks.filter(task => {
    return task.type === 'todo'
  })
}
