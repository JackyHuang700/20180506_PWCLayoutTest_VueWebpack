<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <form method="post" id="form1" action="">

        <!-- <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="template1">快速挑選供應商</label>
                  <input type="text" class="form-control supplierSearch" id="template1" name="template1" placeholder="">
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>採購訂單
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="template1">供應商</label>
                  <input type="text" class="form-control supplier" id="template1" name="template1" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template2">名稱</label>
                  <input type="text" class="form-control supplierName" id="template2" name="template2" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template3">聯絡人</label>
                  <input type="text" class="form-control" id="template3" name="template3" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template4">供應商參考</label>
                  <input type="text" class="form-control" id="template4" name="template4" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template4">業務夥伴幣別</label>
                  <select id="template4" name="template4" class="form-control">
                    <option selected>本國幣別</option>
                    <option>系統幣別</option>
                    <option>業務夥伴幣別</option>
                    <option>...</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
        </div> -->

        <!-- 新版 -->
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>採購單
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="DocNum">採購編號</label>
                  <input type="text" class="form-control" name="DocNum" id="DocNum" placeholder="">
                </div>

                <!-- <div class="form-group col-sm-3">
                  <label for="U_WEBSO_ID">唯一碼</label>
                  <input type="text" class="form-control" name="U_WEBSO_ID" id="U_WEBSO_ID" placeholder="">
                </div> -->

                <div class="form-group col-sm-3">
                  <label for="SlpCode">採購員</label>
                  <select id="SlpCode" name="SlpCode" class="form-control">
                    <option selected>黃菌</option>
                  </select>
                </div>
                <div class="form-group col-sm-6 d-none d-sm-block"></div>

                <div class="form-group col-sm-3">
                  <label for="U_bes_Released">採購公告</label>
                  <select id="U_bes_Released" name="U_bes_Released" class="form-control">
                    <option value="Y" selected>是</option>
                    <option value="N">否</option>
                  </select>
                </div>
                <div class="form-group col-sm-3">
                  <label for="Printed">採購類別</label>
                  <select id="Printed" name="Printed" class="form-control">
                    <option value="" selected>外發</option>
                    <option value="">自製</option>
                  </select>
                </div>

                <div class="form-group col-sm-6 d-none d-sm-block"></div>

                <!-- <div class="form-group col-sm-3">
                  <label for="DocStatus">單據狀態</label>
                  <input type="text" class="form-control" name="DocStatus" id="DocStatus" placeholder="">
                </div> -->
                <div class="form-group col-sm-3">
                  <label for="DocDate">過賬日期</label>
                  <input type="text" class="form-control" name="DocDate" id="DocDate" placeholder="" value="2018-7-3">
                </div>
                <div class="form-group col-sm-3">
                  <label for="DocDueDate">到期日</label>
                  <input type="text" class="form-control" name="DocDueDate" id="DocDueDate" placeholder="" value="2018-7-3">
                </div>
                <div class="form-group col-sm-3">
                  <label for="DocDueDate2">交貨日期</label>
                  <input type="text" class="form-control" name="DocDueDate2" id="DocDueDate2" placeholder="" value="2018-7-3">
                </div>
                <div class="form-group col-sm-3 d-none d-sm-block"></div>

                <div class="form-group col-sm-3">
                  <label for="U_PrcCode">成本中心部門</label>
                  <input type="text" class="form-control" name="U_PrcCode" id="U_PrcCode" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="U_PrcCom">成本中心 - 公司別</label>
                  <input type="text" class="form-control" name="U_PrcCom" id="U_PrcCom" placeholder="">
                </div>
                <div class="form-group col-sm-6 d-none d-sm-block"></div>

                <!-- 只會有其中一種情況 -->
                <div class="form-group col-sm-3">
                  <label for="Canceled">狀態</label>
                  <input type="text" class="form-control" name="Canceled" id="Canceled" placeholder="" value="已取消" readonly>
                </div>
                <!-- <div class="form-group col-sm-3">
                  <label for="Confirmed">狀態</label>
                  <input type="text" class="form-control" name="Confirmed" id="Confirmed" placeholder="" value="已確認" readonly>
                </div> -->
                <!-- 只會有其中一種情況 -->
                <div class="form-group col-sm-3">
                  <label for="Printed">已打印</label>
                  <select id="Printed" name="Printed" class="form-control" readonly>
                    <option selected>是</option>
                    <option>否</option>
                  </select>
                </div>
                <div class="form-group col-sm-6 d-none d-sm-block"></div>
                <div class="form-group col-sm-3">
                  <label for="Comments">備註</label>
                  <textarea name="Comments" id="Comments" cols="30" rows="10" class="form-control"></textarea>
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
                    <th scope="col" class="align-middle">採購條碼</th>
                    <th scope="col" class="align-middle">供應商</th>
                    <th scope="col" class="align-middle">物料編號</th>
                    <th scope="col" class="align-middle">物料服務描述</th>
                    <th scope="col" class="align-middle">數量</th>
                    <th scope="col" class="align-middle">未清數量</th>
                    <th scope="col" class="align-middle">單位</th>
                    <th scope="col" class="align-middle">貨幣</th>
                    <th scope="col" class="align-middle">單價</th>
                    <th scope="col" class="align-middle">折扣</th>
                    <th scope="col" class="align-middle">價格</th>
                    <th scope="col" class="align-middle">稅別</th>
                    <th scope="col" class="align-middle">稅率</th>
                    <th scope="col" class="align-middle">含稅單價</th>
                    <th scope="col" class="align-middle">總計</th>
                    <th scope="col" class="align-middle">材料顏色</th>
                    <th scope="col" class="align-middle">使用位置</th>
                  </tr>
                </thead>
              </table>

            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>統計總額
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="testInput">折扣前總計</label>
                  <input type="text" class="form-control text-right" name="testInput" id="testInput" placeholder="" readonly value="0">
                </div>
                <div class="form-group col-sm-3">
                  <label for="testInput2">折扣</label>
                  <input type="text" class="form-control text-right" name="testInput2" id="testInput2" placeholder="" readonly>
                </div>
              <div class="form-group col-sm-6 d-none d-sm-block"></div>                
                <div class="form-group col-sm-3">
                  <label for="testInput3">運費</label>
                  <input type="text" class="form-control text-right" name="testInput3" id="testInput3" placeholder="" readonly>
                </div>
                <div class="form-group col-sm-3">
                  <label for="testInput4">稅額</label>
                  <input type="text" class="form-control text-right" name="testInput4" id="testInput4" placeholder="" readonly>
                </div>
                <div class="form-group col-sm-3">
                  <label for="testInput5">到期付款總計</label>
                  <input type="text" class="form-control text-right" name="testInput5" id="testInput5" placeholder="" readonly value="0">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 text-right">
          <button type="submit" class="btn btn-success col-sm-2 mb-3">儲存</button>
          <a href="" class="btn btn-danger col-sm-1 mb-3" onclick="javascript:location.href='/Purchase/Index'">返回</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import 'jquery-validation'
