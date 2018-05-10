import axios from 'axios'

// select2
export const apiDataTableDataTableGetAll = '/api/dataTable/DataTableGetAll'

export const methodGetSelect2Select24GetAll = params => {
  return axios.get(apiDataTableDataTableGetAll, {
    params: params
  })
}
