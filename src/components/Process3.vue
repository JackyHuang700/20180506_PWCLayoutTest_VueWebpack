<template>
  <div class="container-fluid my-4">
    <div class="row">
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>共序及狀態設定
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">工序代碼</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template2">工序名稱</label>
                <input type="text" class="form-control" id="template2" name="template2" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template6">OpType</label>
                <select id="template6" name="template6" class="form-control">
                  <option selected>WCJ - 裁減</option>
                  <option>WCW - 車位</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="template7">是否啟用</label>
                <select id="template7" name="template7" class="form-control">
                  <option selected>Y</option>
                  <option>N</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>共序及狀態設定
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="testInput">代碼</label>
                <select id="testInput" name="testInput" class="form-control">
                  <option selected>S000011 - 開始</option>
                  <option>S000012 - 完成</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="testInput2">名稱</label>
                <select id="testInput2" name="testInput2" class="form-control">
                  <option selected>開始 - 開始</option>
                  <option>完成 - 完成</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="testInput3">OpType</label>
                <select id="testInput3" name="testInput3" class="form-control">
                  <option selected>WCJ - 裁減</option>
                  <option>WCW - 車位</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="testInput4">是否啟用</label>
                <select id="testInput4" name="testInput4" class="form-control">
                  <option selected>Y</option>
                  <option>N</option>
                </select>
              </div>
            </div>

            <button id="addRow" class="btn btn-primary">新增</button>
            <hr>
            <br/>
            <table id="example" class="display" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">狀態代碼</th>
                  <th class="text-center">狀態名稱</th>
                  <th class="text-center">EndProcess</th>
                  <th class="text-center">是否啟用</th>
                  <th class="text-center">操作</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      <div class="col-12 text-right">
        <button type="submit" class="btn btn-success col-sm-2 mb-3">儲存</button>
        <button type="button" class="btn btn-danger col-sm-1 mb-3">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
import 'datatables.net'
import 'datatables.net-rowreorder/js/dataTables.rowReorder.min.js'
import {
  language
} from '../config/dataTable'
import {
  apiProcess3Insert
} from '../api/api'

export default {
  name: 'process3',
  created () { },
  mounted () {
    (function () {
      // input group
      var form_input1 = document.getElementById('testInput')
      var form_input2 = document.getElementById('testInput2')

      $(document).ready(function () {
        var dt = $('#example').dataTable()
        dt.fnDestroy()
      })

      $(document).ready(function () {
        // dataTable
        var table = $('#example').DataTable({
          ajax: apiProcess3Insert,
          bPaginate: false,
          searching: false,
          order: [
            [0, 'desc']
          ],
          columns: [{
          }, {
            data: 'place'
          }, {
            data: 'name'
          }, {
            data: 'name'
          }, {
            data: 'name'
          }, {

          }],
          columnDefs: [
            {
              'targets': 0,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                return ('<span class="badge badge-secondary text-white Index">1</span>')
              }
            },
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
                table.row($(this).closest('tr')).remove().draw()
                UpdateIndex()
              }
            })
          },
          'language': language
        })

        // 添加新增按鈕
        $('#addRow').on('click', function () {
          var rowHtml = (
            '<tr>' +
            '  <td>' +
            '    <input class="form-control" data-titleName="{{data-titleName}}" type="text" value="2" data-name="mainName_1" />' +
            '  </td>' +
            '  <td>' +
            '    <input class="form-control" data-titleName="{{data-titleName}}" type="text" value="DVap" data-name="mainName_2" />' +
            '  </td>' +
            '  <td>' +
            '    <input class="form-control" data-titleName="{{data-titleName}}" type="text" value="22" data-name="mainName_3" />' +
            '  </td>' +
            '  <td> ' +
            '   <select id="template66" name="template66" class="form-control">' +
            '    <option selected>Y</option>' +
            '    <option>N</option>' +
            '   </select>' +
            '  </td>' +
            '  <td> ' +
            '   <select id="template77" name="template77" class="form-control">' +
            '    <option selected>Y</option>' +
            '    <option>N</option>' +
            '   </select>' +
            '  </td>' +
            '  <td></td>' +
            '</tr>'
          ).replace(/{{data-titleName}}/g, 'BomTable')

          table.row.add($(rowHtml)).draw()
          UpdateIndex()
          UpdateIndexCount()
        })
        // test
        // Test_Click()

        // 更新Table底下所有Index
        function UpdateIndex () {
          var domIndex = 0
          var domIndexAdd = false
          var dynamicTable = document.getElementById('example')
          var trDomList = dynamicTable.querySelectorAll('tr')
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
                } else if (inputDom || selectDom) {
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

        function UpdateIndexCount () {
          var indexDomList = document.getElementsByClassName('Index')
          for (var i = 0; i < indexDomList.length; ++i) {
            var indexDom = indexDomList[i]
            indexDom.innerHTML = i + 1
          }
        }

        // clear form
        function ClearForm () {
          form_input1.value = ''
          form_input2.value = ''
        }
      })
    }())

    // test
    function Test_Click () {
      document.getElementById('addRow').click()
    }
  }
}
</script>
<style lang="css">
@import 'datatables.net-dt/css/jquery.dataTables.css';
</style>
