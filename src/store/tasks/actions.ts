export function dragAndDrop(e, type) {
  return {
    type: 'DRAG_AND_DROP',
    payload: { e, type }
  }
}
