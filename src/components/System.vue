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
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText">編號</label>
                        <input type="text" class="form-control" id="inputText" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText2">編號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">到期日(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText4">到期日(迄)</label>
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

            <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered w-100">
              <thead>
                <tr>
                  <th scope="col">執行名稱</th>
                  <th scope="col">執行控制器</th>
                  <th scope="col">執行動作</th>
                  <th scope="col">備註</th>
                  <th scope="col">啟用</th>
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
import { language } from '../config/dataTable'
import { apiSystemIndex } from '../api/api'

export default {
  name: 'system',
  created () {},
  mounted () {
    // dataTables
    ;(function () {
      var table = $('#example').DataTable({
        scrollX: true,
        scrollY: '500px',
        select: {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        ajax: apiSystemIndex,
        // 'ajax': '/SystemBehavior/GetAll',
        columns: [
          { data: 'behaviorName' },
          { data: 'controllerName' },
          { data: 'actionName' },
          { data: 'note' },
          { data: 'isEnabled' },
          {}
        ],
        order: [[0, 'asc'], [1, 'asc'], [2, 'asc'], [3, 'asc'], [4, 'asc']],
        columnDefs: [
          {
            targets: 4,
            data: 'isEnabled',
            orderable: false,
            render: function (data, type, row, meta) {
              return row.isEnabled
                ? '<strong class="text-success">是</strong>'
                : '<strong class="text-red">否</strong>'
            }
          },
          {
            targets: -1,
            data: 'id',
            orderable: false,
            render: function (data, type, row, meta) {
              return (
                '<div class="btn-group">' +
                '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                '操作' +
                '</button>' +
                '<div class="dropdown-menu">' +
                '  <a class="dropdown-item" href="/SystemBehavior/Update?BehaviorKey=' +
                row.id +
                '">編輯</a>' +
                '  <a class="dropdown-item delete" data-id="' +
                row.id +
                '" href="#">刪除</a>' +
                '</div>' +
                '</div>'
              )
            }
          }
        ],
        language: language
        // 'language': dataTablesModule.language()
      })
    })()
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';
</style>
