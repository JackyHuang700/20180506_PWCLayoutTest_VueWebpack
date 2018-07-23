<template>
  <div class="container-fluid">
    <div class="row">

      <ProductionPreparation1 />

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
            列表
          </div>
          <div class="card-body">

            <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col" class="align-middle checkBoxColumn">#</th>
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
  apiProductionPreparationIndex,
  apiProductionPreparationIndex2
} from '../api/api'
import ProductionPreparation1 from '../components_sub/ProductionPreparation1.vue'
import ProductionPreparation2 from '../components_sub/ProductionPreparation2.vue'

export default {
  name: 'productionpreparation',
  created () { },
  components: {
    ProductionPreparation2,
    ProductionPreparation1,
  },
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
                '<button type="button" class="btn btn-primary ppBtn" data-toggle="modal">備料</button>'
              )
            }
          },
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
    // 視窗彈出
    (function () {
      $(document).on('click', '.ppBtn', function (e) {
        console.log('as')
        $('#exampleModal').modal('show')
      })
      $('#exampleModal').on('show.bs.modal', function (e) {
        console.log('eeeeeeee')
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

/* innerStyle */
.serchBtnMGroup {
  margin-top: 26px;
}

#example2 {
  width: 100% !important;
}

.dataTables_scrollHeadInner {
  width: 100% !important;
}

/* modal  另外添加*/
.dataTables_scrollHeadInner {
  width: 100% !important;
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
