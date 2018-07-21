<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>建立
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">銷售訂單</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="1805300059" readonly />
              </div>

              <div class="form-group col-sm-3">
                <label for="template1">產品號碼</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="CW000024-COCO0070#-UK10" readonly />
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">產品說明</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="Wedding Dress" readonly />
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">計畫數量</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="1" />
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">倉庫</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="SZCP" />
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">號碼</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="6876" readonly />
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">訂單日期</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="2018-05-31" readonly />
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">開始日期</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="2018-05-31" />
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">到期日</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="2018-06-29" />
              </div>
              <div class="form-group col-sm-3">
                <label for="template6">使用者</label>
                <select id="template6" name="template6" class="form-control">
                  <option selected>Cindy</option>
                  <option>Keven</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">來源</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="銷售訂單" readonly />
              </div>
              <div class="form-group col-sm-3">
                <label for="template6">狀態</label>
                <select id="template6" name="template6" class="form-control">
                  <option selected>已核發</option>
                </select>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>原物料管理
          </div>
          <div class="card-body">

            <div class="form-row">

              <div class="form-group col-sm-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">加入</button>
              </div>
              <div class="form-group col-sm-12 BomTable">
                <hr class="mb-3" />
                <div class="col-12">
                  <table id="bonTable" class="display" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th scope="col" class="text-center">號碼</th>
                        <th class="text-center">說明</th>
                        <th class="text-center">基礎數量</th>
                        <th class="text-center">計畫數量</th>
                        <th class="text-center">計量單位名稱</th>
                        <th class="text-center">倉庫</th>
                        <th class="text-center">在倉庫中的數量</th>
                        <th class="text-center">發貨方法</th>
                        <th class="text-center">操作</th>
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
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>工序管理
          </div>
          <div class="card-body">

            <div class="form-row">

              <div class="form-group col-sm-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">加入</button>
              </div>
              <div class="form-group col-sm-12 BomTable">
                <hr class="mb-3">
                <div class="col-12">
                  <table id="bonTable2" class="display" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th scope="col" class="text-center">號碼</th>
                        <th class="text-center">說明</th>
                        <th class="text-center">基礎數量</th>
                        <th class="text-center">計畫數量</th>
                        <th class="text-center">計量單位名稱</th>
                        <th class="text-center">倉庫</th>
                        <th class="text-center">在倉庫中的數量</th>
                        <th class="text-center">發貨方法</th>
                        <th class="text-center">操作</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="col-12 text-right mb-4">
        <button type="submit" class="btn btn-success col-2">儲存</button>
        <button type="button" class="btn btn-danger col-1">取消</button>
      </div>
    </div>

    <div class="col-12">
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">加入原物料</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <div class="col-12">
                <div class="form-row">
                  <div class="form-group col-sm-3">
                    <label for="template11">搜尋供應商</label>
                    <input type="text" class="form-control" id="searchSupplier" placeholder="" />
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="template111">搜尋原物料</label>
                    <input type="text" class="form-control" id="searchRawmaterial" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <table id="supplierDataShowTable" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle">#</th>
                      <th scope="col" class="align-middle">供應商名稱</th>
                    </tr>
                  </thead>
                </table>

              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <!-- Modal -->
      <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModal2Label">加入工序</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <div class="col-12">
                <div class="form-row">
                  <div class="form-group col-sm-3">
                    <label for="template11">搜尋供應商</label>
                    <input type="text" class="form-control" id="searchSupplier2" placeholder="" />
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="template111">搜尋工序</label>
                    <input type="text" class="form-control" id="searchRawmaterial2" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <table id="supplierDataShowTable2" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle">#</th>
                      <th scope="col" class="align-middle">供應商名稱</th>
                    </tr>
                  </thead>
                </table>

              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
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
import 'datatables.net-rowreorder/js/dataTables.rowReorder.min.js'
import {
  language
} from '../config/dataTable'
import {
  apiOrderProcessManagementSubDetail
} from '../api/api'
import 'jquery-ui/ui/widgets/autocomplete'
export default {
  name: 'product2',
  created () { },
  mounted () {
    // 搜尋原物料及供應商
    (function () {
      var supplierTable
      var searchSupplierDom = document.getElementById('searchSupplier')
      var searchRawmaterialDom = document.getElementById('searchRawmaterial')
      searchSupplierDom.addEventListener('input', SearchNewData)
      searchRawmaterialDom.addEventListener('input', SearchNewData)
      function SearchNewData (e) {
        supplierTable.ajax.reload()
      }

      // datatables
      supplierTable = $('#supplierDataShowTable').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': {
          'url': apiOrderProcessManagementSubDetail,
          'data': function (d) {
            d.supplier = searchSupplierDom.value
            d.rawmaterial = searchRawmaterialDom.value
          }
        },
        'columns': [
          {},
          { 'data': 'supplier' }
        ],
        'order': [
          [1, 'asc']
        ],
        'searching': false,
        'bPaginate': false,
        'columnDefs': [
          {
            'targets': 0,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<button type="button" class="btn btn-primary details-control">選取</button>')
            }
          }
        ],
        'language': language
      })
    }());
    (function () {
      var supplierTable
      var searchSupplierDom = document.getElementById('searchSupplier2')
      var searchRawmaterialDom = document.getElementById('searchRawmaterial2')
      searchSupplierDom.addEventListener('input', SearchNewData)
      searchRawmaterialDom.addEventListener('input', SearchNewData)
      function SearchNewData (e) {
        supplierTable.ajax.reload()
      }

      // datatables
      supplierTable = $('#supplierDataShowTable2').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': {
          'url': apiOrderProcessManagementSubDetail,
          'data': function (d) {
            d.supplier = searchSupplierDom.value
            d.rawmaterial = searchRawmaterialDom.value
          }
        },
        'columns': [
          {},
          { 'data': 'supplier' }
        ],
        'order': [
          [1, 'asc']
        ],
        'searching': false,
        'bPaginate': false,
        'columnDefs': [
          {
            'targets': 0,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<button type="button" class="btn btn-primary details-control">選取</button>')
            }
          }
        ],
        'language': language
      })
    }());
    // bom Table - 原物料管理
    (function () {
      var bonTableDom = document.getElementById('bonTable')

      $(document).ready(function () {
        var dt = $(bonTableDom).dataTable()
        dt.fnDestroy()
      })
      $(document).ready(function () {
        // dataTable
        // 選擇
        $('#supplierDataShowTable tbody').on('click', '.details-control', function (e) {
          $('#exampleModal').modal('hide')

          var optionList
          var min = 1
          var max = 2
          var defaultValue = [
            {
              value: '',
              text: '手動'
            },
            {
              value: '',
              text: '倒沖入帳'
            }
          ]
          // set option
          for (var i = min; i <= max; i++) {
            optionList += (
              '<option value={{value}}>{{text}}</option>'
            ).replace('{{value}}', defaultValue[i - 1].value)
              .replace('{{text}}', defaultValue[i - 1].text)
          }

          var rowHtml = (
            '<tr>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='WCJ' data-name='mainName_1'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='螺絲' data-name='mainName_1' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='8' data-name='mainName_1'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='8' data-name='mainName_2'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='顆' data-name='mainName_2'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='SZBL' data-name='mainName_2' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='0' data-name='mainName_2'/>" +
            '  </td>' +
            '  <td>' +
            "<select class='form-control' data-titleName='' data-name='mainName_31'>" +
            optionList +
            '</select>' +
            '  </td>' +
            '  <td></td>' +
            '</tr>'
          )
          bomTable.row.add($(rowHtml)).draw()
          UpdateIndex()
        })

        var bomTable = $(bonTableDom).DataTable({
          bPaginate: false,
          searching: false,
          order: [
            [0, 'desc']
          ],
          columns: [{
            data: 'order'
          }, {
            data: 'place'
          }, {
            data: 'name'
          }, {
            data: 'name2'
          }, {
            data: 'name3'
          }, {
            data: 'name4'
          }, {
            data: 'name5'
          }, {
            data: 'name6'
          }, {

          }],
          columnDefs: [
            {
              'targets': -1,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                return ('<i class="fa fa-minus-square text-red" aria-hidden="true"></i>')
              }
            }
          ],
          // 刪除單筆資料
          'initComplete': function (oSettings) {
            $(this).on('click', 'i.fa.fa-minus-square', function (e) {
              var confirm2 = confirm('確定刪除?')
              if (confirm2) {
                bomTable.row($(this).closest('tr')).remove().draw()
                UpdateIndex()
              }
            })
          },
          'language': language
        })

        // 更新Table底下所有Index
        function UpdateIndex () {
          var domIndex = 0
          var domIndexAdd = false
          var aaDom = bonTableDom
          var trDomList = aaDom.querySelectorAll('tr')
          for (let trIndex = 0; trIndex < trDomList.length; trIndex++) {
            var tr = trDomList[trIndex]
            if (tr.firstElementChild != null) {
              var tdDomList = tr.querySelectorAll('td')
              for (var tdIndex = 0; tdIndex < tdDomList.length; tdIndex++) {
                var tdDom = tdDomList[tdIndex]
                var inputDom = tdDom.querySelector('input')
                var spanDom = tdDom.querySelector('span')
                var selectDom = tdDom.querySelector('select')
                if (inputDom && spanDom) {
                  UpdateIndex_FixInput(inputDom, domIndex)
                  UpdateIndex_FixSpan(spanDom, domIndex)
                  domIndexAdd = true
                } else if (selectDom) {
                  UpdateIndex_FixInput(selectDom, domIndex)
                  domIndexAdd = true
                } else if (inputDom) {
                  UpdateIndex_FixInput(inputDom, domIndex)
                  domIndexAdd = true
                } else if (spanDom) {
                  UpdateIndex_FixSpan(spanDom, domIndex)
                  domIndexAdd = true
                }
              }
            }
            if (domIndexAdd) {
              domIndex = domIndex + 1
              domIndexAdd = false
            }
          }
        }

        //
        function UpdateIndex_FixInput (inputDom, domIndex) {
          var inputDomName = inputDom.getAttribute('data-name')
          var inputDomTitleName = inputDom.getAttribute('data-titleName')
          inputDom.name = inputDomTitleName + '[' + domIndex + '].' + inputDomName
        }
        function UpdateIndex_FixSpan (spanDom, domIndex) {
          spanDom.innerText = domIndex + 1
        }
      })
    }());
    // bom Table - 工序管理
    (function () {
      var bonTableDom = document.getElementById('bonTable2')

      $(document).ready(function () {
        var dt = $(bonTableDom).dataTable()
        dt.fnDestroy()
      })
      $(document).ready(function () {
        // dataTable
        // 選擇
        $('#supplierDataShowTable2 tbody').on('click', '.details-control', function (e) {
          $('#exampleModal2').modal('hide')

          var optionList
          var min = 1
          var max = 2
          var defaultValue = [
            {
              value: '',
              text: '手動'
            },
            {
              value: '',
              text: '倒沖入帳'
            }
          ]
          // set option
          for (var i = min; i <= max; i++) {
            optionList += (
              '<option value={{value}}>{{text}}</option>'
            ).replace('{{value}}', defaultValue[i - 1].value)
              .replace('{{text}}', defaultValue[i - 1].text)
          }

          var rowHtml = (
            '<tr>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='WPZ' data-name='mainName_1'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='排花抓衦' data-name='mainName_1' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='4' data-name='mainName_1'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='4' data-name='mainName_2'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='小時' data-name='mainName_2'/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='SZYZ' data-name='mainName_2' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' data-titleName='' value='0' data-name='mainName_2'/>" +
            '  </td>' +
            '  <td>' +
            "<select class='form-control' data-titleName='' data-name='mainName_31'>" +
            optionList +
            '</select>' +
            '  </td>' +
            '  <td></td>' +
            '</tr>'
          )
          bomTable.row.add($(rowHtml)).draw()
          UpdateIndex()
        })

        var bomTable = $(bonTableDom).DataTable({
          bPaginate: false,
          searching: false,
          order: [
            [0, 'desc']
          ],
          columns: [{
            data: 'order1'
          }, {
            data: 'place1'
          }, {
            data: 'name1'
          }, {
            data: 'name21'
          }, {
            data: 'name31'
          }, {
            data: 'name41'
          }, {
            data: 'name51'
          }, {
            data: 'name61'
          }, {

          }],
          columnDefs: [
            {
              'targets': -1,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                return ('<i class="fa fa-minus-square text-red" aria-hidden="true"></i>')
              }
            }
          ],
          // 刪除單筆資料
          'initComplete': function (oSettings) {
            $(this).on('click', 'i.fa.fa-minus-square', function (e) {
              var confirm2 = confirm('確定刪除?')
              if (confirm2) {
                bomTable.row($(this).closest('tr')).remove().draw()
                UpdateIndex()
              }
            })
          },
          'language': language
        })

        // 更新Table底下所有Index
        function UpdateIndex () {
          var domIndex = 0
          var domIndexAdd = false
          var aaDom = bonTableDom
          var trDomList = aaDom.querySelectorAll('tr')
          for (let trIndex = 0; trIndex < trDomList.length; trIndex++) {
            var tr = trDomList[trIndex]
            if (tr.firstElementChild != null) {
              var tdDomList = tr.querySelectorAll('td')
              for (var tdIndex = 0; tdIndex < tdDomList.length; tdIndex++) {
                var tdDom = tdDomList[tdIndex]
                var inputDom = tdDom.querySelector('input')
                var spanDom = tdDom.querySelector('span')
                var selectDom = tdDom.querySelector('select')
                if (inputDom && spanDom) {
                  UpdateIndex_FixInput(inputDom, domIndex)
                  UpdateIndex_FixSpan(spanDom, domIndex)
                  domIndexAdd = true
                } else if (selectDom) {
                  UpdateIndex_FixInput(selectDom, domIndex)
                  domIndexAdd = true
                } else if (inputDom) {
                  UpdateIndex_FixInput(inputDom, domIndex)
                  domIndexAdd = true
                } else if (spanDom) {
                  UpdateIndex_FixSpan(spanDom, domIndex)
                  domIndexAdd = true
                }
              }
            }
            if (domIndexAdd) {
              domIndex = domIndex + 1
              domIndexAdd = false
            }
          }
        }

        //
        function UpdateIndex_FixInput (inputDom, domIndex) {
          var inputDomName = inputDom.getAttribute('data-name')
          var inputDomTitleName = inputDom.getAttribute('data-titleName')
          inputDom.name = inputDomTitleName + '[' + domIndex + '].' + inputDomName
        }
        function UpdateIndex_FixSpan (spanDom, domIndex) {
          spanDom.innerText = domIndex + 1
        }
      })
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
</style>
