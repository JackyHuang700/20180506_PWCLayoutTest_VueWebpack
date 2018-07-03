<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <form method="post" id="form1" action="">

        <div class="col-12">
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
        </div>

        <!-- <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>採購單 - 棄用
            </div>
            <div class="card-body">

              <div class="form-row">
           

                <div class="form-group col-sm-12">
                  <label for="template1">物料/服務描述</label>
                  <textarea name="" id="template1" cols="30" rows="10" class="form-control"></textarea>
                </div>

                <div class="form-group col-sm-3">
                  <label for="template1">價格貨幣</label>
                  <input type="text" class="form-control" name="" id="template1" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template2">貨幣匯率</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="PriceBefDi">單價(折扣前)</label>
                  <input type="text" class="form-control" name="PriceBefDi" id="PriceBefDi" placeholder="" value="0">
                </div>
                <div class="form-group col-sm-3">
                  <label for="DiscPrcnt">每行折扣 %</label>
                  <input type="text" class="form-control" name="DiscPrcnt" id="DiscPrcnt" placeholder="" value="0">
                </div>
                <div class="form-group col-sm-3">
                  <label for="Price">價格(未稅)</label>
                  <input type="text" class="form-control" name="Price" id="Price" placeholder="" value="0" readonly>
                </div>

                <div class="form-group col-sm-3">
                  <label for="template3">稅定義</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template4">含稅單價</label>
                  <input type="text" class="form-control" name="" id="template4" placeholder="">
                </div>

                <div class="form-group col-sm-3">
                  <label for="template1">總稅額</label>
                  <input type="text" class="form-control" name="" id="template1" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template2">稅額（外幣）</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>

                <div class="form-group col-sm-3">
                  <label for="template1">供應商目錄編號</label>
                  <input type="text" class="form-control" name="" id="template1" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template2">倉庫編號</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template3">計量單位代碼</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template4">WEB訂單編號(唯一碼)</label>
                  <input type="text" class="form-control" name="" id="template4" placeholder="">
                </div>

                <div class="form-group col-sm-12">
                  <label for="template1">使用位置以及備註</label>
                  <textarea name="" id="template1" cols="30" rows="10" class="form-control"></textarea>
                </div>

                <div class="form-group col-sm-3">
                  <label for="template2">材料顏色名稱</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="template3">採購條碼號</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-sm-12">
                  <label for="template4">原物料採購備註</label>
                  <textarea name="" id="template4" cols="30" rows="10" class="form-control"></textarea>
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
                  <label for="DocNum">單據編號</label>
                  <input type="text" class="form-control" name="DocNum" id="DocNum" placeholder="">
                </div>

                <div class="form-group col-sm-3">
                  <label for="Printed">已打印</label>
                  <input type="text" class="form-control" name="Printed" id="Printed" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="DocStatus">單據狀態</label>
                  <input type="text" class="form-control" name="DocStatus" id="DocStatus" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="DocDate">過賬日期</label>
                  <input type="text" class="form-control" name="DocDate" id="DocDate" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="DocDueDate">到期日</label>
                  <input type="text" class="form-control" name="DocDueDate" id="DocDueDate" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="Comments">備註</label>
                  <textarea name="Comments" id="Comments" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="form-group col-sm-3">
                  <label for="SlpCode">採購員</label>
                  <select id="SlpCode" name="SlpCode" class="form-control">
                    <option selected>黃菌</option>
                  </select>
                </div>

                <div class="form-group col-sm-3">
                  <label for="U_bes_Released">採購公告</label>
                  <select id="U_bes_Released" name="U_bes_Released" class="form-control">
                    <option value="Y" selected>是</option>
                    <option value="N">否</option>
                  </select>
                </div>
                <div class="form-group col-sm-3">
                  <label for="U_WEBSO_ID">唯一碼</label>
                  <input type="text" class="form-control" name="U_WEBSO_ID" id="U_WEBSO_ID" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="U_PrcCode">成本中心部門</label>
                  <input type="text" class="form-control" name="U_PrcCode" id="U_PrcCode" placeholder="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="U_PrcCom">成本中心 - 公司別</label>
                  <input type="text" class="form-control" name="U_PrcCom" id="U_PrcCom" placeholder="">
                </div>

                <!-- 只會有其中一種情況 -->
                <div class="form-group col-sm-3">
                  <label for="Canceled">已取消</label>
                  <input type="text" class="form-control" name="Canceled" id="Canceled" placeholder="" readonly>
                </div>
                <div class="form-group col-sm-3">
                  <label for="Confirmed">已確認</label>
                  <input type="text" class="form-control" name="Confirmed" id="Confirmed" placeholder="" readonly>
                </div>
                <!-- 只會有其中一種情況 -->

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
                    <th scope="col" class="align-middle">單據內部標識</th>
                    <th scope="col" class="align-middle">物料編號</th>
                    <th scope="col" class="align-middle">物料/服務描述</th>
                    <th scope="col" class="align-middle">數量</th>
                    <th scope="col" class="align-middle">行交貨日期</th>
                    <th scope="col" class="align-middle">剩餘未清數量</th>
                    <th scope="col" class="align-middle">價格貨幣</th>
                    <th scope="col" class="align-middle">貨幣匯率</th>
                    <th scope="col" class="align-middle">單價（折扣前）</th>
                    <th scope="col" class="align-middle">每行折扣％</th>
                    <th scope="col" class="align-middle">價格（未稅）</th>
                    <th scope="col" class="align-middle">每行稅率</th>
                    <th scope="col" class="align-middle">稅定義</th>
                    <th scope="col" class="align-middle">含稅單價</th>
                    <th scope="col" class="align-middle">總稅額</th>
                    <th scope="col" class="align-middle">稅額（外幣）</th>
                    <th scope="col" class="align-middle">供應商目錄編號</th>
                    <th scope="col" class="align-middle">倉庫編號</th>
                    <th scope="col" class="align-middle">計量單位代碼</th>
                    <th scope="col" class="align-middle">WEB訂單編號（唯一碼</th>
                    <th scope="col" class="align-middle">使用位置以及備註</th>
                    <th scope="col" class="align-middle">材料顏色名稱</th>
                    <th scope="col" class="align-middle">採購條碼號</th>
                    <th scope="col" class="align-middle">原物料採購備註</th>
                  </tr>
                </thead>
              </table>

            </div>
          </div>
        </div>

        <!-- <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>計算總額
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="Printed"></label>
                  <input type="text" class="form-control" name="Printed" id="Printed" placeholder="">
                </div>
              </div>
            </div>
          </div>
        </div> -->

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
      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
        'scrollX': true,
        'columns': [
          { 'data': 'mainData_1' },
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
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' }
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

div.dataTables_wrapper {
  width: 84vw;
  margin: 0 auto;
}

/* 另外添加 */
#example_wrapper {
  overflow-x: auto;
}

