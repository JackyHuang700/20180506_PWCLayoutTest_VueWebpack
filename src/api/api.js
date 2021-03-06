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
export const apiPurchase4Index = '/api/Purchase4/Index'
export const apiProductionPreparationIndex = '/api/ProductionPreparation/Index'
export const apiProductionPreparationIndex2 = '/api/ProductionPreparation/Index2'
export const apiQualityControlIndex = '/api/QualityControl/Index'
export const apiQualityControl2Index = '/api/QualityControl2/Index'
export const apiQualityControl3Index = '/api/QualityControl3/Index'
export const apiLogisticsIndex = '/api/Logistics/Index'
export const apiLogistics2Index = '/api/Logistics2/Index'
export const apiLogistics3Index = '/api/Logistics3/Index'
export const apiLogistics4Index = '/api/Logistics4/Index'
export const apiLogistics6Index = '/api/Logistics6/Index'
export const apiSystemIndex = '/api/System/Index'

export const methodGetSelect2Select24GetAll = params => {
  return axios.get(apiDataTableDataTableGetAll, {
    params: params
  })
}
