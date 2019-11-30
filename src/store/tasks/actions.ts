export function dragAndDrop(ev, type) {
  return {
    type: 'DRAG_AND_DROP',
    payload: { ev, type }
  }
}
