<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 text-red">
        <h1>複製過去要刪除 - 質檢作業</h1>
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
                        <select id="inputText" name="inputText" class="form-control">
                          <option selected>外發採購單(成品)</option>
                          <option>生產工單(自製成品)</option>
                          <option>現貨質檢(存貨發貨單)</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText">狀態</label>
                        <select id="inputText" name="inputText" class="form-control">
                          <option selected>待質檢</option>
                          <option>已質檢</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText2">供應商名稱/編號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText5">訂製唯一碼(起)</label>
                        <input type="text" class="form-control" id="inputText5" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText5">訂製唯一碼(迄)</label>
                        <input type="text" class="form-control" id="inputText6" placeholder="" />
                      </div>

                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">收貨日期(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">收貨日期(迄)</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText7">Barcode2</label>
                        <input type="text" class="form-control" id="inputText7" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText9">填寫寫入庫儲位</label>
                        <input type="text" class="form-control" id="inputText9" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText8">選擇列印內容選項</label>
                        <select id="inputText8" name="inputText8" class="form-control">
                          <option selected>條碼標籤</option>
                          <option>外包裝標註說明</option>
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
              <div class="col-12 saveBtnGroup text-right mb-4">
                <button type="button" class="btn btn-success saveBtn col-2">儲存</button>
              </div>
              <div class="col-12">
                <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle checkBoxColumn">#</th>
                      <th scope="col" class="align-middle badReason">不良原因</th>
                      <th scope="col" class="align-middle">訂製唯一碼</th>
                      <th scope="col" class="align-middle">BARCODE2</th>
                      <th scope="col" class="align-middle">廠商名稱</th>
                      <th scope="col" class="align-middle">項目號碼</th>
                      <th scope="col" class="align-middle">暫收總數量</th>
                      <th scope="col" class="align-middle">暫收數量</th>
                      <th scope="col" class="align-middle">取消質檢</th>
                      <th scope="col" class="align-middle">暫收次數</th>
                      <th scope="col" class="align-middle">合格數量</th>
                      <th scope="col" class="align-middle">新增合格數量</th>
                      <th scope="col" class="align-middle">單元重量</th>
                      <th scope="col" class="align-middle">不合格數量</th>
                      <th scope="col" class="align-middle">不量原因</th>
                      <th scope="col" class="align-middle">質檢備註</th>
                      <th scope="col" class="align-middle">質檢日期時間</th>
                      <th scope="col" class="align-middle">質檢人員</th>
                      <th scope="col" class="align-middle">來源單號</th>
                      <th scope="col" class="align-middle">採購列號</th>
                      <th scope="col" class="align-middle">入庫狀態</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="col-12">
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">不良原因</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <QualityControl21 />

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary col-1" data-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-success col-2" id="updateBtn">儲存</button>
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
  apiQualityControl2Index
} from '../api/api'

import QualityControl21 from '../components_sub/QualityControl21.vue'

