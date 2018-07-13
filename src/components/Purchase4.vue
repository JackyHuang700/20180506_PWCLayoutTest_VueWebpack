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
                        <label class="float-left" for="inputText">訂單編號</label>
                        <input type="text" class="form-control" id="inputText" placeholder="">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText2">採購分單編號</label>
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

            <div class="container-fluid">
              <div class="row">
                <div class="col-12 mt-1">

                  <div class="form-group row">
                    <label for="" class="col-sm-1 col-form-label text-center">操作</label>
                    <div class="col-sm-10">
                      <button type="button" class="btn btn-primary mr-2" id="button111" data-toggle="modal" data-target="#exampleModal">更新報價</button>
                      <button type="button" class="btn btn-primary" id="button1112" data-toggle="modal" data-target="#exampleModal2">出貨</button>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-1">
                  <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" class="align-middle">選取</th>
                        <th scope="col" class="align-middle">採購分單編號</th>
                        <th scope="col" class="align-middle">訂單編號</th>
                        <th scope="col" class="align-middle">店鋪名稱</th>
                        <th scope="col" class="align-middle">客戶</th>
                        <th scope="col" class="align-middle">採購分單狀態</th>
                        <th scope="col" class="align-middle">幣種</th>
                        <th scope="col" class="align-middle">總計金額</th>
                        <th scope="col" class="align-middle">持有人</th>
                        <th scope="col" class="align-middle">到貨日期</th>
                        <th scope="col" class="align-middle">產品名稱</th>
                        <th scope="col" class="align-middle">正面圖</th>
                        <th scope="col" class="align-middle">訂製單</th>
                        <th scope="col" class="align-middle">交貨日期</th>
                        <th scope="col" class="align-middle">時限標準</th>
                        <th scope="col" class="align-middle">產品明細編號</th>
                        <th scope="col" class="align-middle">物料編號</th>
                        <th scope="col" class="align-middle">SKU</th>
                        <th scope="col" class="align-middle">COLOR</th>
                        <th scope="col" class="align-middle">SIZE</th>
                        <th scope="col" class="align-middle">數量</th>
                        <th scope="col" class="align-middle">採購分單明細編號</th>
                        <th scope="col" class="align-middle">供應策略</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">更新報價</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <label for="exampleModal_Price" class="col-sm-2 col-form-label">價格</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="exampleModal_Price" placeholder="請輸入">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success col-2" id="updateInexampleModal">更新</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">更新出貨</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <label for="exampleModal2_Name" class="col-sm-2 col-form-label">物流名稱</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="exampleModal2_Name" placeholder="請輸入">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="exampleModal2_Code" class="col-sm-2 col-form-label">物流代號</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="exampleModal2_Code" placeholder="請輸入">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success col-2" id="updateInexampleModal2">更新</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
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
  apiPurchase4Index
} from '../api/api'
import '../assets/dataTables/dataTables.js'

