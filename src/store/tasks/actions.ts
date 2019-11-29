export function dragAndDrop(ev, cat) {
  return {
    type: 'DRAG_AND_DROP',
    payload: { ev, cat }
  }
}
