<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <form method="get" id="form1" action="">

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-md-3">
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
                <div class="form-group col-md-3">
                  <label for="template1">供應商</label>
                  <input type="text" class="form-control supplier" id="template1" name="template1" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template2">名稱</label>
                  <input type="text" class="form-control supplierName" id="template2" name="template2" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template3">聯絡人</label>
                  <input type="text" class="form-control" id="template3" name="template3" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template4">供應商參考</label>
                  <input type="text" class="form-control" id="template4" name="template4" placeholder="">
                </div>
                <div class="form-group col-md-3">
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

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>採購單
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="template1">單據內部標識</label>
                  <input type="text" class="form-control" name="" id="template1" placeholder="">
                </div>
                <div class="form-group col-md-9 d-none d-sm-block"></div>
                <div class="form-group col-md-3">
                  <label for="template2">行編號</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template3">行狀態</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template3">行總計</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template4">行總計（外幣）</label>
                  <input type="text" class="form-control" name="" id="template4" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template3">行交貨日期</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template2">每行稅率</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-md-6 d-none d-sm-block"></div>

                <div class="form-group col-md-3">
                  <label for="template4">物料編號</label>
                  <input type="text" class="form-control" name="" id="template4" placeholder="">
                </div>

                <div class="form-group col-md-3">
                  <label for="template2">數量</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>

                <div class="form-group col-md-3">
                  <label for="template4">剩餘未清數量</label>
                  <input type="text" class="form-control" name="" id="template4" placeholder="">
                </div>
                <div class="form-group col-md-12">
                  <label for="template1">物料/服務描述</label>
                  <textarea name="" id="template1" cols="30" rows="10" class="form-control"></textarea>
                </div>

                <div class="form-group col-md-3">
                  <label for="template1">價格貨幣</label>
                  <input type="text" class="form-control" name="" id="template1" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template2">貨幣匯率</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="PriceBefDi">單價(折扣前)</label>
                  <input type="text" class="form-control" name="PriceBefDi" id="PriceBefDi" placeholder="" value="0">
                </div>
                <div class="form-group col-md-3">
                  <label for="DiscPrcnt">每行折扣 %</label>
                  <input type="text" class="form-control" name="DiscPrcnt" id="DiscPrcnt" placeholder="" value="0">
                </div>
                <div class="form-group col-md-3">
                  <label for="Price">價格(未稅)</label>
                  <input type="text" class="form-control" name="Price" id="Price" placeholder="" value="0" readonly>
                </div>

                <div class="form-group col-md-3">
                  <label for="template3">稅定義</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template4">含稅單價</label>
                  <input type="text" class="form-control" name="" id="template4" placeholder="">
                </div>

                <div class="form-group col-md-3">
                  <label for="template1">總稅額</label>
                  <input type="text" class="form-control" name="" id="template1" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template2">稅額（外幣）</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>

                <div class="form-group col-md-3">
                  <label for="template1">供應商目錄編號</label>
                  <input type="text" class="form-control" name="" id="template1" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template2">倉庫編號</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template3">計量單位代碼</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template4">WEB訂單編號(唯一碼)</label>
                  <input type="text" class="form-control" name="" id="template4" placeholder="">
                </div>

                <div class="form-group col-md-12">
                  <label for="template1">使用位置以及備註</label>
                  <textarea name="" id="template1" cols="30" rows="10" class="form-control"></textarea>
                </div>

                <div class="form-group col-md-3">
                  <label for="template2">材料顏色名稱</label>
                  <input type="text" class="form-control" name="" id="template2" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="template3">採購條碼號</label>
                  <input type="text" class="form-control" name="" id="template3" placeholder="">
                </div>
                <div class="form-group col-md-12">
                  <label for="template4">原物料採購備註</label>
                  <textarea name="" id="template4" cols="30" rows="10" class="form-control"></textarea>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-12 text-right">
          <button type="submit" class="btn btn-success col-3">儲存</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import 'jquery-validation'
