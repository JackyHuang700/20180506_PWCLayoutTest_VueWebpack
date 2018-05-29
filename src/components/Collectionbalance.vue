<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">

        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            功能
          </div>
          <div class="card-body">

            <button type="button" class="btn btn-success" id="match">已匹配收款單</button>
            <button type="button" class="btn btn-success" id="noMatch">未匹配收款單</button>

          </div>
        </div>

        <div class="accordion" id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">

              <i aria-hidden="true" class="fa fa-wpforms"></i>
              進階查詢
              <b id="searchState">英文組</b>
              <button class="btn btn-primary float-right" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">

                <div class="form-row">
                  <div class="form-group col-sm-3">
                    <label for="input1">收款日期</label>
                    <div class="input-group">
                      <input type="text" class="form-control col-sm-6 mr-2" id="input1" placeholder="">
                      <input type="text" class="form-control col-sm-6" id="input11" placeholder="">
                    </div>
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input2">.沖帳狀態</label>
                    <select id="input2" class="form-control">
                      <option selected>Choose...</option>
                      <option>任意</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input3">收款編號</label>
                    <input type="text" class="form-control" id="input3" placeholder="">
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input4">幣種</label>
                    <select id="input4" class="form-control">
                      <option selected>Choose...</option>
                      <option>任意</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input5">收款金額</label>
                    <div class="input-group">
                      <input type="text" class="form-control col-sm-6 mr-2" id="input5" placeholder="">
                      <input type="text" class="form-control col-sm-6" id="input51" placeholder="">
                    </div>
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input6">店鋪訂單號</label>
                    <input type="text" class="form-control" id="input6" placeholder="">
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input7">交易編號</label>
                    <input type="text" class="form-control" id="input7" placeholder="">
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input8">支付方式</label>
                    <input type="text" class="form-control" id="input8" placeholder="">
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input9">客戶</label>
                    <input type="text" class="form-control" id="input9" placeholder="">
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input10">訂單銷貨單號</label>
                    <input type="text" class="form-control" id="input10" placeholder="">
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input11">訂單部門</label>
                    <select id="input11" class="form-control">
                      <option selected>Choose...</option>
                      <option>任意</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input12">訂單持有人</label>
                    <input type="text" class="form-control" id="input12" placeholder="">
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="input13">訂單應付金額</label>
                    <div class="input-group">
                      <input type="text" class="form-control col-sm-6 mr-2" id="input13" placeholder="">
                      <input type="text" class="form-control col-sm-6" id="input131" placeholder="">
                    </div>
                  </div>
                  <div class="form-group col-12 text-right">
                    <button type="button" class="btn btn-primary">查詢</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            待沖帳清單
          </div>
          <div class="card-body">

            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">沖帳明細</th>
                  <th scope="col" class="align-middle">收款日期</th>
                  <th scope="col" class="align-middle">沖帳狀態</th>
                  <th scope="col" class="align-middle">收款編號</th>
                  <th scope="col" class="align-middle">幣種</th>
                  <th scope="col" class="align-middle">收款金額</th>
                  <th scope="col" class="align-middle">已沖金額</th>
                  <th scope="col" class="align-middle">自動匹配訂單</th>
                  <th scope="col" class="align-middle">交易編號</th>
                  <th scope="col" class="align-middle">支付方式</th>
                  <th scope="col" class="align-middle">客戶</th>
                  <th scope="col" class="align-middle">操作</th>
                </tr>
              </thead>
            </table>

          </div>
        </div>

        <!-- modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  沖帳明細:
                  <b id="exampleModalLabelText"></b>
                  編輯
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle">#</th>
                      <th scope="col" class="align-middle">幣種</th>
                      <th scope="col" class="text-right align-middle">原始金額</th>
                      <th scope="col" class="text-right align-middle">已沖金額</th>
                      <th scope="col" class="text-right align-middle">沖帳金額</th>
                      <th scope="col" class="text-right align-middle">待沖餘額</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">刪除</button>
                <button type="button" class="btn btn-secondary text-white" data-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-success">儲存</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 沖帳Modal -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">
                  收款單:
                  <b id="exampleModalLabelText2"></b>
                  沖帳
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle">#</th>
                      <th scope="col" class="align-middle">幣種</th>
                      <th scope="col" class="text-right align-middle">原始金額</th>
                      <th scope="col" class="text-right align-middle">已沖金額</th>
                      <th scope="col" class="text-right align-middle">沖帳金額</th>
                      <th scope="col" class="text-right align-middle">待沖餘額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" class="align-middle">收款單: JE-2017-12-0364-3</th>
                      <td class="align-middle">菲律宾比索</td>
                      <td class="text-right align-middle originalMoney">123456.00</td>
                      <td class="text-right align-middle offsetMoney">100000</td>
                      <td class="align-middle">
                        <input type="text" class="form-control text-right collectionMoney" value="100" />
                      </td>
                      <td class="text-right totalMoney">0.00</td>
                    </tr>
                    <tr>
                      <th scope="row" class="align-middle">
                        <div class="form-group col-12">
                          <label for="">自動匹配</label>
                          <select id="sel_menu3" class="js-data-example-ajax form-control">
                            <option value="" selected="selected">请选择</option>
                          </select>
                        </div>
                      </th>
                      <td class="align-middle">&nbsp;</td>
                      <td class="text-right align-middle originalMoney">&nbsp;</td>
                      <td class="text-right align-middle offsetMoney">&nbsp;</td>
                      <td class="align-middle">
                        <input type="text" class="form-control text-right collectionMoney" value="0" />
                      </td>
                      <td class="text-right align-middle totalMoney">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary text-white" data-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-success">建立沖帳明細</button>
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
  apiDataTableCollectionGetAll,
  apiDataTableCollectionGetAll2,
  apiSelect2Select24GetAll
} from '../api/api'
import 'select2/dist/js/select2.min.js'

