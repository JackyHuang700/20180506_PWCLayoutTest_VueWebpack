<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12">
        <div class="accordion" id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              帳號資訊
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
                        <label class="float-left" for="inputText">編號</label>
                        <input type="text" class="form-control" id="inputText" placeholder="" readonly>
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText2">編號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="" readonly>
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText3">到期日(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="" readonly>
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText4">到期日(迄)</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="" readonly>
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

            <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">#</th>
                  <th scope="col" class="align-middle">代碼</th>
                  <th scope="col" class="align-middle">稅籍ID</th>
                  <th scope="col" class="align-middle">聯絡人</th>
                  <th scope="col" class="align-middle">操作</th>
                </tr>
              </thead>
            </table>

          </div>
          <div class="card-footer"></div>
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
  apiDataTableCopyTemplateGetAll
} from '../api/api'

export default {
  name: 'copytemplate',
  created () { },
  mounted () {
    // dataTables
    (function () {
      //
      var dataTableObj = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
        'scrollX': true,
        'bPaginate': false,
        'columns': [
          {},
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          {}
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
              var dom = (
                '<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input" id="customCheckDisabled">' +
                '  <label class="custom-control-label" for="customCheckDisabled"></label>' +
                '</div>')

              return (dom)
            }
          },
          {
            'targets': -1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<div class="btn-group">' +
                '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</button>' +
                '<div class="dropdown-menu">' +
                '  <a class="dropdown-item" href="//?={{id}}">編輯</a>' +
                '  <a class="dropdown-item" href="//?={{id}}">刪除</a>' +
                '</div>' +
                '</div>'
              ).replace(/{{id}}/g, '')
            }
          }
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';



</style>
