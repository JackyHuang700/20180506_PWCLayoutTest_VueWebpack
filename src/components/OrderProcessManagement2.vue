<template>
  <div class="coantiner-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>產品資訊
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">銷售單號</label>
                <input type="text" class="form-control" id="..." name="..." placeholder="" value="1800001" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="...">明細編號</label>
                <input type="text" class="form-control" id="..." name="..." placeholder="" value="1800001-001" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="...">產品名稱</label>
                <input type="text" class="form-control" id="..." name="..." placeholder="" value="Ace花邊裙擺" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="template1">正面圖</label>
                <img src="http://fakeimg.pl/304x236/" class="img-thumbnail form-control" alt="Cinque Terre" width="304" height="236">
              </div>

              <div class="form-group col-sm-3">
                <label for="template7">供應商策略</label>
                <select id="template7" name="template7" class="form-control bomController">
                  <option selected>Choose...</option>
                  <option value="0">自製</option>
                  <option value="1">外購</option>
                </select>
              </div>

            </div>

          </div>
        </div>

      </div>
      <div class="col-12 BomTable">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>建立Bom表
          </div>
          <div class="card-body">
            <div class="col-12">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">原物料選擇</button>
            </div>
            <div class="col-12">
              <table id="bonTable" class="display" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th class="text-center">物料編號</th>
                    <th class="text-center">物料名稱</th>
                    <th class="text-center">單價</th>
                    <th class="text-center">幣種</th>
                    <th class="text-center">單位</th>
                    <th class="text-center">庫存數量</th>
                    <th class="text-center">需求量</th>
                    <th class="text-center">操作</th>
                  </tr>
                </thead>
              </table>
            </div>

          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>產生操作
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-primary btn-lg">產生生產工單</button>
            <button type="button" class="btn btn-primary btn-lg">產生採購單</button>
          </div>
        </div>
      </div>
      <div class="col-12 text-right">
        <button type="button" class="btn btn-success col-sm-2 mb-3">建立</button>
        <a href="//" class="btn btn-danger col-sm-1 mb-3">返回</a>
      </div>

      <div class="col-12">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <div class="col-12">
                  <div class="form-row">
                    <div class="form-group col-sm-3">
                      <label for="template11">搜尋供應商</label>
                      <input type="text" class="form-control" id="searchSupplier" placeholder="">
                    </div>
                    <div class="form-group col-sm-3">
                      <label for="template111">搜尋原物料</label>
                      <input type="text" class="form-control" id="searchRawmaterial" placeholder="">
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
  name: 'orderprocessmanagement2',
  created () { },
  mounted () {
    // bom表顯示與隱藏
    var bomModule = (function () {
      var bomTableDom = document.getElementsByClassName('BomTable')[0]

      function show () {
        if (bomTableDom) {
          bomTableDom.style.display = 'block'
        }
      }

      function hide () {
        if (bomTableDom) {
          bomTableDom.style.display = 'none'
        }
      }

      return {
        show: show,
        hide: hide
      }
    }());

    (function () {
      var bomControllerDom = document.getElementsByClassName('bomController')[0]
      bomControllerDom.addEventListener('click', function (e) {
        var self = e.target
        switch (self.value) {
          case '0':
            bomModule.show()
            break
          case '1':
            bomModule.hide()
            break
          default:
            break
        }
      })
    }());
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
    // bom Table
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
          var max = 34
          // set option
          for (var i = min; i <= max; i++) {
            optionList += (
              '<option value={{value}}>{{text}}</option>'
            ).replace('{{value}}', i)
              .replace('{{text}}', i)
          }

          var rowHtml = (
            '<tr>' +
            '  <td>' +
            "    <input class='form-control' type='text' value='23569310-124' data-name='mainName_1' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' value='15MM伸縮帶' data-name='mainName_2' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' value='20' data-name='mainName_2' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' value='台幣' data-name='mainName_2' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' value='條' data-name='mainName_2' readonly/>" +
            '  </td>' +
            '  <td>' +
            "    <input class='form-control' type='text' value='34' data-name='mainName_2' readonly/>" +
            '  </td>' +
            '  <td>' +
            "<select class='form-control' data-name='mainName_31'>" +
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

        //
        $(bonTableDom).css('border-bottom', 'none')

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
              for (let tdIndex = 0; tdIndex < tdDomList.length; tdIndex++) {
                var tdDom = tdDomList[tdIndex]
                var inputDom = tdDom.querySelector('input')
                if (inputDom) {
                  var inputDomName = inputDom.getAttribute('data-name')
                  inputDom.name = inputDomName + '[' + domIndex + ']'
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
      })
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

#supplierDataShowTable_wrapper {
  padding: 0;
}

/* @media (min-width: 576px) { */
/* .modal-lg { */
/* width: 100%; */
/* } */
/* } */
</style>
