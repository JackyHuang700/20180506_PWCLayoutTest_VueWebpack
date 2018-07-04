<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
            操作
          </div>
          <div class="card-body">
            <a class="btn btn-primary" href="//">建立</a>
          </div>
        </div>
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
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText">Email</label>
                        <input type="text" class="form-control" id="inputText" placeholder="Email">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText2">Password</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="Password">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText3">Password</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="Password">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText4">Password</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="Password">
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

            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
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
      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
        'scrollX': true,
        // 'bPaginate': false,
        // 'searching': false,
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
              return ('<button type="button" class="btn btn-primary details-control">展開明細</button>')
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

      // 明細
      $('#example tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr')
        var row = table.row(tr)

        if (row.child.isShown()) {
          row.child.hide()
          tr.removeClass('shown')
        } else {
          row.child(childRows(row.data().detail)).show()
          tr.addClass('shown')
        }
      })

      // 明細
      function childRows (d) {
        d = d || []

        var trTemplate = ''
        if (d.length) {
          d.map(function (data, index) {
            trTemplate += (
              '<tr>' +
              '  <td>{{subData_1}}</td>' +
              '  <td>{{subData_2}}</td>' +
              '  <td>{{subData_3}}</td>' +
              '</tr>'
            ).replace(/{{subData_1}}/g, '')
              .replace(/{{subData_2}}/g, '')
              .replace(/{{subData_3}}/g, '')
          })
        }

        return (
          '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="table table-striped">' +
          '  <tr>' +
          '    <td scope="col">....</td>' +
          '    <td scope="col">....</td>' +
          '    <td scope="col">....</td>' +
          '  </tr>' + trTemplate +
          '</table>')
      }
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';


div.dataTables_wrapper {
  margin: 0 auto;
}

/* 另外添加 */
/* #example_wrapper {
  overflow-x: auto;
} */

#example th {
  min-width: 130px;
}

@media (min-width: 1201px) {
  div.dataTables_wrapper {
    width: 77vw;
  }
}

@media screen and (max-width: 1200px) {
  div.dataTables_wrapper {
    width: 72vw;
  }
}
@media screen and (max-width: 1023px) {
  div.dataTables_wrapper {
    width: 70vw;
  }
}
</style>
