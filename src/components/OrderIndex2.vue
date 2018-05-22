<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-4">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              快速鍵
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0 float-left">
                <button type="button" class="fastKey btn btn-primary">持有訂單</button>
                <button type="button" class="fastKey btn btn-primary">已審訂單</button>
                <button type="button" class="fastKey btn btn-primary">所有訂單</button>
                <button type="button" class="btn btn-warning advanSearch">英語組</button>
                <button type="button" class="btn btn-warning advanSearch">日文組</button>
              </blockquote>
            </div>
          </div>
        </div>

        <div class="col-12">
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
                    <div class="col-sm-12 mb-2">
                      <div class="form-row">
                        <div class="form-group col-md-3">
                          <label class="float-left" for="inputText5">Email</label>
                          <input type="text" class="form-control" id="inputText5" placeholder="Email">
                        </div>
                        <div class="form-group col-md-3">
                          <label class="float-left" for="inputText6">Password</label>
                          <input type="text" class="form-control" id="inputText6" placeholder="Password">
                        </div>
                        <div class="form-group col-md-3">
                          <label class="float-left" for="inputState">State</label>
                          <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div class="form-group col-md-3">
                          <label class="float-left" for="inputText8">Password</label>
                          <input type="text" class="form-control" id="inputText8" placeholder="Password">
                        </div>
                      </div>
                    </div>
                    <label for="searchInput" class="col-sm-1 col-form-label pr-0 text-left">專案編號:</label>
                    <div class="col-sm-11">
                      <input type="text" class="form-control" id="searchInput" placeholder="searchInput">
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
              清單
            </div>
            <div class="card-body">
              <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
                <thead>
                  <tr>
                    <th scope="col">明細</th>
                    <th scope="col">銷售單號</th>
                    <th scope="col">...</th>
                    <th scope="col">...</th>
                    <th scope="col">操作</th>
                  </tr>
                </thead>
              </table>
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
  apiDataTableDataTableGetAll
} from '../api/api'
export default {
  name: 'orderindex2',
  data () {
    return {}
  },
  created () { },
  mounted () {
    function childRows (d) {
      console.log(d)
      d = d || []

      var trTemplate = ''
      if (d.length) {
        d.map(function (data) {
          trTemplate +=
            '  <tr>' +
            '      <td>' + data.a + '</td>' +
            '      <td>' + data.b + '</td>' +
            '      <td>' +
            '         <img class="" src=" + data.c + " alt="">' +
            '      </td>' +
            '      <td>...</td>' +
            '      <td>...</td>' +
            '      <td>...</td>' +
            '      <td>...</td>' +
            '      <td>...</td>' +
            '      <td>...</td>' +
            '      <td>...</td>' +
            '      <td>' +
            '         <button type="button" class="btn btn-primary">瀏覽</button>' +
            '      </td>' +
            ' </tr>'
        })
      }

      return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="table table-striped">' +
        '    <tr>' +
        '        <td scope="col">明細編號</td>' +
        '        <td scope="col">產品名稱</td>' +
        '        <td scope="col">正面圖</td>' +
        '        <td scope="col">產品號</td>' +
        '        <td scope="col">產品顏色</td>' +
        '        <td scope="col">產品尺寸</td>' +
        '        <td scope="col">小計</td>' +
        '        <td scope="col">稅金額</td>' +
        '        <td scope="col">折扣金額</td>' +
        '        <td scope="col">明細總計</td>' +
        '        <td scope="col">交貨日期</td>' +
        '        <td scope="col">&nbsp;</td>' +
        '    </tr>' +
        trTemplate +
        '    </table>'
    }

    $(document).ready(function () {
      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableDataTableGetAll,
        'columns': [
          // {
          //   'className': 'details-control',
          //   'orderable': false,
          //   'data': '',
          //   'defaultContent': '&nbsp;'
          // },
          {},
          { 'data': 'name' },
          { 'data': 'position' },
          { 'data': 'office' },
          { 'data': 'salary' }
        ],
        'order': [[1, 'asc']],
        'columnDefs': [
          {
            'targets': 0,
            'data': null,
            'orderable': false,
            'defaultContent': '<button type="button" class="btn btn-primary details-control">明細</button>'
          }
        ],
        'language': language
      })

      // Add event listener for opening and closing details
      $('#example tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr')
        var row = table.row(tr)

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide()
          tr.removeClass('shown')
        } else {
          // Open this row
          row.child(childRows(row.data().subOrder)).show()
          tr.addClass('shown')
        }
      })
    })
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
.pagination-centered {
  justify-content: center;
}

.pagination-centered > ul {
  list-style: none;
  display: -webkit-box;
  display: flex;
}

.footable-visible {
  border: 0px solid transparent;
}

/*.table-bordered td:last-child,*/

.table-bordered {
  border: 0px solid transparent;
}

td.details-control {
  background: url('http://fakeimg.pl/50x50/') no-repeat center center;
  cursor: pointer;
}

tr.shown td.details-control {
  background: url('http://fakeimg.pl/50x50/') no-repeat center center;
}

.table td {
  vertical-align: middle;
}

#example_wrapper {
  padding: 0;
}

/* input */

/* input */

/* pagination */
.page-link,
.pagination li a,
.pagination-datatables li a {
  border: 1px solid #dee2e6;
}

.page-item.disabled .page-link,
.pagination li.disabled .page-link,
.pagination li.disabled a {
  border-color: #dee2e6;
}

/* div.dataTables_wrapper div.dataTables_paginate ul.pagination {
  justify-content: flex-start;
} */
/* pagination */
</style>