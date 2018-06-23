<template>
  <div class="container-fluid my-4">
    <div class="row">
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>操作
          </div>
          <div class="card-body">
            <button id="addRow" class="btn btn-primary">新增欄位</button>
            <hr>
            <table id="example" class="display" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th class="text-center">...</th>
                  <th class="text-center">...</th>
                  <th class="text-center">...</th>
                  <th class="text-center">操作</th>
                </tr>
              </thead>
            </table>

           
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>操作
          </div>
          <div class="card-body"></div>
          <div class="card-footer"></div>
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
  apiProcess3Insert
} from '../api/api'

export default {
  name: 'process3',
  created () { },
  mounted () {
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
          data: 'order'
        }, {
          data: 'place'
        }, {
          data: 'name'
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
              table.row($(this).closest('tr')).remove().draw()
              UpdateIndex()
            }
          })
        }
      })

      // 添加新增按鈕
      $('#addRow').on('click', function () {
        var rowHtml = (
          '<tr>' +
          '  <td>' +
          '    <input class="form-control" type="text" value="2" data-name="mainName_1" />' +
          '  </td>' +
          '  <td>' +
          '    <input class="form-control" type="text" value="DVap" data-name="mainName_2" />' +
          '  </td>' +
          '  <td>' +
          '    <input class="form-control" type="text" value="22" data-name="mainName_3" />' +
          '  </td>' +
          '  <td></td>' +
          '</tr>'
        )

        table.row.add($(rowHtml)).draw()
        UpdateIndex()
      })

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
    })
  }
}
</script>
<style lang="css">
@import 'datatables.net-dt/css/jquery.dataTables.css';
/* dataTables.rowReorder css */
table.dt-rowReorder-float {
  position: absolute !important;
  opacity: 0.8;
  table-layout: fixed;
  outline: 2px solid #888;
  outline-offset: -2px;
  z-index: 2001;
}
tr.dt-rowReorder-moving {
  outline: 2px solid #555;
  outline-offset: -2px;
}
body.dt-rowReorder-noOverflow {
  overflow-x: hidden;
}
table.dataTable td.reorder {
  text-align: center;
  cursor: move;
}
/* order css */
table#newRow {
  display: none;
}

/* div.addRow {
  line-height: 45px;
  background-color: #fff;
  padding-left: 10px;
  border-bottom: 1px solid;
  border-top: 1px solid #e5e5e5;
} */
</style>
