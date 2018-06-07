<template>
  <div class="container-fluid mt-4">
    <div class="row">

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>快捷鍵
          </div>
          <div class="card-body">

            <button type="button" class="btn btn-primary buyingState" data-param="">全部</button>
            <button type="button" class="btn btn-primary buyingState" data-param="1">已採買</button>
            <button type="button" class="btn btn-primary buyingState" data-param="0">未採買</button>

          </div>

        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>採購單清單
          </div>
          <div class="card-body">

            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">#</th>
                  <th scope="col" class="align-middle">採購編號</th>
                  <th scope="col" class="align-middle">供應商</th>
                  <th scope="col" class="align-middle">採購人員</th>
                  <th scope="col" class="align-middle">總金額</th>
                  <th scope="col" class="align-middle">幣種</th>
                  <th scope="col" class="align-middle">採買狀態</th>
                </tr>
              </thead>
            </table>

          </div>
        </div>
      </div>

      <div class="col-12  text-right">
        <a href="//" class="btn btn-danger col-2">返回</a>
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
  apiDataTablePurchase
} from '../api/api'

export default {
  name: 'purchase',
  created () { },
  mounted () {
    // dataTables
    (function () {
      var buyingState = ''

      var buyingStateList = document.getElementsByClassName('buyingState')
      for (var i = 0; i < buyingStateList.length; i++) {
        buyingStateList[i].addEventListener('click', ChangeParameter, false)
      }

      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'paging': false,
        'searching': false,
        'info': false,
        'ajax': {
          url: apiDataTablePurchase,
          type: 'Get',
          data: function () {
            return GetSearchParameter()
          }
        },
        'columns': [
          {},
          { 'data': 'purchaseNumber' },
          { 'data': 'supplierName' },
          { 'data': 'purchaserUserId' },
          { 'data': 'allMoney' },
          { 'data': 'currCode' },
          { 'data': 'buyingState' }
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
              return ('<button type="button" class="btn btn-primary details-control">展開明細</button>')
            }
          },
          {
            'targets': 6,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              var template = ''
              switch (row.buyingState) {
                case '0':
                  template = '<div class="alert alert-danger text-center" role="alert">未採買</div>'
                  break
                case '1':
                  template = '<div class="alert alert-primary text-center" role="alert">已採買</div>'
                  break

                default:
                  break
              }

              return (template)
            }
          }
        ],
        'language': language
      })

      // 明細
      $('#example tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr')
        var row = table.row(tr)

        if (row.child.isShown()) {
          row.child.hide()
          tr.removeClass('shown')
        } else {
          row.child(childRows(row.data().detail)).show()
          tr.addClass('shown')
        }
      })

      // 明細
      function childRows (d) {
        d = d || []

        var trTemplate = ''
        if (d.length) {
          d.map(function (data) {
            trTemplate += (
              '<tr>' +
              '  <td>{{purchaseCode}}</td>' +
              '  <td>{{materialsName}}</td>' +
              '  <td>{{price}}</td>' +
              '  <td>{{currCode}}</td>' +
              '  <td>{{quantity}}</td>' +
              '  <td>{{sumMoney}}</td>' +
              '  <td>{{remark}}</td>' +
              '</tr>'
            ).replace('{{purchaseCode}}', data.purchaseCode)
              .replace('{{materialsName}}', data.materialsName)
              .replace('{{price}}', data.price)
              .replace('{{currCode}}', data.currCode)
              .replace('{{quantity}}', data.quantity)
              .replace('{{sumMoney}}', data.sumMoney)
              .replace('{{remark}}', data.remark)
          })
        }

        return (
          '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="table table-striped">' +
          '  <tr>' +
          '    <td scope="col">採購條碼</td>' +
          '    <td scope="col">原物料名稱</td>' +
          '    <td scope="col">單價</td>' +
          '    <td scope="col">幣種</td>' +
          '    <td scope="col">數量</td>' +
          '    <td scope="col">總價</td>' +
          '    <td scope="col">備註</td>' +
          '  </tr>' + trTemplate +
          '</table>')
      }

      // 搜尋參數
      function GetSearchParameter () {
        return {
          buyingState: buyingState
        }
      }

      // 置換參數
      function ChangeParameter (e) {
        var self = e.target
        buyingState = self.getAttribute('data-param')
        ReLoadDataSource()
      }

      // 重新載入當前資料
      function ReLoadDataSource () {
        // 判斷是否已初始化 DataTable
        if ($.fn.dataTable.isDataTable('#example')) {
          var table = $('#example').DataTable()

          // 重載資料
          table.ajax.reload()
        }
      }
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

#example_wrapper {
  padding: 0;
}
</style>