export default {
  name: 'copytemplate',
  created () { },
  mounted () {
    // 被選中的資料
    var selectIdList = [];
    // dataTables
    (function () {
      var dataTableDom = document.getElementById('example')
      var dataTableObj
      //
      dataTableObj = $(dataTableDom).DataTable({
        'ajax': apiPurchase4Index,
        'scrollX': true,
        'bPaginate': false,
        'columns': [
          {},
          { 'data': 'purchasePartNumber' },
          {},
          { 'data': 'shopName' },
          { 'data': 'customerName' },
          { 'data': 'purchasePartStatus' },
          { 'data': 'currency' },
          { 'data': 'total' },
          { 'data': 'owner' },
          { 'data': 'arrivalDate' },
          { 'data': 'productName' },
          { 'data': 'productImg' },
          { 'data': 'tailoredNumber' },
          { 'data': 'deliveryDate' },
          { 'data': 'timeLimit' },
          { 'data': 'detailNumber' },
          { 'data': 'stockNumber' },
          { 'data': 'skuCode' },
          { 'data': 'colorCode' },
          { 'data': 'productSize' },
          { 'data': 'quantity' },
          { 'data': 'purchasePartDetailNumber' },
          { 'data': 'supplyStrategy' }
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
              return (
                '<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input selectInfo" id="{{id}}" data-id={{dataId}}>' +
                '  <label class="custom-control-label" for="{{id}}"></label>' +
                '</div>')
                .replace(/{{id}}/g, ('checkbox' + meta.row))
                .replace(/{{dataId}}/g, meta.row)
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
            'targets': 11,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              if (row.haveTailored) {
                return ('<img src="/Tailored/GetTailoredImg?file={{src}}" alt="" height="42" width="42">')
                  .replace(/{{src}}/g, row.productImg)
              } else {
                return ('<img src="http://fakeimg.pl/42x42/" alt="" height="42" width="42">')
              }
            }
          },
          {
            'targets': 12,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              if (row.haveTailored) {
                return ('<a target="_blank" href="/Tailored/Display?DetailNumber={{link}}">{{text}}</a>')
                  .replace(/{{link}}/g, row.detailNumber).replace(/{{text}}/g, row.tailoredNumber)
              } else {
                return ('無')
              }
            }
          },
          {
            'targets': -1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              var SupplyStrategyWord = ''
              switch (row.supplyStrategy) {
                case '0':
                case 0:
                  SupplyStrategyWord = '未確認'
                  break
                case 1:
                  SupplyStrategyWord = '自製'
                  break
                case 2:
                  SupplyStrategyWord = '外購/外發'
                  break
                case 3:
                  SupplyStrategyWord = '現貨出貨'
                  break
                case 4:
                  SupplyStrategyWord = '現貨修改'
                  break
                case 5:
                  SupplyStrategyWord = '現貨質檢'
                  break
                case 6:
                  SupplyStrategyWord = '外發帶料'
                  break
                default:
                  SupplyStrategyWord = row.supplyStrategy
                  break
              }

              return (SupplyStrategyWord)
            }
          }
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })

      $(document).on('click', '.selectInfo', function (e) {
        var self = e.target
        var dataId = self.getAttribute('data-id')

        if (self.checked) {
          selectIdList.push(dataId)
        } else {
          var index = selectIdList.indexOf(dataId)
          if (index !== -1) {
            selectIdList.splice(index, 1)
          }
        }
      })
    }());
    // Modal - updateInexampleModal
    (function () {
      var updateInexampleModalDom = document.getElementById('updateInexampleModal')
      var exampleModalDom = document.getElementById('exampleModal')
      var exampleModal_PriceDom = document.getElementById('exampleModal_Price')

      $(updateInexampleModalDom).on('click', function (e) {
        if (confirm('確認完畢?')) {
          cancelCheckbox()
          $(exampleModalDom).modal('hide')
        }
      })
    }());
    // Modal - updateInexampleModal2
    (function () {
      var updateInexampleModal2Dom = document.getElementById('updateInexampleModal2')
      var exampleModal2Dom = document.getElementById('exampleModal2')
      var exampleModal2_NameDom = document.getElementById('exampleModal2_Name')
      var exampleModal2_CodeDom = document.getElementById('exampleModal2_Code')

      $(updateInexampleModal2Dom).on('click', function (e) {
        if (confirm('確認完畢?')) {
          cancelCheckbox()
          $(exampleModal2Dom).modal('hide')
        }
      })
    }())

    // 共用 - 所有checkbox取消選取
    function cancelCheckbox (params) {
      var checkboxDomList = document.getElementsByClassName('selectInfo')
      for (var i = 0; i < checkboxDomList.length; i++) {
        var checkboxDom = checkboxDomList[i]
        if (checkboxDom.checked) {
          checkboxDom.checked = false
        }
      }

      selectIdList = []
    }

    // test
    (function () {
      // document.getElementById('button1112').click()
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';
</style>
