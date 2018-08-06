<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 text-red">
        <h1>複製過去要刪除 - 入庫作業</h1>
      </div>

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
                        <label class="float-left" for="inputText2">供應商名稱/編號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText7">Barcode2</label>
                        <input type="text" class="form-control" id="inputText7" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText5">訂製唯一碼</label>
                        <input type="text" class="form-control" id="inputText5" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText5">收貨編號</label>
                        <input type="text" class="form-control" id="inputText6" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText">狀態</label>
                        <select id="inputText" name="inputText" class="form-control">
                          <option selected>待入庫</option>
                          <option>已入庫</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">收貨日期(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">收貨日期(迄)</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="" />
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
              <div class="col-12 saveBtnGroup text-right mb-4">
                <button type="button" class="btn btn-success saveBtn col-2">儲存</button>
              </div>
              <div class="col-12">
                <div class="form-group row">
                  <div class="form-group col-sm-3">
                    <label class="float-left" for="inputText8">選擇列印內容選項</label>
                    <select id="inputText8" name="inputText8" class="form-control">
                      <option selected>條碼標籤</option>
                      <option>外包裝標註說明</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-3">
                    <label class="float-left" for="inputText9">填寫寫入庫儲位</label>
                    <input type="text" class="form-control" id="inputText9" placeholder="" />
                  </div>

                </div>
              </div>
              <div class="col-12">
                <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle checkBoxColumn">#</th>
                      <th scope="col" class="align-middle">訂製唯一碼</th>
                      <th scope="col" class="align-middle">廠商名稱</th>
                      <th scope="col" class="align-middle">項目號碼</th>
                      <th scope="col" class="align-middle">業務名稱</th>
                      <th scope="col" class="align-middle">義務代碼</th>
                      <th scope="col" class="align-middle">暫收總數量</th>
                      <th scope="col" class="align-middle">倉庫別</th>
                      <th scope="col" class="align-middle">儲位</th>
                      <th scope="col" class="align-middle">暫收次數</th>
                      <th scope="col" class="align-middle">合格數量</th>
                      <th scope="col" class="align-middle">新增合格數量</th>
                      <th scope="col" class="align-middle">入庫日期時間</th>
                      <th scope="col" class="align-middle">入庫人員</th>
                      <th scope="col" class="align-middle">來源單號</th>
                      <th scope="col" class="align-middle">採購列號</th>
                      <th scope="col" class="align-middle">收穫編號</th>
                      <th scope="col" class="align-middle">入庫狀態</th>

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
import { apiQualityControl3Index } from '../api/api'

export default {
  name: 'qualitycontrol3',
  created () {},
  mounted () {
    // dataTables
    (function () {
      //
      var dataTableObj = $('#example').DataTable({
        select: {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        ajax: apiQualityControl3Index,
        scrollX: true,
        bPaginate: false,
        // drawCallback: function (settings) {
        //           registerPickday()
        //       },
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
          { data: 'mainData_17' }
        ],
        order: [[1, 'asc']],
        columnDefs: [
          {
            targets: 0,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return (
                '<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input" id="{{id}}" {{checked}}>' +
                '  <label class="custom-control-label" for="{{id}}"></label>' +
                '</div>'
              )
                .replace(/{{id}}/g, 'checkgoxid' + row.id)
                .replace(/{{checked}}/g, 'checked')
            }
          },
          {
            targets: 12,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return '<input type="text" class="form-control" name="" id="" placeholder="" value={{value}} />'.replace(
                '{{value}}',
                row.mainData_12
              )
            }
          }
        ],
        language: language
        // 'language': dataTablesModule.language()
      })

      //
      //  function registerPickday() {
      //           window.shareConfig = {
      //               field: '',
      //               firstDay: 1,
      //               minDate: pikadayModule.minDate(),
      //               maxDate: pikadayModule.maxDate(),
      //               yearRange: pikadayModule.yearRange(),
      //               format: pikadayModule.formatToYYYYMMDD_Baseline(),
      //               showDaysInNextAndPreviousMonths: true,
      //               enableSelectionDaysInNextAndPreviousMonths: true,
      //               showWeekNumber: true,
      //               i18n: pikadayModule.i18n(),
      //           }

      //           var pikadayDomList = document.getElementsByClassName('pikaday')
      //           for (var i = 0; i < pikadayDomList.length; ++i) {

      //               var newConfig = JSON.parse(JSON.stringify(window.shareConfig))
      //               newConfig.field = pikadayDomList[i]
      //               new Pikaday(newConfig)
      //           }
      //       }
    })()
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';
</style>
