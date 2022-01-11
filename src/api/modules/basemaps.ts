export const listAll = async () => {
  const rowData = (await import('../../assets/fake_api/basemaps.json')).default
  return rowData
}

export const getById = async (id: string) => {
  const rowData = (await import('../../assets/fake_api/basemaps.json')).default
  return rowData.filter(data => data.id === id)
}
