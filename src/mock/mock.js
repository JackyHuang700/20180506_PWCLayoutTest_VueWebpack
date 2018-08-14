import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// import 'jquery-mockjax/src/jquery.mockjax.js'
// import 'jquery-mockjax'

import {
  dataTableList as LogisticsData,
  dataTableList2 as LogisticsData2,
  dataTableList3 as LogisticsData3,
  dataTableList4 as LogisticsData4,
  dataTableList6 as LogisticsData6,
} from './data/LogisticsData'
import {
  dataTableList as QualityControlData,
  dataTableList2 as QualityControl2Data,
  dataTableList3 as QualityControl3Data
} from './data/QualityControlData'
// import { dataTableList } from './data/OrderIndex2Data'
import { dataTableList as ComplaintsData } from './data/ComplaintsData'
import { dataTableList as SupplierData } from './data/SupplierData'
import { dataTableList as CopyTemplateData } from './data/CopyTemplateData'
import { dataTableList as ComplaintsCreateData } from './data/ComplaintsCreateData'
import {
  dataTableList as ProductDataIndexData,
  dataTableList2 as ProductDataIndexData2,
  dataTableList3 as ProductDataIndexData3
} from './data/ProductData'
import { dataTableList as ProcessDataInsertData } from './data/ProcessData'
import {
  dataTableList as OrderProcessManagementData,
  dataTableList2 as OrderProcessManagementData2
} from './data/OrderProcessManagementData'
import {
  dataTableList as PurchaseData,
  dataTableList2 as PurchaseAutoCompleteData,
  dataTableList3 as Purchase3InsertData,
  dataTableList4 as Purchase4IndextData
} from './data/PurchaseData'
import { select2List } from './data/select2List'
import {
  dataTableList as CollectionData,
  dataTableList2 as CollectionData2
} from './data/CollectionData'
import {
  dataTableList as SystemData,
} from './data/SystemData'
import {
  apiQualityControlIndex,
  apiQualityControl2Index,
  apiQualityControl3Index,
  apiDataTablePurchase,
  apiDataTablePurchaseAutoComplete,
  apiDataJQueryUIJQueryUIGetAll,
  apiDataTableSidebarGetAll,
  apiDataTableCopyTemplateGetAll,
  apiOrderProcessManagementSubDetail,
  apiSelect2Select24GetAll,
  apiDataTableDataTableGet,
  apiDataTableDataTableUpdate,
  apiDataTableDataTableGetAll,
  apiDataTableCollectionGetAll,
  apiDataTableCollectionGetAll2,
  apiDataTableComplaintsGetAll,
  apiOrderProcessManagementGetThisOrderDetail,
  apiProcess3Insert,
  apiPurchase3Insert,
  apiPurchase4Index,
  apiProDuctIndex,
  apiProductionPreparationIndex,
  apiProductionPreparationIndex2,
  apiLogisticsIndex,
  apiLogistics2Index,
  apiLogistics3Index,
  apiLogistics4Index,
  apiLogistics6Index,
  apiSystemIndex,
} from '../api/api'

