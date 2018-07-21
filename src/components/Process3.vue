<template>
  <div class="container-fluid my-4">
    <div class="row">
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>工序
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">代碼</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" value="WCH" />
              </div>
              <div class="form-group col-sm-3">
                <label for="template2">名稱</label>
                <input type="text" class="form-control" id="template2" name="template2" placeholder="" value="車花" />
              </div>
              <div class="form-group col-sm-3">
                <label for="template3">工作次序</label>
                <input type="text" class="form-control" id="template3" name="template3" placeholder="" value="1" />
              </div>
              <div class="form-group col-sm-3">&nbsp;</div>
              <div class="form-group col-sm-3">
                <label for="template7">狀態</label>
                <select id="template7" name="template7" class="form-control">
                  <option selected>啟用</option>
                  <option>不啟用</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-4">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>狀態名稱設定
          </div>
          <div class="card-body">

            <table id="example" class="display" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>代碼</th>
                  <th>名稱</th>
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
      $(document).ready(function () {
        var dt = $('#example').dataTable()
        dt.fnDestroy()
      })

      $(document).ready(function () {
        // dataTable
        $('#example').DataTable({
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
          }],
          columnDefs: [
            {
              'targets': 0,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                return ('<span class="badge badge-secondary text-white Index"></span>')
              }
            },
            {
              'targets': 2,
              'data': '',
              'orderable': false,
              'render': function (data, type, row, meta) {
                return (' <input type="text" class="form-control" data-titleName="model" data-name="name" id="" name="" placeholder="">')
              }
            }
          ],
          'drawCallback': function (settings) {
            (function () {
              UpdateIndexCount()
              UpdateIndex()
            })()
          },
          'language': language
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
        function UpdateIndexCount () {
          var indexDomList = document.getElementsByClassName('Index')
          for (var i = 0; i < indexDomList.length; ++i) {
            var indexDom = indexDomList[i]
            indexDom.innerHTML = i + 1
          }
        }
      })
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-dt/css/jquery.dataTables.css';
</style>
