import axios from 'axios'

// select2
export const apiSelect2Select24GetAll = '/api/Select2/Select24GetAll'
export const apiDataTableDataTableGetAll = '/api/dataTable/DataTableGetAll'
export const apiDataTableDataTableGet = '/api/dataTable/DataTableGet'
export const apiDataTableDataTableUpdate = '/api/dataTable/DataTableUpdate'
export const apiDataTableComplaintsGetAll = '/api/dataTable/ComplaintsGetAll'
export const apiDataTableCollectionGetAll = '/api/dataTable/CollectionGetAll'
export const apiDataTableCollectionGetAll2 = '/api/dataTable/CollectionGetAll2'
export const apiDataTableSidebarGetAll = '/api/dataTable/SidebarGetAll'
export const apiDataTablePurchase = '/api/dataTable/Purchase'
export const apiDataTablePurchaseAutoComplete = '/api/dataTable/PurchaseAutoComplete'
export const apiDataTableCopyTemplateGetAll = '/api/dataTable/CopyTemplateGetAll'
export const apiDataJQueryUIJQueryUIGetAll = '/api/JQueryUI/JQueryUIGetAll'
export const apiOrderProcessManagementGetThisOrderDetail = '/OrderProcessManagement/GetThisOrderDetail'
export const apiOrderProcessManagementSubDetail = '/api/OrderProcessManagement/SubDetail'
export const apiProDuctIndex = '/api/Product/Index'
export const apiProcess3Insert = '/api/Process3/Insert'
export const apiPurchase3Insert = '/api/Purchase3/Insert'
export const apiProductionPreparationIndex = '/api/ProductionPreparation/Index'
export const apiProductionPreparationIndex2 = '/api/ProductionPreparation/Index2'

export const methodGetSelect2Select24GetAll = params => {
  return axios.get(apiDataTableDataTableGetAll, {
    params: params
  })
}
