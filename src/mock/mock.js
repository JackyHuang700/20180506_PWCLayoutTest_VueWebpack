import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// import 'jquery-mockjax/src/jquery.mockjax.js'
// import 'jquery-mockjax'

import { dataTableList } from './data/OrderIndex2Data'
import { dataTableList as ComplaintsData } from './data/ComplaintsData'
import {
  apiDataTableDataTableGet,
  apiDataTableDataTableUpdate,
  apiDataTableDataTableGetAll,
  apiDataTableComplaintsGetAll
} from '../api/api'

export default {
  init () {
    let mock = new MockAdapter(axios)
  },

  // jquery mock
  //
  init_jquery () {
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

    $.mockjax({
      type: 'GET',
      url: apiDataTableDataTableGet,
      status: 200,
      dataType: 'json',
      responseTime: 500,
      contentType: 'application/json',
      response: function (settings) {
        // console.log('settings:', settings)
        const {
          id
        } = settings.data

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
  var newItems = array.slice(pageNo, (pageNo + pageSize))

  for (var i in newItems) {
    newList.push(newItems[i])
  }

  return newList
}