export default {
  components: {
    QualityControl21
  },

  name: 'qualitycontrol2',
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
        'ajax': apiQualityControl2Index,
        //  'ajax': '/Demo/TestQualityControl2API',
        'scrollX': true,
        'bPaginate': false,
        'columns': [
          {},
          {},
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_4' },
          { 'data': 'mainData_5' },
          { 'data': 'mainData_6' },
          { 'data': 'mainData_7' },
          { 'data': 'mainData_8' },
          { 'data': 'mainData_9' },
          { 'data': 'mainData_10' },
          { 'data': 'mainData_11' },
          { 'data': 'mainData_12' },
          { 'data': 'mainData_13' },
          { 'data': 'mainData_14' },
          { 'data': 'mainData_15' },
          { 'data': 'mainData_16' },
          { 'data': 'mainData_17' },
          { 'data': 'mainData_18' },
          { 'data': 'mainData_19' },
        ],
        'drawCallback': function (settings) {
          clickDetailscontrol()
        },
        'order': [
          [1, 'asc']
        ],
        'columnDefs': [
          {
            'targets': 0,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input" id="{{id}}" data-id="{{dataId}}" {{checked}}>' +
                '  <label class="custom-control-label" for="{{id}}"></label>' +
                '</div>'
              ).replace(/{{id}}/g, 'checkgoxid' + row.id)
                .replace(/{{dataId}}/g, row.id)
                .replace(/{{checked}}/g, 'checked')
            }
          },
          {
            'targets': 1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<button type="button" class="btn btn-primary openModal" data-toggle="modal">勾選</button>' +
                '<button type="button" class="details-control d-none"></button>')
            }
          },
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })

      // 使用者當前操作哪個數據
      var selectTrIndex = -1
      $(document).on('click', '#example tbody tr', function (e) {
        var index = dataTableObj.row(this).index()
        selectTrIndex = index
      })

      //
      $(document).on('click', '.openModal', function (e) {
        var self = e.target
        self.parentElement.parentElement.click()
        // update model checkbox status
        var badReasonListDom = document.getElementById('badReasonList')
        var template = badReasonListDom.querySelector('.row').cloneNode(true)
        var rowData = dataTableObj.row(selectTrIndex).data()

        for (var key in rowData.badReasonList) {
          var inputDom = template.querySelector('#' + key)
          inputDom.checked = rowData.badReasonList[key]
          template.querySelector('#' + key).replaceWith(inputDom)
        }

        badReasonListDom.querySelector('.row').replaceWith(template)
        $('#exampleModal').modal('show')
      })

      // 按下儲存鈕
      $(document).on('click', '#updateBtn', function (e) {
        var self = e.target
        var nowSelectTrIndex = selectTrIndex
        var rowData = dataTableObj.row(nowSelectTrIndex).data()
        var badReasonListDom = document.getElementById('badReasonList')
        var checkboxList = badReasonListDom.querySelectorAll('input[type=checkbox]')

        for (var i = 0; i < checkboxList.length; ++i) {
          console.log('checkboxList.length', checkboxList.length)
          var checkboxDom = checkboxList[i]
          var id = checkboxDom.id
          for (var key in rowData.badReasonList) {
            if (key === id) {
              console.log(key)
              console.log(rowData.badReasonList[key])
              console.log(checkboxDom.checked)
              console.log('rowData.badReasonList[key]', rowData.badReasonList[key])
              rowData.badReasonList[key] = checkboxDom.checked
            }
          }
        }

        console.log(rowData.badReasonList)
        if (rowData) {
          dataTableObj.row(nowSelectTrIndex).data(rowData).draw()
          clickDetailscontrol()
          // console.log(dataTableObj.row(nowSelectTrIndex).data())
        }

        $('#exampleModal').modal('hide')
      })

      // 明細
      $('#example tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr')
        var row = dataTableObj.row(tr)

        if (row.child.isShown()) {
          row.child.hide()
          tr.removeClass('shown')
        } else {
          row.child(childRows(row.data().badReasonList)).show()
          $(row.child()).addClass('notHover')
          tr.addClass('shown')
        }
      })

      //
      function childRows (d) {
        var templateStr = document.getElementById('badReasonList').children[0].cloneNode(true)

        for (var key in d) {
          // $(templateStr).find('#' + key)[0].checked = d[key]
          var inputDom = templateStr.querySelector('#' + key)
          var labelDom = inputDom.nextElementSibling
          // inputDom[0].checked = d[key]
          inputDom.checked = d[key]
          inputDom.disabled = true
          inputDom.id = ''
          // debugger
          labelDom.htmlFor = ''
          // inputDom = inputDom.prop('checked', d[key])
          // templateStr.querySelector('#' + key).replaceWith(inputDom)
        }

        return templateStr
      }

      // 顯示詳細項目
      function clickDetailscontrol () {
        var domList = document.getElementsByClassName('details-control')
        for (var i = 0; i < domList.length; ++i) {
          var dom = domList[i]
          dom.click()
        }
      }
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';

/* modal  另外添加*/
.dataTable {
  width: 100% !important;
}
.dataTables_scrollHeadInner {
  width: unset !important;
}

.modal-lg {
  max-width: 85%;
}

.notHover.notHover.notHover {
  background-color: unset;
}
@media screen and (max-width: 750px) {
  .modal-lg {
    max-width: 100%;
  }

  .dataTables_wrapper {
    width: 100%;
  }
}

.resetAlert {
  border-color: #d2eef7;
}

.dataTables_wrapper.dataTables_wrapper .badReason {
  min-width: 60px;
}
</style>
