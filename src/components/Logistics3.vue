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

                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText2">主訂單號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="" />
                      </div>

                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText6">訂製唯一碼</label>
                        <input type="text" class="form-control" id="inputText6" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">訂單交貨日期(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText4">訂單交貨日期(迄)</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="" />
                      </div>

                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText8">電子郵件</label>
                        <input type="text" class="form-control" id="inputText8" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText9">市場</label>
                        <input type="text" class="form-control" id="inputText9" placeholder="" />
                      </div>

                      <div class="form-group col-sm-6 d-none d-sm-block"></div>

                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText">業務部門</label>
                        <select id="inputText" name="inputText" class="form-control">
                          <option selected></option>
                          <option>財務部</option>
                          <option>採購部</option>
                          <option>產品部</option>
                          <option>德語組</option>
                          <option>菲律濱組</option>
                          <option>日語組</option>
                          <option>英語組</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText5">經手人</label>
                        <select id="inputText5" name="inputText5" class="form-control">
                          <option selected></option>
                          <option>財務</option>
                          <option>郭雪雪</option>
                          <option>準星星</option>
                          <option>願絕</option>
                          <option>胡芳芳</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText7">快遞類別</label>
                        <select id="inputText7" name="inputText7" class="form-control">
                          <option selected></option>
                          <option>DHL</option>
                          <option>DHL(德遊小包)</option>
                          <option>本地單號</option>
                          <option>國際EUB</option>
                          <option>國內快遞</option>
                          <option>郵政</option>
                          <option>專線</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText7">快遞名稱(物流公司)</label>
                        <select id="inputText7" name="inputText7" class="form-control">
                          <option selected></option>
                          <option>BBX</option>
                          <option>CNE掛號小包</option>
                          <option>CNE歐洲專線</option>
                          <option>CNE全球特惠</option>

                        </select>
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

            <div class="row">
              <div class="col-12 mb-4 text-right" style="padding-right: 27px;">
                <button class="btn btn-success col-2">儲存</button>
              </div>
              <div class="col-12">
                <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle"> 主訂單號 </th>
                      <th scope="col" class="align-middle"> 訂單號碼 </th>
                      <th scope="col" class="align-middle"> 定製唯一碼 </th>
                      <th scope="col" class="align-middle"> 料品代號 </th>
                      <th scope="col" class="align-middle"> 料品名稱 </th>
                      <th scope="col" class="align-middle"> 放行數量 </th>
                      <th scope="col" class="align-middle"> 應付金額 </th>
                      <th scope="col" class="align-middle"> 已支付额 </th>
                      <th scope="col" class="align-middle"> 存貨? </th>
                      <th scope="col" class="align-middle"> 交貨日期 </th>
                      <th scope="col" class="align-middle"> 客戶代碼 </th>
                      <th scope="col" class="align-middle"> 快遞類別 </th>
                      <th scope="col" class="align-middle"> 快遞名稱(物流公司) </th>
                      <th scope="col" class="align-middle"> 付款狀態 </th>
                      <th scope="col" class="align-middle"> 未撿貨數 </th>
                      <th scope="col" class="align-middle"> 客戶名稱 </th>
                      <th scope="col" class="align-middle"> 訂單數量 </th>
                      <th scope="col" class="align-middle"> 經手人 </th>
                      <th scope="col" class="align-middle"> 經手ID </th>
                      <th scope="col" class="align-middle"> 業務部門 </th>
                      <th scope="col" class="align-middle"> 市場 </th>
                      <th scope="col" class="align-middle"> 國別 </th>
                      <th scope="col" class="align-middle"> PickingID </th>
                      <th scope="col" class="align-middle"> PrintDate </th>
                      <th scope="col" class="align-middle"> 撿貨日期 </th>
                      <th scope="col" class="align-middle"> 倉庫代碼 </th>
                      <th scope="col" class="align-middle"> 儲格 </th>
                      <th scope="col" class="align-middle"> 批次 </th>
                      <th scope="col" class="align-middle"> 庫存量 </th>
                      <th scope="col" class="align-middle"> 揀貨數量 </th>
                      <th scope="col" class="align-middle"> 己撿貨 </th>
                    </tr>
                  </thead>
                </table>
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
import { language } from '../config/dataTable'
import { apiLogistics3Index } from '../api/api'

export default {
  name: 'logistics3',
  created () {},
  mounted () {
    // dataTables
    ;(function () {
      //
      var dataTableObj = $('#example').DataTable({
        ajax: apiLogistics3Index,
        // ajax: '/Demo/TestLogisticsAPI3',
        scrollX: true,
        bPaginate: false,
        columns: [
          { data: 'mainData_1' },
          { data: 'mainData_2' },
          { data: 'mainData_3' },
          { data: 'mainData_4' },
          { data: 'mainData_5' },
          { data: 'mainData_6' },
          { data: 'mainData_7' },
          { data: 'mainData_8' },
          { data: 'mainData_9' },
          { data: 'mainData_10' },
          { data: 'mainData_11' },
          { data: 'mainData_12' },
          { data: 'mainData_13' },
          { data: 'mainData_14' },
          { data: 'mainData_15' },
          { data: 'mainData_16' },
          { data: 'mainData_17' },
          { data: 'mainData_18' },
          { data: 'mainData_19' },
          { data: 'mainData_20' },
          { data: 'mainData_21' },
          { data: 'mainData_22' },
          { data: 'mainData_23' },
          { data: 'mainData_24' },
          { data: 'mainData_25' },
          { data: 'mainData_26' },
          { data: 'mainData_27' },
          { data: 'mainData_28' },
          { data: 'mainData_29' },
          { data: 'mainData_30' },
          { data: 'mainData_31' }
        ],
        order: [[1, 'asc']],
        columnDefs: [
          {
            targets: 12,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return (
                '<select class="form-control">' +
                '  <option>DHL</option>' +
                '  <option>DHL(德遊小包)</option>' +
                '  <option>本地單號</option>' +
                '  <option>國際EUB</option>' +
                '  <option>國內快遞</option>' +
                '  <option>郵政</option>' +
                '  <option selected>專線</option>' +
                '</select>'
              )
            }
          },
          {
            targets: 13,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return (
                '<select class="form-control">' +
                '<option>BBX</option>' +
                '<option selected>CNE掛號小包</option>' +
                '<option>CNE歐洲專線</option>' +
                '<option>CNE全球特惠</option>' +
                '</select>'
              )
            }
          },
          {
            targets: 25,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return '<input type="text" class="form-control" value={{value}} />'.replace(
                '{{value}}',
                row.mainData_24
              )
            }
          }
        ],
        drawCallback: function (settings) {
          // registerPikaday()
        },
        language: language
        // 'language': dataTablesModule.language()
      })

      //
      // function registerPikaday () {
      //   var pikadayDomList = document.getElementsByClassName('pikaday')
      //   console.log(pikadayDomList)
      //   for (var i = 0; i < pikadayDomList.length; ++i) {
      //     var newConfig = pikadayModule.registerPickday()
      //     newConfig.field = pikadayDomList[i]
      //     new Pikaday(newConfig)
      //   }
      // }
    })()
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';
</style>