export default {
  name: 'collectionbalance',
  data () {
    return {}
  },
  created () { },
  mounted () {
    // 清單
    $(document).ready(function () {
      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCollectionGetAll,
        'columns': [
          {},
          { 'data': 'a' },
          { 'data': 'b' },
          { 'data': 'c' },
          { 'data': 'd' },
          { 'data': 'e' },
          { 'data': 'f' },
          { 'data': 'l' },
          { 'data': 'g' },
          { 'data': 'i' },
          { 'data': 'h' },
          {}
        ],
        'order': [
          [1, 'asc'],
          [2, 'asc'],
          [3, 'asc'],
          [4, 'asc'],
          [5, 'asc'],
          [6, 'asc'],
          [7, 'asc'],
          [8, 'asc'],
          [9, 'asc'],
          [10, 'asc']
        ],
        'columnDefs': [
          {
            'targets': 0,
            'data': 'id',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<button type="button" class="btn btn-primary details-control">沖帳明細</button>')
            }
          },
          {
            'targets': 3,
            'data': 'id',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<a href="/Receipt/Detail?ReceipId={{ReceipId}}" target="_blank">{{receiptNumber}}</a>'
              ).replace('{{receiptNumber}}', '')
                .replace('{{ReceipId}}', '')
            }
          },
          {
            'targets': -1,
            'data': 'a',
            'orderable': false,
            'render': function (data, type, row, meta) {
              var appendTemplate = (
                'data-a="{{templateAA}}" data-b="{{templateBB}}" data-c="{{templateCC}}" data-d="{{templateDD}}" data-e="{{templateEE}}" data-f="{{templateFF}}" data-g="{{templateGG}}" data-h="{{templateHH}}" data-i="{{templateII}}"'
              ).replace('{{templateAA}}', row.a)
                .replace('{{templateBB}}', row.b)
                .replace('{{templateCC}}', row.c)
                .replace('{{templateDD}}', row.d)
                .replace('{{templateEE}}', row.e)
                .replace('{{templateFF}}', row.f)
                .replace('{{templateGG}}', row.g)
                .replace('{{templateHH}}', row.h)
                .replace('{{templateII}}', row.i)

              return ('<a data-toggle="modal" data-target="#exampleModal2" class="btn btn-warning" href="//?=' + row.id + '"' + ' ' + appendTemplate + '>沖帳</a>')
            }
          }
        ],
        'language': language
      })

      // 沖帳明細
      $('#example tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr')
        var row = table.row(tr)

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide()
          tr.removeClass('shown')
        } else {
          // Open this row
          row.child(childRows(row.data().detail)).show()
          tr.addClass('shown')
        }
      })

      // 沖帳明細
      function childRows (d) {
        d = d || []

        var trTemplate = ''
        if (d.length) {
          d.map(function (data) {
            var appendTemplate = (
              'data-a="{{templateAA}}" data-b="{{templateBB}}" data-c="{{templateCC}}" data-d="{{templateDD}}" data-e="{{templateEE}}" data-f="{{templateFF}}" data-g="{{templateGG}}" data-h="{{templateHH}}" data-i="{{templateII}}"'
            ).replace('{{templateAA}}', data.a)
              .replace('{{templateBB}}', data.b)
              .replace('{{templateCC}}', data.c)
              .replace('{{templateDD}}', data.d)
              .replace('{{templateEE}}', data.e)
              .replace('{{templateFF}}', data.f)
              .replace('{{templateGG}}', data.g)
              .replace('{{templateHH}}', data.h)
              .replace('{{templateII}}', data.i)

            trTemplate += (
              '<tr>' +
              '  <td>' +
              '     <a href="//?=" data-toggle="modal" data-target="#exampleModal" ' + appendTemplate + '>' + data.a + '</a>' +
              '  </td>' +
              '  <td>' +
              '     <a href="//?=" target="_blank">' + data.b + '</a>' +
              '  </td>' +
              '  <td>' + data.c + '</td>' +
              '  <td>' + data.d + '</td>' +
              '  <td>' + data.e + '</td>' +
              '  <td>' +
              '     <a href="/Receipt/Detail?ReceipId={{ReceipId}}" target="_blank">' + data.f + '</a>' +
              '  </td>' +
              '  <td>' + data.g + '</td>' +
              '  <td>' + data.h + '</td>' +
              '  <td>' + data.i + '</td>' +
              '  <td>' + data.j + '</td>' +
              '  <td>' + data.k + '</td>' +
              '</tr>').replace('{{ReceipId}}', data.id)
          })
        }

        return (
          '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="table table-striped">' +
          '  <tr>' +
          '    <td scope="col">沖帳明細</td>' +
          '    <td scope="col">銷售單號</td>' +
          '    <td scope="col">幣種</td>' +
          '    <td scope="col">應付金額</td>' +
          '    <td scope="col">訂單沖帳金額</td>' +
          '    <td scope="col">收款編號</td>' +
          '    <td scope="col">幣種</td>' +
          '    <td scope="col">收款金額</td>' +
          '    <td scope="col">收款單沖帳金額</td>' +
          '    <td scope="col">沖帳人</td>' +
          '    <td scope="col">沖帳時間</td>' +
          '  </tr>' + trTemplate +
          '</table>')
      }

      // 切換
      document.getElementById('match').addEventListener('click', function () {
        table.ajax.url(apiDataTableCollectionGetAll).load()
      })
      document.getElementById('noMatch').addEventListener('click', function () {
        table.ajax.url(apiDataTableCollectionGetAll2).load()
      })
    })

    // select2
    $(document).ready(function () {
      // 远程筛选
      $('#sel_menu3').select2({
        ajax: {
          url: apiSelect2Select24GetAll,
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              queryStr: params.term,
              pageNo: params.page
            }
          },
          // 收到伺服器回應
          processResults: function (data, params) {
            params.page = params.page || 1
            return {
              results: data.items[0],
              pagination: {
                more: (params.page * 10) < data.total_count
              }
            }
          },
          cache: true
        },
        allowClear: true,
        multiple: false,
        dropdownParent: $('#sel_menu3').parent(),
        escapeMarkup: function (markup) { return markup },
        minimumInputLength: 1,
        templateResult: formatRepoProvince,
        templateSelection: formatRepoProvince
      })

      // 製作下拉式選單
      function formatRepoProvince (repo) {
        if (repo['loading'] === undefined || repo.loading) return repo.text
        return '<div>' + repo.name + '</div>'
      }
    })

    // [沖帳明細]、[沖帳] - 計算沖帳金額
    function collectionMoneyAddEventListener (e) {
      var self = e.target
      var tdList = self.parentElement.parentElement
      var originalMoney = 0
      var offsetMoney = 0
      var collectionMoney = 0
      var totalMoney = 0
      var valid = false
      if (tdList.tagName === 'TR') {
        var originalMoneyDom = tdList.getElementsByClassName('originalMoney')[0]
        var offsetMoneyDom = tdList.getElementsByClassName('offsetMoney')[0]

        // console.log(IsNumeric(originalMoneyDom.innerText), originalMoneyDom.innerText)
        // console.log(IsNumeric(offsetMoneyDom.innerText), offsetMoneyDom.innerText)

        if (IsNumeric(originalMoneyDom.innerText) && IsNumeric(offsetMoneyDom.innerText) && IsNumeric(self.value)) {
          originalMoney = parseInt(originalMoneyDom.innerText.replace(',', ''))
          offsetMoney = parseInt(offsetMoneyDom.innerText.replace(',', ''))
          collectionMoney = parseInt(self.value.replace(',', ''))
          valid = true
        }
      }

      if (valid) {
        switch (self.validType) {
          case 'type':
            totalMoney = (originalMoney - 0) + (offsetMoney - 0) - collectionMoney
            // 去除開頭零
            self.value = collectionMoney
            break
          case 'type2':
            if (collectionMoney > originalMoney) {
              collectionMoney = originalMoney - offsetMoney
              self.value = 0
              totalMoney = 0
            } else {
              totalMoney = originalMoney - offsetMoney - collectionMoney
            }

            // 去除開頭零
            self.value = collectionMoney
            break
          default:
            break
        }
      } else {
        // toastr.error('違法輸入')
        self.value = 0
      }

      tdList.getElementsByClassName('totalMoney')[0].innerText = totalMoney.toFixed(2)
    }

    // 驗證是否為數字
    function IsNumeric (input) {
      input = input.replace(',', '')

      var RE = /^-{0,1}\d*\.{0,1}\d+$/
      return (RE.test(input))
    }

    // 觸發計算沖帳金額
    // for (var item in collectionMoneyList) {
    //   collectionMoneyList[item].dispatchEvent(new Event('input'))
    // }

    // [冲帐明细] - 攔截modal open 事件
    $(document).on('show.bs.modal', '#exampleModal', function (event) {
      var modal = $(this)
      var self = this
      var button = $(event.relatedTarget)
      var tbodyDom = self.querySelectorAll('tbody')[0]
      var dataA = button.data('a')
      var dataB = button.data('b')
      var dataC = button.data('c')
      var dataD = button.data('d')
      var dataE = button.data('e')
      var dataF = button.data('f')
      var dataG = button.data('g')
      var dataH = button.data('h')
      var dataI = button.data('i')
      var tbodyTemplate = (
        '<tr>' +
        '  <th scope="row">收款單: {{templateAA}} </th>' +
        '  <td>{{templateBB}}</td>' +
        '  <td class="text-right originalMoney">{{templateCC}}</td>' +
        '  <td class="text-right offsetMoney">100000</td>' +
        '  <td>' +
        '    <input type="text" class="form-control text-right collectionMoney" value="{{templateDD}}" />' +
        '  </td>' +
        '  <td class="text-right totalMoney">0.0</td>' +
        '</tr>' +
        '<tr>' +
        '  <th scope="row">訂單: {{templateEE}}</th>' +
        '  <td>{{templateFF}}</td>' +
        '  <td class="text-right originalMoney">{{templateGG}}</td>' +
        '  <td class="text-right offsetMoney">113.47</td>' +
        '  <td>' +
        '    <input type="text" class="form-control text-right collectionMoney" value="{{templateHH}}" />' +
        '  </td>' +
        '  <td class="text-right totalMoney">0.0</td>' +
        '</tr>'
      ).replace('{{templateAA}}', dataF)
        .replace('{{templateBB}}', dataG)
        .replace('{{templateCC}}', dataH)
        .replace('{{templateDD}}', dataI)
        .replace('{{templateEE}}', dataB)
        .replace('{{templateFF}}', dataC)
        .replace('{{templateGG}}', dataD)
        .replace('{{templateHH}}', dataE)

      modal.find('#exampleModalLabelText').text(dataA)
      if (tbodyDom) {
        tbodyDom.innerHTML = tbodyTemplate

        /// 計算沖帳金額
        var collectionMoneyList = document.getElementsByClassName('collectionMoney')
        for (var i = 0; i < collectionMoneyList.length; i++) {
          collectionMoneyList[i].addEventListener('input', collectionMoneyAddEventListener, false)
          collectionMoneyList[i].validType = 'type'
        }
      }
    })

    // [沖帳] - 攔截modal open 事件
    $(document).on('show.bs.modal', '#exampleModal2', function (event) {
      var modal = $(this)
      var self = this
      var button = $(event.relatedTarget)
      var dataA = button.data('a')
      var dataB = button.data('b')
      var dataC = button.data('c') || ''
      var dataD = button.data('d') || ''
      var dataE = button.data('e') || 0
      var dataF = button.data('f') || 0
      var dataG = button.data('g')
      var dataH = button.data('h')
      var dataI = button.data('i')
      var trDom = self.querySelectorAll('tbody tr')[0]
      modal.find('#exampleModalLabelText2').text(dataC)
      var trTemplate = (
        '<th scope="row" class="align-middle">收款單: {{templateAA}}</th>' +
        '<td class="align-middle">{{templateBB}}</td>' +
        '<td class="text-right align-middle originalMoney">{{templateCC}}</td>' +
        '<td class="text-right align-middle offsetMoney">{{templateDD}}</td>' +
        '<td class="align-middle">' +
        '  <input type="text" class="form-control text-right collectionMoney" value="0" />' +
        '</td>' +
        '<td class="text-right totalMoney">{{templateEE}}</td>'
      ).replace('{{templateAA}}', dataC)
        .replace('{{templateBB}}', dataD)
        .replace('{{templateCC}}', dataE)
        .replace('{{templateDD}}', dataF)
        .replace('{{templateEE}}', (dataE - dataF).toFixed(2))

      if (trDom) {
        trDom.innerHTML = trTemplate

        /// 計算沖帳金額
        var collectionMoneyList = document.getElementsByClassName('collectionMoney')
        for (var i = 0; i < collectionMoneyList.length; i++) {
          collectionMoneyList[i].addEventListener('input', collectionMoneyAddEventListener, false)
          collectionMoneyList[i].validType = 'type2'
        }
      }
    })
  }
}
</script>
<style lang="css" >
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import 'select2/dist/css/select2.min.css';
</style>