import 'jquery-ui/ui/widgets/autocomplete'
import 'datatables.net'
import 'datatables.net-bs4'
import {
  language
} from '../config/dataTable'
import {
  apiDataTablePurchaseAutoComplete,
  apiDataTableCopyTemplateGetAll
} from '../api/api'

export default {
  name: 'purchase2',
  created () { },
  mounted () {
    // (function () {
    //   var discPrcntDom = document.getElementById('DiscPrcnt')
    //   var priceBefDiDom = document.getElementById('PriceBefDi')
    //   var priceDom = document.getElementById('Price')

    //   var eventList = ['change', 'paste']
    //   for (var item in eventList) {
    //     discPrcntDom.addEventListener(eventList[item], CalcFuncA)
    //     priceBefDiDom.addEventListener(eventList[item], CalcFuncA)
    //   }

    //   // 計算
    //   function CalcFuncA (e) {
    //     var isNumericdiscPrcntDom = IsNumeric(discPrcntDom.value)
    //     var isNumericpriceBefDiDom = IsNumeric(priceBefDiDom.value)

    //     if (isNumericdiscPrcntDom && isNumericpriceBefDiDom) {
    //       priceDom.value = (discPrcntDom.value - 0) * (priceBefDiDom.value - 0)
    //     } else if (isNumericdiscPrcntDom) {
    //       priceBefDiDom.value = 0
    //     } else if (isNumericpriceBefDiDom) {
    //       discPrcntDom.value = 0
    //     } else {
    //       discPrcntDom.value = 0
    //       priceBefDiDom.value = 0
    //     }
    //   }
    //   // 驗證是否為數字
    //   function IsNumeric (input) {
    //     var RE = /^-{0,1}\d*\.{0,1}\d+$/
    //     return (RE.test(input))
    //   }

    //   // 新增自訂的校驗規則
    //   $.validator.addMethod('alphabetnumber', function (value, element) {
    //     var valiePrice = (discPrcntDom.value - 0) * (priceBefDiDom.value - 0)

    //     // var re = /^[a-zA-Z0-9]+$/g

    //     return valiePrice === priceDom.value
    //   })

    //   // 提交时验证表单
    //   $('#form1').validate({
    //     errorPlacement: function (error, element) {
    //       // Append error within linked label
    //       $(element)
    //         .closest('form')
    //         .find("label[for='" + element.attr('id') + "']")
    //         .append(error)
    //     },
    //     errorElement: 'span',
    //     rules: {
    //       DiscPrcnt: {
    //         required: true,
    //         number: true
    //       },
    //       PriceBefDi: {
    //         required: true,
    //         number: true
    //       },
    //       Price: {
    //         required: true,
    //         number: true,
    //         alphabetnumber: true
    //       }
    //     },
    //     messages: {
    //       DiscPrcnt: {
    //         required: '請輸入'
    //       },
    //       PriceBefDi: {
    //         required: '請輸入'
    //       },
    //       Price: {
    //         required: '請輸入',
    //         alphabetnumber: '系統檢測計算異常'
    //       }
    //     }
    //   })
    // }());
    // autoComplete
    // (function () {
    //   // projects
    //   function autocompleteAjax (searchData, callback) {
    //     $.ajax({
    //       url: apiDataTablePurchaseAutoComplete,
    //       type: 'GET',
    //       data: searchData,
    //       error: function () {
    //         console.log('error')
    //       },
    //       success: function (e) {
    //         if (callback) {
    //           callback(e)
    //         }
    //       }
    //     })
    //   }

    //   // 快取
    //   var cache = {}
    //   var supplierSearchDom = document.getElementsByClassName('supplierSearch')[0]
    //   var supplierDom = document.getElementsByClassName('supplier')[0]
    //   var supplierNameDom = document.getElementsByClassName('supplierName')[0]
    //   $(supplierSearchDom).autocomplete({
    //     source: function (request, response) {
    //       var term = request.term
    //       if (term in cache) {
    //         response(cache[term])
    //       } else {
    //         autocompleteAjax(request, function (resp) {
    //           cache[term] = resp
    //           response(resp)
    //         })
    //       }
    //     },
    //     select: function (event, ui) {
    //       supplierDom.value = ui.item.value
    //       supplierNameDom.value = ui.item.name

    //       return false
    //     }
    //   }).autocomplete('instance')._renderItem = function (ul, item) {
    //     return $('<li>')
    //       .append('<div>' + item.value + ' ' + item.name + '</div>')
    //       .appendTo(ul)
    //   }
    // }());
    // dataTable
    (function () {
      $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
        // 'ajax': '/DemoTestPurchaseInsertAPI/',
        'scrollX': true,
        'bPaginate': false,
        'searching': false,
        'columns': [
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' }
        ],
        'order': [
          [1, 'asc']
        ],
        'columnDefs': [
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })
    }())
  }
}
</script>
<style lang="css">
@import 'jquery-ui/themes/base/all.css';
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

@import '../assets/dataTables/dataTables.css';

</style>