#example th {
  min-width: 130px;
}

/* #example th:nth-child(1) {
  padding: 0 40px !important;
} */
/* 2字 */
/* #example th:nth-child(1),
#example th:nth-child(5),
#example th:nth-child(6) {
  min-width: 27px;
} */

/* 6字 */
/* #example th:nth-child(1),
#example th:nth-child(8),
#example th:nth-child(13),
#example th:nth-child(18),
#example th:nth-child(23),
#example th:nth-child(24) {
  min-width: 90px;
} */

/* 3字 */
/* #example th:nth-child(2),
#example th:nth-child(3),
#example th:nth-child(15),
#example th:nth-child(17),
#example th:nth-child(19) {
  min-width: 50px;
} */

/* 4字 */
/* #example th:nth-child(4),
#example th:nth-child(9),
#example th:nth-child(10),
#example th:nth-child(14),
#example th:nth-child(16),
#example th:nth-child(22) {
  min-width: 50px;
}
#example th:nth-child(7)
#example th:nth-child(27)
 {
  min-width: 70px;
} */

/* #example th:nth-child(11),
#example th:nth-child(12),
#example th:nth-child(20),
#example th:nth-child(21) {
  min-width: 90px;
} */

/* #example th:nth-child(25),
#example th:nth-child(28) {
  min-width: 100px;
} */
</style>


