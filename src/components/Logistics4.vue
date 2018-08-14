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
                  <Logistics42 />
                  <Logistics41 />
                </div>
                <div class="col-sm-12 mb-2 text-right">
                  <button type="button" class="btn btn-primary col-2">查詢</button>
                  <button type="button" class="btn btn-danger">重置</button>
                  <button type="button" class="btn btn-success">匯出資料</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="accordion" id="accordion2">
          <div class="card">
            <div class="card-header" id="headingOne">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              匯入
              <button class="btn btn-primary float-right" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div id="collapseTwo" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion2">
              <div class="card-body">
                <!-- 物流資料匯入 - 沒有確定按鈕-->
                <div class="row">
                  <div class="col-sm-12 mb-2">
                    <div class="form-row">
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="">指定資料檔</label>
                        <div class="custom-file">
                          <label class="custom-file-label" for="inputText">請選擇...</label>
                          <input type="file" class="custom-file-input" id="inputText" name="inputText" />
                        </div>
                      </div>
                      <div class="form-group col-sm-3 btnAlignMiddle">
                        <button type="button" class="btn btn-primary">匯入資料</button>
                      </div>
                    </div>
                  </div>
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
            <form action="">
              <div class="row">
                <div class="col-12 text-right mb-4">
                  <button type="submit" class="btn btn-success col-2">儲存</button>
                </div>
                <div class="col-12">
                  <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" class="align-middle">#</th>
                        <th scope="col" class="align-middle">主訂單號</th>
                        <th scope="col" class="align-middle selectColumn">簽單號碼</th>
                        <th scope="col" class="align-middle selectColumn">快遞類別</th>
                        <th scope="col" class="align-middle selectColumn">重量</th>
                        <th scope="col" class="align-middle">快遞名稱</th>
                        <th scope="col" class="align-middle">客戶代碼</th>
                        <th scope="col" class="align-middle">客戶名稱</th>
                        <th scope="col" class="align-middle">業務代碼</th>
                        <th scope="col" class="align-middle">業務姓名</th>
                        <th scope="col" class="align-middle">收貨地址</th>
                        <th scope="col" class="align-middle">收貨郵編</th>
                        <th scope="col" class="align-middle">收貨省</th>
                        <th scope="col" class="align-middle">收貨市</th>
                        <th scope="col" class="align-middle">收貨街道</th>
                        <th scope="col" class="align-middle">收貨國家</th>
                        <th scope="col" class="align-middle">收貨電話</th>
                        <th scope="col" class="align-middle">收貨人</th>
                        <th scope="col" class="align-middle">收貨人電郵</th>
                      </tr>
                    </thead>
                  </table>

                </div>
              </div>
            </form>

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
import { apiLogistics4Index } from '../api/api'
import Logistics41 from '../components_sub/Logistics41.vue'
import Logistics42 from '../components_sub/Logistics42.vue'

export default {
  name: 'logistics4',
  created () {},
  mounted () {
    // dataTables
    ;(function () {
      //
      var dataTableObj = $('#example').DataTable({
        ajax: apiLogistics4Index,
        // ajax: '/Demo/TestLogisticsAPI4',
        scrollX: true,
        bPaginate: false,
        columns: [
          {},
          { data: 'mainData_1' },
          {},
          {},
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
          { data: 'mainData_16' }
        ],
        columnDefs: [
          {
            targets: 0,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return (
                '<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input" id="{{id}}" data-id="{{dataId}}" {{checked}}>' +
                '  <label class="custom-control-label" for="{{id}}"></label>' +
                '</div>'
              )
                .replace(/{{id}}/g, 'checkgoxid' + row.id)
                .replace(/{{dataId}}/g, row.id)
                .replace(/{{checked}}/g, 'checked')
            }
          },
          {
            targets: 2,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return '<input type="text" class="form-control" value="{{value}} " />'.replace(
                '{{value}}',
                ''
              )
            }
          },
          {
            targets: 3,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              // 注意: 此欄位有可能為readonly

              var dataArray = [
                'DHL',
                'DHL(德遊小包)',
                '本地單號',
                '國際EUB',
                '國內快遞',
                '郵政',
                '專線'
              ]
              var optionList = ''
              var min = 0
              var max = 6

              // set option
              for (var i = min; i <= max; i++) {
                optionList += '<option value={{value}} selected="{{selected}}">{{text}}</option>'
                  .replace('{{value}}', dataArray[i])
                  .replace('{{text}}', dataArray[i])
                  .replace('{{selected}}', false)
              }

              return (
                "<select class='form-control' {{readonly}}>" +
                optionList +
                '</select>'
              ).replace('{{readonly}}', '')
            }
          },
          {
            targets: 4,
            data: '',
            orderable: false,
            render: function (data, type, row, meta) {
              return '<input type="text" class="form-control" value="{{value}} " />'.replace(
                '{{value}}',
                ''
              )
            }
          }
        ],
        language: language
        // 'language': dataTablesModule.language()
      })
    })()
  },
  components: {
    Logistics41,
    Logistics42
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';
</style>
