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

                      <div class="form-group col-sm-9 d-none d-sm-block"></div>

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
                        <label class="float-left" for="inputText6">快遞類別</label>
                        <select id="inputText6" name="inputText6" class="form-control">
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
                <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered miniTable">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle checkBoxColumn">#</th>
                      <th scope="col" class="align-middle">主訂編號</th>
                      <th scope="col" class="align-middle">訂單號碼</th>
                      <th scope="col" class="align-middle">定製唯一碼</th>
                      <th scope="col" class="align-middle">料品代號</th>
                      <th scope="col" class="align-middle">料品名稱</th>
                      <th scope="col" class="align-middle">放行數量</th>
                      <th scope="col" class="align-middle">應付金額</th>
                      <th scope="col" class="align-middle">已支付額</th>
                      <th scope="col" class="align-middle">存貨?</th>
                      <th scope="col" class="align-middle">交貨日期</th>
                      <th scope="col" class="align-middle">客戶代碼</th>
                      <th scope="col" class="align-middle">快遞類別</th>
                      <th scope="col" class="align-middle">快遞名稱(物流公司)</th>
                      <th scope="col" class="align-middle">收貨街道</th>
                      <th scope="col" class="align-middle">收貨Mail</th>
                      <th scope="col" class="align-middle">付款狀態</th>
                      <th scope="col" class="align-middle">客戶名稱</th>
                      <th scope="col" class="align-middle">訂單數量</th>
                      <th scope="col" class="align-middle">經手人</th>
                      <th scope="col" class="align-middle">經手ID</th>
                      <th scope="col" class="align-middle">業務部門</th>
                      <th scope="col" class="align-middle">市場</th>
                      <th scope="col" class="align-middle">國別</th>
                      <th scope="col" class="align-middle">PickingID</th>
                      <th scope="col" class="align-middle">PrintDate</th>
                      <th scope="col" class="align-middle">收貨國家</th>
                      <th scope="col" class="align-middle">收貨省</th>
                      <th scope="col" class="align-middle">郵遞區號</th>
                      <th scope="col" class="align-middle">收貨城市</th>
                      <th scope="col" class="align-middle">收貨街道</th>
                      <th scope="col" class="align-middle">收貨電話</th>
                      <th scope="col" class="align-middle">收貨人</th>
                      <th scope="col" class="align-middle">未出貨數</th>
                      <th scope="col" class="align-middle">禁止出貨</th>
                      <th scope="col" class="align-middle">允許分批出貨</th>
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
import { apiLogisticsIndex } from '../api/api'

export default {
  name: 'logistics',
  created () {},
  mounted () {
    // dataTables
    ;(function () {
      var receiveAjaxDataList = []
      var sendAjaxDataList = []
      var index = 0

      //
      var dataTableObj = $('#example').DataTable({
        ajax: apiLogisticsIndex,
        // ajax: '/Demo/TestLogisticsAPI',
        bPaginate: false,
        scrollX: true,
        columns: [
          {},
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
          { data: 'mainData_31' },
          { data: 'mainData_32' },
          { data: 'mainData_33' },
          { data: 'mainData_34' },
          { data: 'mainData_35' }
        ],
        columnDefs: [
          {
            targets: 0,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              var tag = (
                '<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input addList" id="{{checkboxId}}" data-index="{{index}}" {{checked}}>' +
                '  <label class="custom-control-label" for="{{checkboxId}}"></label>' +
                '</div>'
              )
                .replace(/{{checked}}/g, 'checked')
                .replace(/{{index}}/g, index)
                .replace(/{{checkboxId}}/g, 'checkbox' + index)

              return tag
            }
          }
        ],
        language: language
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
          var deleteIndex = receiveAjaxDataList
            .map(function (e) {
              return e.deleteIndex
            })
            .indexOf(index)
          sendAjaxDataList.splice(deleteIndex, 1)
        }
      })
    })()
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';

.dataTables_wrapper.dataTables_wrapper th {
  min-width: 10px;
}
</style>
