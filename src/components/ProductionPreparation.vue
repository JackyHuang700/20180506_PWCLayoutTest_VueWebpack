<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12">
        <div class="accordion" id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              進階查詢
              <button class="btn btn-primary float-right" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">
                <div class="form-group row">
                  <div class="col-sm-12 mb-2">
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText">編號</label>
                        <input type="text" class="form-control" id="inputText" placeholder="">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText2">編號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText3">到期日(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText4">到期日(迄)</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 mb-2 text-right">
                  <button type="button" class="btn btn-primary">查詢</button>
                  <button type="button" class="btn btn-danger">重置</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
            列表
          </div>
          <div class="card-body">

            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">#</th>
                  <th scope="col" class="align-middle">生產工單編號</th>
                  <th scope="col" class="align-middle">訂單編號</th>
                  <th scope="col" class="align-middle">物料編號</th>
                  <th scope="col" class="align-middle">產品說明</th>
                  <th scope="col" class="align-middle">計畫數量</th>
                  <th scope="col" class="align-middle">訂單過審日</th>
                  <th scope="col" class="align-middle">到期日</th>
                  <th scope="col" class="align-middle">狀態</th>
                  <th scope="col" class="align-middle">操作</th>

                </tr>
              </thead>
            </table>

          </div>
        </div>
      </div>
      <div class="col-12">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">備料</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="conatiner-fluid">
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">
                          <i class="fa fa-wpforms" aria-hidden="true"></i>
                          生產工單資料
                        </div>
                        <div class="card-body">
                          Mars
                        </div>
                      </div>
                    </div>
                    <div class="col-12 mt-3">
                      <div class="card">
                        <div class="card-header">
                          <i class="fa fa-wpforms" aria-hidden="true"></i>
                          原物料管理
                        </div>
                        <div class="card-body">
                          <table id="example2" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
                            <thead>
                              <tr>
                                <th scope="col" class="text-center">#</th>
                                <th scope="col" class="text-center">號碼</th>
                                <th scope="col" class="text-center">說明</th>
                                <th scope="col" class="text-center">基礎數量</th>
                                <th scope="col" class="text-center">計畫數量</th>
                                <th scope="col" class="text-center">計量單位名稱</th>
                                <th scope="col" class="text-center">倉庫</th>
                                <th scope="col" class="text-center">發貨方法</th>
                                <th scope="col" class="text-center">已撿貨數量</th>
                                <th scope="col" class="text-center">出貨數量</th>
                                <th scope="col" class="text-center">操作</th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="conatiner-fluid w-100">
                  <div class="row">
                    <div class="col-6 text-left">
                      <button type="button" class="btn btn-warning" id="updateBtn">更新</button>
                      <button type="button" class="btn btn-warning" id="maintainBtn">採購維護工令材料計劃需求</button>
                    </div>
                    <div class="col-6 text-right">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                      <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import 'datatables.net'
import 'datatables.net-bs4'
import {
  language
} from '../config/dataTable'
import {
  apiDataTableCopyTemplateGetAll,
  apiProductionPreparationIndex,
  apiProductionPreparationIndex2
} from '../api/api'

export default {
  name: 'productionpreparation',
  created () { },
  mounted () {
    // datatable Obj
    var dataTableObj
    var dataTableObj2
    // datatable Dom
    var dataTableDom = document.getElementById('example')
    var dataTable2Dom = document.getElementById('example2');

    // dataTables - 列表
    (function () {
      dataTableObj = $(dataTableDom).DataTable({
        'ajax': apiProductionPreparationIndex2,
        'scrollX': true,
        'bPaginate': false,
        'searching': false,
        'drawCallback': function (settings) {
          UpdateIndex(dataTableDom)
        },
        'columns': [
          {},
          { 'data': 'productionOrderNumber' },
          {},
          { 'data': 'stockNumber' },
          { 'data': 'stockName' },
          { 'data': 'quantity' },
          { 'data': 'orderDate' },
          { 'data': 'dueDate' },
          { 'data': 'status' },
          {}
        ],
        'order': [
          [1, 'asc']
        ],
        'columnDefs': [
          {
            'targets': 0,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<span class="badge badge-pill badge-primary"></span>')
            }
          },
          {
            'targets': 2,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<a href="/OrderManagement/Display?OrderNumber=' + row.orderNumber + '" target="_blank">' + row.orderNumber + '</a>'
              )
            }
          },
          {
            'targets': -1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">備料</button>'
              )
            }
          }
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })
    }());
    // dataTables - 列表Modal
    (function () {
      dataTableObj2 = $(dataTable2Dom).DataTable({
        // 'ajax': apiProductionPreparationIndex,
        'scrollX': true,
        'bPaginate': false,
        'searching': false,
        'drawCallback': function (settings) {
          UpdateIndex(dataTable2Dom)
        },
        'columns': [
          {},
          { data: 'sonStockNumber' },
          { data: 'itemName' },
          { data: 'baseQty' },
          { data: 'detailPlannedQty' },
          { data: 'uomCode' },
          { data: 'warehouse' },
          { data: 'issueType' },
          { data: 'pickQty' },
          { data: 'issuedQty' },
          {}
        ],
        'order': [
          [1, 'asc']
        ],
        // 刪除單筆資料
        'initComplete': function (oSettings) {
          $(this).on('click', 'i.fa.fa-minus-square', function (e) {
            var confirm2 = confirm('確定刪除?')
            if (confirm2) {
              dataTableObj2.row($(this).closest('tr')).remove().draw()
              UpdateIndex()
            }
          })
        },
        'language': language
        // 'language': dataTablesModule.language()
      })

      // use ajax
      $.ajax({
        url: apiProductionPreparationIndex,
        // data: {

        // }
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          for (var i in data.data) {
            var rowHtml = (
              '<tr>' +
              '  <td class="text-center">' +
              '   <span class="badge badge-pill badge-primary"></span>' +
              '  </td>' +
              '  <td class="text-center">' +
              '  </td>' +
              '  <td class="text-center">' +
              '  </td>' +
              '  <td class="text-center">' +
              '  </td>' +
              '  <td class="text-center">' +
              '   <input type="text" class="form-control text-right detailPlannedQty" value="{{detailPlannedQty}}" data-titleName="{{titleName}}" readonly />' +
              '  </td>' +
              '  <td class="text-center">' +
              '  </td>' +
              '  <td class="text-center">' +
              '  </td>' +
              '  <td class="text-center">' +
              '  </td>' +
              '  <td class="text-center">' +
              '   <input type="text" class="form-control text-right pickQty" value="0" data-titleName="{{titleName}}" />' +
              '  </td>' +
              '  <td class="text-center">' +
              '  </td>' +
              '  <td class="text-center">' +
              '   <i class="fa fa-minus-square text-red" aria-hidden="true"></i>' +
              '  </td>' +
              '</tr>'
            ).replace(/{{titleName}}/g, 'POMetarialTable')
              .replace(/{{detailPlannedQty}}/g, data.data[i].detailPlannedQty)
              .replace(/{{}}/g, '')

            dataTableObj2.row.add($(rowHtml)).draw()
            UpdateIndex(dataTable2Dom)
          }
        },
        error: function (xhr, ajaxOptions, thrownError) {
          // toastr.error('獲取生產工單原物料表失敗');
        }
      })
    }());
    // Modal Button Event
    (function () {
      var updateBtnDom = document.getElementById('updateBtn')
      var maintainBtnDom = document.getElementById('maintainBtn')

      $(updateBtnDom).on('click', ConfirmWindows)
      $(maintainBtnDom).on('click', ConfirmWindows)
      $(document).on('blur', '.pickQty', function (e) {
        var self = e.target
        var trDom = self.parentElement.parentElement
        var detailPlannedQtyDom = trDom.getElementsByClassName('detailPlannedQty')[0]

        // 處理空值
        // 處理負數

        if ((self.value - 0) > (detailPlannedQtyDom.value - 0)) {
          self.value = detailPlannedQtyDom.value
        }
      })

      function ConfirmWindows (e) {
        if (confirm('確認?')) {

        }
      }
    }())

    // 共用 - 更新Table底下所有Index
    function UpdateIndex (dataTableDom) {
      if (dataTableDom === null) return false

      var domIndex = 0
      var domIndexAdd = false
      var trDomList = dataTableDom.querySelectorAll('tr')
      for (var trIndex = 0; trIndex < trDomList.length; trIndex++) {
        var tr = trDomList[trIndex]
        if (tr.firstElementChild != null) {
          var tdDomList = tr.querySelectorAll('td')
          for (var tdIndex = 0; tdIndex < tdDomList.length; tdIndex++) {
            var tdDom = tdDomList[tdIndex]
            var inputDom = tdDom.querySelector('input')
            var spanDom = tdDom.querySelector('span')
            var selectDom = tdDom.querySelector('select')
            if (inputDom && spanDom) {
              UpdateIndex_FixInput(inputDom, domIndex)
              UpdateIndex_FixSpan(spanDom, domIndex)
              domIndexAdd = true
            } else if (selectDom) {
              UpdateIndex_FixInput(selectDom, domIndex)
              domIndexAdd = true
            } else if (inputDom) {
              UpdateIndex_FixInput(inputDom, domIndex)
              domIndexAdd = true
            } else if (spanDom) {
              UpdateIndex_FixSpan(spanDom, domIndex)
              domIndexAdd = true
            }
          }
        }
        if (domIndexAdd) {
          domIndex = domIndex + 1
          domIndexAdd = false
        }
      }
    }

    // 共用
    function UpdateIndex_FixInput (inputDom, domIndex) {
      var inputDomName = inputDom.getAttribute('data-name')
      var inputDomTitleName = inputDom.getAttribute('data-titleName')
      inputDom.name = inputDomTitleName + '[' + domIndex + '].' + inputDomName
    }
    // 共用
    function UpdateIndex_FixSpan (spanDom, domIndex) {
      spanDom.innerText = domIndex + 1
    }
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';

/* modal  另外添加*/
.dataTable {
    width: 100% !important;
  }
  .dataTables_scrollHeadInner {
    width: unset !important;
  }
  
  .modal-lg {
    max-width: 85%;
  }
  @media screen and (max-width: 750px) {
    .modal-lg {
      max-width: 100%;
    }
  
    .dataTables_wrapper {
      width: 100%;
    }
  }

</style>
