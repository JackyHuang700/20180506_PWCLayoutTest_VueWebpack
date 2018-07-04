<template>
  <div class="container-fluid my-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>訂單資訊
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">...</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template2">...</label>
                <input type="text" class="form-control" id="template2" name="template2" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template3">...</label>
                <input type="text" class="form-control" id="template3" name="template3" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template4">...</label>
                <input type="text" class="form-control" id="template4" name="template4" placeholder="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-3">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>採購分單
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="col-12 mt-2">
                <button type="button" class="btn btn-primary buyMethod" data-buyMethod="1">現貨出貨</button>
                <button type="button" class="btn btn-primary buyMethod" data-buyMethod="1">現貨質檢</button>
                <button type="button" class="btn btn-primary buyMethod" data-buyMethod="1">自製</button>
                <button type="button" class="btn btn-primary buyMethod" data-buyMethod="1">現貨修改</button>
                <button type="button" class="btn btn-primary buyMethod" data-buyMethod="1">外發待料</button>
                <button type="button" class="btn btn-primary buyMethod" data-buyMethod="1">外發</button>
                <button type="button" class="btn btn-primary buyMethod" data-buyMethod="1">外購</button>
              </div>
              <div class="col-12 mt-4">
                <table id="example" class="display" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>挑選</th>
                      <th>產品名稱</th>
                      <th>正面圖</th>
                      <th>訂製單</th>
                      <th>交貨日期</th>
                      <th>時限標準</th>
                      <th>產品明細編號</th>
                      <th>物料編號</th>
                      <th>SKU</th>
                      <th>COLOR</th>
                      <th>SIZE</th>
                      <th>數量</th>
                      <th>採購分單明細編號</th>
                      <th>供應策略</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="col-12 text-right">
        <button type="submit" class="btn btn-success col-sm-2 mb-3">儲存</button>
        <a href="" class="btn btn-danger col-sm-1 mb-3">返回</a>
      </div>
    </div>
  </div>
</template>
<script>
import 'datatables.net'
import 'datatables.net-bs4'
import 'datatables.net-rowreorder/js/dataTables.rowReorder.min.js'
import {
  language
} from '../config/dataTable'
import {
  apiPurchase3Insert
} from '../api/api'
export default {
  name: 'copyform',
  created () { },
  mounted () {
    (function () {
      $(document).on('click', '.buyMethod', function (e) {
        var self = e.target
        var dataMethod = self.getAttribute('data-buyMethod')
      })
    }());
    // datatables
    (function () {
      var receiveAjaxDataList = []
      var sendAjaxDataList = []
      var index = 0

      $(document).ready(function () {
        var dt = $('#example').dataTable()
        dt.fnDestroy()
      })

      $(document).ready(function () {
        // dataTable
        $('#example').DataTable({
          ajax: {
            'url': apiPurchase3Insert,
            'dataSrc': function (json) {
              receiveAjaxDataList = json.data
              return json.data
            },
            data: function () {
              return {
                OrderNumber: 123
              }
            }
          },

          bPaginate: false,
          searching: false,
          order: [
            [0, 'desc']
          ],
          columns: [
            { data: 'isChoose' },
            { data: 'productName' },
            { data: 'productImg' },
            { data: 'tailoredNumber' },
            { data: 'deliveryDate' },
            { data: 'timeLimit' },
            { data: 'detailNumber' },
            { data: 'stockNumber' },
            { data: 'sKUCode' },
            { data: 'colorCode' },
            { data: 'productSize' },
            { data: 'quantity' },
            { data: 'purchasePartDetailNumber' },
            { data: 'supplyStrategy' }
          ],
          columnDefs: [
            {
              'targets': 0,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                var inputValue = ''
                switch (row.isChoose) {
                  case true:
                  case 'true':
                    inputValue = 'checked'
                    break
                  default:
                    break
                }

                var tag = (
                  '<div class="custom-control custom-checkbox">' +
                  '  <input type="checkbox" class="custom-control-input addList" id="{{checkboxId}}" data-index="{{index}}" {{checked}}>' +
                  '  <label class="custom-control-label" for="{{checkboxId}}"></label>' +
                  '</div>'
                ).replace(/{{checked}}/g, inputValue)
                  .replace(/{{index}}/g, index)
                  .replace(/{{checkboxId}}/g, ('checkbox' + index))

                var tag2 = ('<input class="form-check-input addList" type="checkbox" id="" data-index="{{index}}" {{checked}}/>')
                  .replace(/{{checked}}/g, inputValue)
                  .replace(/{{index}}/g, index)
                index = index + 1
                return tag
              }
            },
            {
              'targets': 2,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                if (row.haveTailored) {
                  return ('<img src="/Tailored/GetTailoredImg?file={{src}}" alt="" height="42" width="42"')
                    .replace(/{{src}}/g, row.productImg)
                } else {
                  return ('<img src="http://fakeimg.pl/42x42/" alt="" height="42" width="42"')
                }
              }
            },
            {
              'targets': 3,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                if (row.haveTailored) {
                  return ('<a target="_blank" href="{{link}}">{{text}}</a>')
                    .replace(/{{link}}/g, row.tailoredNumber)
                    .replace(/{{text}}/g, row.tailoredNumber)
                } else {
                  return ('無')
                }
              }
            }
          ],
          'language': language
          // 'language': dataTablesModule.language()
        })

        // 添加清單
        $(document).on('click', '.addList', function (e) {
          var self = e.target
          var index = self.getAttribute('data-index')

          if (self.checked) {
            var pushData = receiveAjaxDataList[index]
            pushData['deleteIndex'] = index
            sendAjaxDataList.push(pushData)
          } else {
            var deleteIndex = receiveAjaxDataList.map(function (e) { return e.deleteIndex }).indexOf(index)
            sendAjaxDataList.splice(deleteIndex, 1)
          }
        })
      })
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

/* 另外添加 */
#example_wrapper {
  width: 100%;
  /* overflow-x: auto; */
}
</style>
