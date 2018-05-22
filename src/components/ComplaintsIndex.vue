<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">

        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            功能區
          </div>
          <div class="card-body">
            <a href="//" class="btn btn-primary">建立客訴單</a>
          </div>
        </div>
        <div class="accordion" id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              查詢條件:
              <b id="searchState">英文組</b>
              <button class="btn btn-primary float-right" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">

                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label for="input1">...</label>
                    <div class="input-group">
                      <input type="text" class="form-control col-sm-6 mr-3" id="input1" placeholder="">
                      <input type="text" class="form-control col-sm-6" id="input11" placeholder="">
                    </div>
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input2">...</label>
                    <input type="text" class="form-control" id="input2" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input3">...</label>
                    <input type="text" class="form-control" id="input3" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input4">...</label>
                    <input type="text" class="form-control" id="input4" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input5">...</label>
                    <input type="text" class="form-control" id="input5" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input6">...</label>
                    <input type="text" class="form-control" id="input6" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input7">...</label>
                    <input type="text" class="form-control" id="input7" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input8">...</label>
                    <input type="text" class="form-control" id="input8" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input9">...</label>
                    <input type="text" class="form-control" id="input9" placeholder="">
                  </div>
                  <div class="form-group col-md-3">
                    <label for="input10">...</label>
                    <input type="text" class="form-control" id="input10" placeholder="">
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
            客訴清單列表
          </div>
          <div class="card-body">
            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col">發布於</th>
                  <th scope="col">客訴編號</th>
                  <th scope="col">關聯訂單</th>
                  <th scope="col">持有人</th>
                  <th scope="col">客訴目標</th>
                  <th scope="col">客訴原因</th>
                  <th scope="col">客訴說明</th>
                  <th scope="col">操作</th>
                  <th scope="col">操作</th>
                </tr>
              </thead>
            </table>
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
  apiDataTableComplaintsGetAll
} from '../api/api'
export default {
  name: 'complaintsIndex',
  created () { },
  mounted () {
    $(document).ready(function () {
      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableComplaintsGetAll,
        'columns': [
          { 'data': 'a' },
          { 'data': 'b' },
          { 'data': 'c' },
          { 'data': 'd' },
          { 'data': 'e' },
          { 'data': 'f' },
          { 'data': 'g' },
          { 'data': 'h' },
          {}
        ],
        'order': [[0, 'asc']],
        'columnDefs': [
          {
            'targets': 1,
            'data': 'b',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<a href="//" target="_blank">' + row.b + '</a>')
            }
          },
          {
            'targets': 2,
            'data': 'c',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<a href="//" target="_blank">' + row.c + '</a>')
            }
          },
          {
            'targets': -1,
            'data': 'a',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<div class="btn-group">' +
                '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                '操作' +
                '</button>' +
                '<div class="dropdown-menu">' +
                '  <a class="dropdown-item" href="//?=' + row.id + '">編輯客訴單</a>' +
                '  <a class="dropdown-item" href="//?=' + row.id + '">編輯關聯訂單</a>' +
                '</div>' +
                '</div>')
            }
          }
        ],
        'language': language
      })
    })
  },
  methods: {}
}
</script>
<style lang="css" >
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
</style>