import 'jquery-ui/ui/widgets/autocomplete'
import {
  apiDataTablePurchaseAutoComplete
} from '../api/api'

export default {
  name: 'purchase2',
  created () { },
  mounted () {
    (function () {
      var discPrcntDom = document.getElementById('DiscPrcnt')
      var priceBefDiDom = document.getElementById('PriceBefDi')
      var priceDom = document.getElementById('Price')

      var eventList = ['change', 'paste']
      for (var item in eventList) {
        discPrcntDom.addEventListener(eventList[item], CalcFuncA)
        priceBefDiDom.addEventListener(eventList[item], CalcFuncA)
      }

      // 計算
      function CalcFuncA (e) {
        var isNumericdiscPrcntDom = IsNumeric(discPrcntDom.value)
        var isNumericpriceBefDiDom = IsNumeric(priceBefDiDom.value)

        if (isNumericdiscPrcntDom && isNumericpriceBefDiDom) {
          priceDom.value = (discPrcntDom.value - 0) * (priceBefDiDom.value - 0)
        } else if (isNumericdiscPrcntDom) {
          priceBefDiDom.value = 0
        } else if (isNumericpriceBefDiDom) {
          discPrcntDom.value = 0
        } else {
          discPrcntDom.value = 0
          priceBefDiDom.value = 0
        }
      }
      // 驗證是否為數字
      function IsNumeric (input) {
        var RE = /^-{0,1}\d*\.{0,1}\d+$/
        return (RE.test(input))
      }

      // 新增自訂的校驗規則
      $.validator.addMethod('alphabetnumber', function (value, element) {
        var valiePrice = (discPrcntDom.value - 0) * (priceBefDiDom.value - 0)

        // var re = /^[a-zA-Z0-9]+$/g

        return valiePrice === priceDom.value
      })

      // 提交时验证表单
      $('#form1').validate({
        errorPlacement: function (error, element) {
          // Append error within linked label
          $(element)
            .closest('form')
            .find("label[for='" + element.attr('id') + "']")
            .append(error)
        },
        errorElement: 'span',
        rules: {
          DiscPrcnt: {
            required: true,
            number: true
          },
          PriceBefDi: {
            required: true,
            number: true
          },
          Price: {
            required: true,
            number: true,
            alphabetnumber: true
          }
        },
        messages: {
          DiscPrcnt: {
            required: '請輸入'
          },
          PriceBefDi: {
            required: '請輸入'
          },
          Price: {
            required: '請輸入',
            alphabetnumber: '系統檢測計算異常'
          }
        }
      })
    }());
    // autoComplete
    (function () {
      // projects
      function autocompleteAjax (searchData, callback) {
        $.ajax({
          url: apiDataTablePurchaseAutoComplete,
          type: 'GET',
          data: searchData,
          error: function () {
            console.log('error')
          },
          success: function (e) {
            if (callback) {
              callback(e)
            }
          }
        })
      }

      // 快取
      var cache = {}
      var supplierSearchDom = document.getElementsByClassName('supplierSearch')[0]
      var supplierDom = document.getElementsByClassName('supplier')[0]
      var supplierNameDom = document.getElementsByClassName('supplierName')[0]
      $(supplierSearchDom).autocomplete({
        source: function (request, response) {
          var term = request.term
          if (term in cache) {
            response(cache[term])
          } else {
            autocompleteAjax(request, function (resp) {
              cache[term] = resp
              response(resp)
            })
          }
        },
        select: function (event, ui) {
          supplierDom.value = ui.item.value
          supplierNameDom.value = ui.item.name

          return false
        }
      }).autocomplete('instance')._renderItem = function (ul, item) {
        return $('<li>')
          .append('<div>' + item.value + ' ' + item.name + '</div>')
          .appendTo(ul)
      }
    }())
  }
}
</script>
<style lang="css">
@import 'jquery-ui/themes/base/all.css';
</style>