export default {
  init () {
    let mock = new MockAdapter(axios)
  },

  // jquery mock
  //
  init_jquery () {
    // 系統 - 系統目錄(父)管理
    $.mockjax({
      type: 'GET',
      url: apiSystemIndex,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = SystemData
      }
    })

    // 物流 -
    $.mockjax({
      type: 'GET',
      url: apiLogistics6Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = LogisticsData6
      }
    })
    // 物流 -
    $.mockjax({
      type: 'GET',
      url: apiLogistics6Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = LogisticsData6
      }
    })

    // 物流 - 撿貨業務放行
    $.mockjax({
      type: 'GET',
      url: apiLogisticsIndex,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = LogisticsData
      }
    })

    // 物流 - 撿貨財務放行
    $.mockjax({
      type: 'GET',
      url: apiLogistics2Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = LogisticsData2
      }
    })

    // 物流 - 撿貨物流作業
    $.mockjax({
      type: 'GET',
      url: apiLogistics3Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = LogisticsData3
      }
    })

    // 物流 - 出貨作業
    $.mockjax({
      type: 'GET',
      url: apiLogistics4Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = LogisticsData4
      }
    })

    // 質檢 - 入庫
    $.mockjax({
      type: 'GET',
      url: apiQualityControl3Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = QualityControl3Data
      }
    })

    // 質檢 - 外發
    $.mockjax({
      type: 'GET',
      url: apiQualityControlIndex,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = QualityControlData
      }
    })

    // 質檢 - 質檢
    $.mockjax({
      type: 'GET',
      url: apiQualityControl2Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = QualityControl2Data
        console.log(this.responseText)
      }
    })

    // 採購分單
    $.mockjax({
      type: 'GET',
      url: apiPurchase3Insert,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = Purchase3InsertData
      }
    })

    // 採購報價
    $.mockjax({
      type: 'GET',
      url: apiPurchase4Index,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = Purchase4IndextData
      }
    })

    // 工序狀態管理
    $.mockjax({
      type: 'GET',
      url: apiProcess3Insert,
      status: 200,
      dataType: 'json',
      responseTime: 150,
      contentType: 'application/json',
      response: function (setting) {
        // 回應
        this.responseText = ProcessDataInsertData
      }
    })

    // 建立客訴單
    $.mockjax({
      type: 'GET',
      url: apiDataJQueryUIJQueryUIGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        var { queryStr, pageNo } = settings.data

        var items = pagination(ComplaintsCreateData, queryStr, pageNo || 1)
        for (var i in items[0]) {
          items[0][i]['loading'] = false
        }

        // 回應
        this.responseText = {
          items: items,
          total_count: ComplaintsCreateData.length
        }
      }
    })

    $.mockjax({
      type: 'GET',
      url: apiDataTableDataTableGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        console.info('settings: ', settings)
        // var { draw, start, length } = settings.data
        // var { value, regex } = settings.data.search

        // console.log('start', start)
        // console.log('length', length)

        // var newDataTableList = JSON.parse(JSON.stringify(dataTableList))
        // newDataTableList.draw = draw
        // newDataTableList.data = paginationToDataTable(
        //   newDataTableList.data,
        //   value || '',
        //   start || 0,
        //   length || 10
        // )
        // 回應
        this.responseText = dataTableList
      }
    })

    // OrderProcessManagementData列表資料
    $.mockjax({
      type: 'GET',
      url: apiOrderProcessManagementGetThisOrderDetail,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = OrderProcessManagementData
      }
    })

    //
    $.mockjax({
      type: 'GET',
      url: apiOrderProcessManagementSubDetail,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        let { supplier, rawmaterial } = settings.data
        console.log('settings.data', settings.data)

        var newList = OrderProcessManagementData2.data.filter(c => {
          return c.supplier.indexOf(supplier) || c.rawmater.indexOf(rawmaterial)
        })

        // 更新資料
        if (newList.length) {
          OrderProcessManagementData2.data = newList
        }

        console.log('newList', newList)
        // debugger
        // 回應
        this.responseText = OrderProcessManagementData2
      }
    })

    // CopyTemplateData列表資料
    $.mockjax({
      type: 'GET',
      url: apiDataTableCopyTemplateGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = CopyTemplateData
      }
    })

    // ProductIndex列表資料
    $.mockjax({
      type: 'GET',
      url: apiProDuctIndex,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = ProductDataIndexData
      }
    })

    // 生產備料
    $.mockjax({
      type: 'GET',
      url: apiProductionPreparationIndex,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = ProductDataIndexData2
      }
    })

    // 生產備料
    $.mockjax({
      type: 'GET',
      url: apiProductionPreparationIndex2,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = ProductDataIndexData3
      }
    })

    // 供應商列表資料
    $.mockjax({
      type: 'GET',
      url: apiDataTableSidebarGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = SupplierData
      }
    })

    // 客訴單列表資料
    $.mockjax({
      type: 'GET',
      url: apiDataTableComplaintsGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = ComplaintsData
      }
    })
    // 客訴單列表資料
    $.mockjax({
      type: 'GET',
      url: apiDataTableCollectionGetAll2,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = CollectionData2
      }
    })

    // 收款維護單列表資料
    $.mockjax({
      type: 'GET',
      url: apiDataTableCollectionGetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = CollectionData
      }
    })

    // 採購列表資料
    $.mockjax({
      type: 'GET',
      url: apiDataTablePurchase,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        // 回應
        this.responseText = PurchaseData
      }
    })

    // 採購的下拉式選單
    $.mockjax({
      type: 'GET',
      url: apiDataTablePurchaseAutoComplete,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        var { term, buyingState } = settings.data
        console.log(buyingState)

        var results = PurchaseAutoCompleteData.filter(function (item) {
          return item.value.toLowerCase().indexOf(term.toLowerCase()) > -1
        }).splice(0, 10)

        // 回應
        this.responseText = results
      }
    })

    // select2
    $.mockjax({
      type: 'GET',
      url: apiSelect2Select24GetAll,
      status: 200,
      dataType: 'json',
      responseTime: 750,
      contentType: 'application/json',
      response: function (settings) {
        var { queryStr, pageNo } = settings.data

        var items = pagination(select2List, queryStr, pageNo || 1)
        for (var i in items[0]) {
          items[0][i]['loading'] = false
        }

        // 回應
        this.responseText = {
          items: items,
          total_count: select2List.length
        }
      }
    })

    $.mockjax({
      type: 'GET',
      url: apiDataTableDataTableGet,
      status: 200,
      dataType: 'json',
      responseTime: 500,
      contentType: 'application/json',
      response: function (settings) {
        // console.log('settings:', settings)
        const { id } = settings.data

        // const updateData = dataTableList['data'].slice(0, 1)
        const updateData = dataTableList['data'].find(c => c.id === `${id}`)
        const resp = {
          status: 'succcess',
          data: updateData
        }
        this.responseText = resp
      }
    })

    $.mockjax({
      type: 'POST',
      url: apiDataTableDataTableUpdate,
      status: 200,
      dataType: 'json',
      responseTime: 500,
      contentType: 'application/json',
      response: function (settings) {
        console.log('接收到update的資料了', settings)

        const resp = {
          status: 'succcess'
        }
        this.responseText = resp
      }
    })
  }
}

function paginationToDataTable (array, queryStr, pageNo, pageSize) {
  // 計算分頁資料
  let newList = []
  var offset = (pageNo - 1) * pageSize
  // 搜尋
  // 分頁
  var newItems = array.slice(pageNo, pageNo + pageSize)

  for (var i in newItems) {
    newList.push(newItems[i])
  }

  return newList
}

// pageNo 當前頁數
function pagination (array, queryStr, pageNo) {
  // 計算分頁資料
  let newList = []
  var pageSize = 10
  var offset = (pageNo - 1) * pageSize
  // 搜尋
  // 分頁
  newList.push(
    offset + pageSize >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + pageSize)
  )
  return newList
}
