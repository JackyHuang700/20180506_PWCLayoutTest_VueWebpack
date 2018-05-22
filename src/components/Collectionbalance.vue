<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">

        <div class="card">
          <div class="card-header">asdf
          </div>
          <div class="card-body">

            <!-- <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">幣種</th>
                  <th scope="col" class="text-right">原始金額</th>
                  <th scope="col" class="text-right">已沖金額</th>
                  <th scope="col" class="text-right">沖帳金額</th>
                  <th scope="col" class="text-right">待沖餘額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">收款單: 2171128001</th>
                  <td>菲律宾比索</td>
                  <td class="text-right originalMoney">123456.00</td>
                  <td class="text-right offsetMoney">100000</td>
                  <td>
                    <input type="text" class="form-control text-right collectionMoney" value="100" />
                  </td>
                  <td class="text-right totalMoney">0.00</td>
                </tr>
                <tr>
                  <th scope="row">訂單: 1801010003</th>
                  <td>美元</td>
                  <td class="text-right originalMoney">116.78</td>
                  <td class="text-right offsetMoney">113.47</td>
                  <td>
                    <input type="text" class="form-control text-right collectionMoney" value="0" />
                  </td>
                  <td class="text-right totalMoney">0.00</td>
                </tr>
              </tbody>
            </table> -->

          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            功能
          </div>
          <div class="card-body">

            <button type="button" class="btn btn-success">已匹配收款單</button>
            <button type="button" class="btn btn-success">未匹配收款單</button>

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
                  <th scope="col">沖帳明細</th>
                  <th scope="col">收款日期</th>
                  <th scope="col">沖帳狀態</th>
                  <th scope="col">收款編號</th>
                  <th scope="col">幣種</th>
                  <th scope="col">收款金額</th>
                  <th scope="col">已沖金額</th>
                  <th scope="col">交易編號</th>
                  <th scope="col">支付方式</th>
                  <th scope="col">客戶</th>
                  <th scope="col">操作</th>
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
                      <th scope="col">#</th>
                      <th scope="col">幣種</th>
                      <th scope="col" class="text-right">原始金額</th>
                      <th scope="col" class="text-right">已沖金額</th>
                      <th scope="col" class="text-right">沖帳金額</th>
                      <th scope="col" class="text-right">待沖餘額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">收款單: 2171128001</th>
                      <td>菲律宾比索</td>
                      <td class="text-right originalMoney">123456.00</td>
                      <td class="text-right offsetMoney">100000</td>
                      <td>
                        <input type="text" class="form-control text-right collectionMoney" value="100" />
                      </td>
                      <td class="text-right totalMoney">0.00</td>
                    </tr>
                    <tr>
                      <th scope="row">訂單: 1801010003</th>
                      <td>美元</td>
                      <td class="text-right originalMoney">116.78</td>
                      <td class="text-right offsetMoney">113.47</td>
                      <td>
                        <input type="text" class="form-control text-right collectionMoney" value="0" />
                      </td>
                      <td class="text-right totalMoney">0.00</td>
                    </tr>
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
  apiDataTableCollectionGetAll
} from '../api/api'
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
          { 'data': 'g' },
          { 'data': 'i' },
          { 'data': 'h' },
          {}
        ],
        'order': [[0, 'asc']],
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
            'targets': -1,
            'data': 'a',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<a class="btn btn-warning" href="//?=' + row.id + '">沖帳</a>')
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
            trTemplate += (
              '<tr>' +
              '  <td>' +
              '     <a href="//?=" data-toggle="modal" data-target="#exampleModal" data-a="' + data.a + '" data-b="' + data.b + '" data-c="' + data.c + '" data-d="' + data.d + '" data-e="' + data.e + '" data-f="' + data.f + '" data-g="' + data.g + '" data-h="' + data.h + '" data-i="' + data.i + '">' + data.a + '</a>' +
              '  </td>' +
              '  <td>' +
              '     <a href="//?=" target="_blank">' + data.b + '</a>' +
              '  </td>' +
              '  <td>' + data.c + '</td>' +
              '  <td>' + data.d + '</td>' +
              '  <td>' + data.e + '</td>' +
              '  <td>' +
              '     <a href="//?=" target="_blank">' + data.f + '</a>' +
              '  </td>' +
              '  <td>' + data.g + '</td>' +
              '  <td>' + data.h + '</td>' +
              '  <td>' + data.i + '</td>' +
              '  <td>' + data.j + '</td>' +
              '  <td>' + data.k + '</td>' +
              '</tr>')
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
    })

    // 計算沖帳金額
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

        console.log(IsNumeric(originalMoneyDom.innerText))
        console.log(IsNumeric(offsetMoneyDom.innerText))

        if (IsNumeric(originalMoneyDom.innerText) && IsNumeric(offsetMoneyDom.innerText) && IsNumeric(self.value)) {
          originalMoney = parseInt(originalMoneyDom.innerText)
          offsetMoney = parseInt(offsetMoneyDom.innerText)
          collectionMoney = parseInt(self.value)
          valid = true
        }
      }

      if (valid) {
        totalMoney = (originalMoney - 0) + (offsetMoney - 0) - collectionMoney
        // 去除開頭零
        self.value = collectionMoney
      } else {
        // toastr.error('違法輸入')
        self.value = 0
      }

      tdList.getElementsByClassName('totalMoney')[0].innerText = totalMoney
    }

    // 驗證是否為數字
    function IsNumeric (input) {
      var RE = /^-{0,1}\d*\.{0,1}\d+$/
      return (RE.test(input))
    }

    // 觸發計算沖帳金額
    // for (var item in collectionMoneyList) {
    //   collectionMoneyList[item].dispatchEvent(new Event('input'))
    // }

    // 攔截modal open 事件
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
      '  <th scope="row">收款單: ' + dataF + ' </th>' +
      '  <td>' + dataG + '</td>' +
      '  <td class="text-right originalMoney">' + dataH + '</td>' +
      '  <td class="text-right offsetMoney">100000</td>' +
      '  <td>' +
      '    <input type="text" class="form-control text-right collectionMoney" value="' + dataI + '" />' +
      '  </td>' +
      '  <td class="text-right totalMoney">0.0</td>' +
      '</tr>' +
      '<tr>' +
      '  <th scope="row">訂單: ' + dataB + '</th>' +
      '  <td>' + dataC + '</td>' +
      '  <td class="text-right originalMoney">' + dataD + '</td>' +
      '  <td class="text-right offsetMoney">113.47</td>' +
      '  <td>' +
      '    <input type="text" class="form-control text-right collectionMoney" value="' + dataE + '" />' +
      '  </td>' +
      '  <td class="text-right totalMoney">0.0</td>' +
      '</tr>')

      modal.find('#exampleModalLabelText').text(dataA)
      if (tbodyDom) {
        tbodyDom.innerHTML = tbodyTemplate

        /// 計算沖帳金額
        var collectionMoneyList = document.getElementsByClassName('collectionMoney')
        for (var i = 0; i < collectionMoneyList.length; i++) {
          collectionMoneyList[i].addEventListener('input', collectionMoneyAddEventListener, false)
        }
      }
      // modal.find('.modal-body input').val(recipient)
    })
  }
}
</script>
<style lang="css" >
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
</style>