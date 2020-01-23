export const removeFeatures = id => {
  return {
    type: 'remove-features',
    payload: id
  }
}