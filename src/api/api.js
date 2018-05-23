import axios from 'axios'

// select2
export const apiDataTableDataTableGetAll = '/api/dataTable/DataTableGetAll'
export const apiDataTableDataTableGet = '/api/dataTable/DataTableGet'
export const apiDataTableDataTableUpdate = '/api/dataTable/DataTableUpdate'
export const apiDataTableComplaintsGetAll = '/api/dataTable/ComplaintsGetAll'
export const apiDataTableCollectionGetAll = '/api/dataTable/CollectionGetAll'
export const apiDataTableCollectionGetAll2 = '/api/dataTable/CollectionGetAll2'

export const methodGetSelect2Select24GetAll = params => {
  return axios.get(apiDataTableDataTableGetAll, {
    params: params
  })
}
