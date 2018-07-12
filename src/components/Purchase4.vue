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
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText">編號</label>
                        <input type="text" class="form-control" id="inputText" placeholder="">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText2">編號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText3">到期日(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="">
                      </div>
                      <div class="form-group col-md-3">
                        <label class="float-left" for="inputText4">到期日(迄)</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="">
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

            <div class="container-fluid">
              <div class="row">
                <div class="col-12 mt-1">

                  <div class="form-group row">
                    <label for="" class="col-sm-1 col-form-label text-center">操作</label>
                    <div class="col-sm-10">
                      <button type="button" class="btn btn-primary mr-2" id="button111" data-toggle="modal" data-target="#exampleModal">更新報價</button>
                      <button type="button" class="btn btn-primary" id="button1112" data-toggle="modal" data-target="#exampleModal2">出價</button>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <hr>
                </div>
                <div class="col-12 mt-1">
                  <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th scope="col" class="align-middle">選取</th>
                        <th scope="col" class="align-middle">採購編號</th>
                        <th scope="col" class="align-middle">訂製單編號</th>
                        <th scope="col" class="align-middle">聯絡人</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">更新報價</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <label for="exampleModal_Price" class="col-sm-2 col-form-label">價格</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="exampleModal_Price" placeholder="請輸入">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success col-2" id="updateInexampleModal">更新</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel2">更新出價</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group row">
                  <label for="exampleModal2_Name" class="col-sm-2 col-form-label">物流名稱</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="exampleModal2_Name" placeholder="請輸入">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="exampleModal2_Code" class="col-sm-2 col-form-label">物流代號</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="exampleModal2_Code" placeholder="請輸入">
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success col-2" id="updateInexampleModal2">更新</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
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
import '../assets/dataTables/dataTables.js'

export default {
  name: 'copytemplate',
  created () { },
  mounted () {
    // dataTables
    (function () {
      var dataTableDom = document.getElementById('example')
      var dataTableObj
      var selectIdList = []
      //
      dataTableObj = $(dataTableDom).DataTable({
        'ajax': apiDataTableCopyTemplateGetAll,
        'scrollX': true,
        'bPaginate': false,
        'columns': [
          {},
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' }
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
              return (
                '<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input selectInfo" id="customCheck1" data-id={{id}}>' +
                '  <label class="custom-control-label" for="customCheck1"></label>' +
                '</div>').replace(/{{id}}/g, 10)
            }
          }
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })

      $(document).on('click', '.selectInfo', function (e) {
        var self = e.target
        var dataId = self.getAttribute('data-id')

        if (self.checked) {
          selectIdList.push(dataId)
        } else {
          var index = selectIdList.indexOf(dataId)
          if (index !== -1) {
            selectIdList.splice(index, 1)
          }
        }
      })
    }());
    // Modal - updateInexampleModal
    (function () {
      var updateInexampleModalDom = document.getElementById('updateInexampleModal')
      var exampleModal_PriceDom = document.getElementById('exampleModal_Price')

      $(updateInexampleModalDom).on('click', function (e) {
        if (confirm('確認完畢?')) {

        }
      })
    }());
    // Modal - updateInexampleModal2
    (function () {
      var updateInexampleModal2Dom = document.getElementById('updateInexampleModal2')
      var exampleModal2_NameDom = document.getElementById('exampleModal2_Name')
      var exampleModal2_CodeDom = document.getElementById('exampleModal2_Code')

      $(updateInexampleModal2Dom).on('click', function (e) {
        if (confirm('確認完畢?')) {

        }
      })
    }());
    // test
    (function () {
      // document.getElementById('button1112').click()
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';
</style>
