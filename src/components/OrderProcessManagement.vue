<template>
  <div class="coantiner-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center mb-4">訂單流程管理</h2>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>訂單詳細資訊
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">...</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="template6">...</label>
                <select id="template6" name="template6" class="form-control" readonly>
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="template5">..</label>
                <textarea name="template5" id="template5" cols="30" rows="3" class="form-control" readonly></textarea>
              </div>
            </div>

          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>...清單
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

      <div class="col-12">
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <div class="form-group row">
                  <div class="form-group col-sm-3">
                    <label for="template1">...</label>
                    <input type="text" class="form-control" id="template1" name="template1" placeholder="" readonly>
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="template6">...</label>
                    <select id="template6" name="template6" class="form-control" readonly>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="template5">..</label>
                    <textarea name="template5" id="template5" cols="30" rows="3" class="form-control" readonly></textarea>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-sm-3">
                    <label for="template1">...</label>
                    <input type="text" class="form-control" id="template1" name="template1" placeholder="">
                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
import {
  language
} from '../config/dataTable'
import {
  apiDataTableCopyTemplateGetAll
} from '../api/api'
export default {
  name: 'orderprocessmanagement',
  created () { },
  mounted () {
    // dataTable
    (function () {
      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
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
            'data': 'id',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<button type="button" class="btn btn-primary details-control">展開明細</button>')
            }
          },
          {
            'targets': -1,
            'data': 'id',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<div class="btn-group">' +
                '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</button>' +
                '<div class="dropdown-menu">' +
                '  <a class="dropdown-item" href="//?={{id}}" data-toggle="modal" data-target="#exampleModalCenter">asdfa</a>' +
                '  <a class="dropdown-item" href="//?={{id}}">編輯</a>' +
                '  <a class="dropdown-item" href="//?={{id}}">刪除</a>' +
                '</div>' +
                '</div>'
              ).replace('{{id}}', '')
            }
          }
        ],
        'language': language
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

      // 沖帳明細
      function childRows (d) {
        d = d || []

        var trTemplate = ''
        if (d.length) {
          d.map(function (data) {
            trTemplate += (
              '<tr>' +
              '  <td>{{subData_1}}</td>' +
              '  <td>{{subData_2}}</td>' +
              '  <td>{{subData_3}}</td>' +
              '</tr>'
            ).replace('{{subData_1}}', '')
              .replace('{{subData_2}}', '')
              .replace('{{subData_3}}', '')
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
    }());
    //
    (function () {

    }());
    //
    (function () {

    }())
  }
}
</script>
<style lang="css" >
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
</style>