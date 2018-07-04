<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <!-- <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            新增客訴單
          </div>

          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="input1">關聯訂單(必填)</label>

                <select id="" class="js-data-example-ajax form-control orderNum">
                  <option value="" selected="selected">請選擇</option>
                </select>

              </div>
              <div class="form-group col-sm-3">
                <label for="input2">客诉编号(必填)</label>
                <input type="text" class="form-control complaintNum" id="input2" placeholder="" readonly value="">
              </div>

              <div class="form-group col-md-6 d-none d-md-block">
              </div>

              <div class="form-group col-sm-3">
                <label for="input3">客訴目標</label>
                <select id="input3" class="form-control complaintTarget">
                </select>
              </div>

              <div class="form-group col-sm-3">
                <label for="inputState">解决方案 </label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>退費</option>
                </select>
              </div>

              <div class="form-group col-md-12">
                <label for="inputState">客訴原因 </label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>品質不良</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="textarea1">客訴说明</label>
                <textarea rows="4" cols="50" class="form-control" id="textarea1">
                  At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                </textarea>
              </div>
              <div class="form-group col-md-12">
                <label for="customFile">相關檔案</label>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFile">
                  <label class="custom-file-label" for="customFile">Choose file</label>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div> -->

      <!-- <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            狀態
          </div>
          <div class="card-body">

            <div class="form-row">

              <div class="form-group col-sm-3">
                <label for="inputState">處理狀態 </label>
                <div class="alert-secondary form-control" role="alert">
                  待處理
                </div>
              </div>
              <div class="form-group col-sm-3">
                <label for="inputState">審核人</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>退費</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="input3">處理日期</label>
                <input type="text" class="form-control" id="input3" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="inputState">拋轉狀態</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>拋轉成功</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div> -->

      <!-- new form -->

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            客訴單內容
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template4">客訴編號</label>
                <input type="text" class="form-control" id="template4" name="template4" placeholder="" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="template4">關聯訂單</label>
                <input type="text" class="form-control" id="template4" name="template4" placeholder="">
              </div>

              <div class="form-group col-sm-3">
                <label for="template6">客訴原因</label>
                <select id="template6" name="template6" class="form-control">
                  <option selected>所有</option>
                  <option>...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="template3">客訴日期</label>
                <input type="text" class="form-control" id="template3" name="template3" placeholder="" value="2018-7-3">
              </div>

              <div class="form-group col-sm-6">
                <label for="template5">客訴內容</label>
                <textarea name="template5" id="template5" cols="30" rows="14" class="form-control" placeholder="請輸入內容"></textarea>
              </div>
            </div>
            <hr>
            <div class="form-row" id="FilesDOM">
              <div class="form-group col-sm-12">
                <button type="button" class="btn btn-primary" id="AddFileBtn">加入附件</button>
              </div>
              <div class="form-group col-sm-3">
                <label for="customFile">附檔</label>
                <div class="position-relative">
                  <button type="button" class="close closeImgBtn position-absolute closeImgBtn-position" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <img alt="" class="img-thumbnail round mb-3 img-fluid showImg" src="https://fakeimg.pl/610x226/?text=Choose%20file&font=museo">
                </div>
                <div class="custom-file">
                  <input type="hidden" class="urlHidden" name="PositiveUrl" id="PositiveUrl" value="">
                  <input type="file" class="custom-file-input" id="Annex_1" name="Annex_1">
                  <label class="custom-file-label" for="Annex_1">請選擇...</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            客戶資訊
          </div>
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template4">客戶代號</label>
                <input type="text" class="form-control" id="template4" name="template4" placeholder="" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="template4">客戶名稱</label>
                <input type="text" class="form-control" id="template4" name="template4" placeholder="" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="template4">Email</label>
                <input type="text" class="form-control" id="template4" name="template4" placeholder="" readonly>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            列表
          </div>
          <div class="card-body">
            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">料號</th>
                  <th scope="col" class="align-middle">SKU</th>
                  <th scope="col" class="align-middle">Color</th>
                  <th scope="col" class="align-middle">Size</th>
                  <th scope="col" class="align-middle">幣別</th>
                  <th scope="col" class="align-middle">售價</th>
                  <th scope="col" class="align-middle">出貨數量</th>
                  <th scope="col" class="align-middle">金額</th>
                  <th scope="col" class="align-middle">退貨數量</th>
                  <th scope="col" class="align-middle">退貨倉別</th>
                  <th scope="col" class="align-middle">退款單價</th>
                  <th scope="col" class="align-middle">折讓金額</th>
                  <th scope="col" class="align-middle">處理方式</th>
                  <th scope="col" class="align-middle">供應商代號</th>/名稱
                  <th scope="col" class="align-middle">採購退貨處理方式</th>
                  <th scope="col" class="align-middle">扣款金額</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            審核列表
          </div>
          <div class="card-body">
            <table id="example2" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">次序</th>
                  <th scope="col" class="align-middle">完成日期</th>
                  <th scope="col" class="align-middle">審核人</th>
                  <th scope="col" class="align-middle">審核訊息</th>
                  <th scope="col" class="align-middle">狀態</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      <div class="col-12 text-right">
        <button type="submit" class="btn btn-success col-sm-2 mb-3">儲存</button>
        <a href="" class="btn btn-danger col-sm-1 mb-3">返回</a>
      </div>

    </div>
  </div>
</template>
<script>
import {
  apiDataJQueryUIJQueryUIGetAll,
  apiDataTableCopyTemplateGetAll
} from '../api/api'
import 'select2/dist/js/select2.full.min.js'
import { select2Module } from '../config/select2.js'

import 'datatables.net'
import 'datatables.net-bs4'
import {
  language
} from '../config/dataTable'
export default {
  name: 'complaintsCreate',
  created () { },
  mounted () {
    // select2
    (function () {
      var autocompleteDom = document.getElementsByClassName('orderNum')[0]
      var complaintNumDom = document.getElementsByClassName('complaintNum')[0]
      var complaintTargetDom = document.getElementsByClassName('complaintTarget')[0]

      // 远程筛选
      $(autocompleteDom).select2({
        ajax: {
          url: apiDataJQueryUIJQueryUIGetAll,
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              term: params.term, // search term
              pageNo: params.page
            }
          },
          // 收到伺服器回應
          processResults: function (data, params) {
            params.page = params.page || 1
            return {
              results: data.items[0],
              pagination: {
                more: (params.page * 10) < data.total_count
              }
            }
          },
          cache: true
        },
        escapeMarkup: function (markup) { return markup },
        minimumInputLength: 1,
        templateResult: formatRepoProvince,
        templateSelection: formatRepoProvince,
        language: select2Module.language
      })

      // 製作下拉式選單
      function formatRepoProvince (repo) {
        if (repo['loading'] === undefined || repo.loading) return repo.text

        $(autocompleteDom).val(repo.order)
        $(complaintNumDom).val('CP-' + repo.order)

        // add select
        for (let index = (complaintTargetDom.options.length - 1); index >= 0; index--) {
          complaintTargetDom.remove(index)
        }
        for (let index = 0; index < repo.complaintsTarget.length; index++) {
          var option = document.createElement('option')
          option.text = repo.complaintsTarget[index]
          option.value = repo.complaintsTarget[index]
          complaintTargetDom.add(option)
        }

        return '<div>' + repo.order + '</div>'
      }
    }());
    // dataTables
    (function () {
      var table = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
        // 'ajax': '/Demo/TestComplaintInsertAPI',
        'scrollX': true,
        'bPaginate': false,
        'searching': false,
        'columns': [
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_3' }
        ],
        'order': [
          [1, 'asc']
        ],
        'columnDefs': [
          {
            'targets': 12,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              var selectTag = (
                '<select id="" name="" class="form-control">' +
                '  <option>退貨</option>' +
                '  <option>折讓退款</option>' +
                '  <option>換貨</option>' +
                '  <option>重做</option>' +
                '  <option>退回修改</option>' +
                '  <option>退客戶退貨運費</option>' +
                '</select>'
              )
              return selectTag
            }
          },
          {
            'targets': 14,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              var selectTag = (
                '<select id="" name="" class="form-control">' +
                '  <option>退貨</option>' +
                '  <option>扣款</option>' +
                '</select>'
              )
              return selectTag
            }
          }
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })
    }());

    (function () {
      $('#example2').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
        // 'ajax': '/Demo/TestComplaintInsert2API',
        'scrollX': true,
        'bPaginate': false,
        'searching': false,
        'columns': [
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_3' }
        ],
        'order': [
          [1, 'asc']
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })
    }());

    /* change picture url */
    (function () {
      $(document).on('change', '.custom-file-input', function (e) {
        var self = e.target
        // 設定圖片
        var showImgDom = self.parentElement.parentElement.getElementsByClassName('showImg')[0]

        // 儲存舊路徑
        var getOldSrc = showImgDom.getAttribute('src')
        if (getOldSrc) {
          showImgDom.setAttribute('data-oldSrc', getOldSrc)
        }

        // 設定顯示路徑
        $(this).next().after().text($(this).val().split('\\').slice(-1)[0])

        if (this.files && this.files[0]) {
          var reader = new FileReader()
          reader.onload = function (e) {
            showImgDom.setAttribute('src', e.target.result)
          }

          reader.readAsDataURL(this.files[0])
        }
      })

      $(document).on('click', '.closeImgBtn', function (e) {
        var self = e.target

        if (self.tagName === 'SPAN') {
          self = self.parentElement.parentElement
        }

        var parentNode = self.parentElement
        var customfileinputDom = parentNode.getElementsByClassName('custom-file-input')[0]
        var customfilelabelDom = parentNode.getElementsByClassName('custom-file-label')[0]
        var showImgDom = parentNode.getElementsByClassName('showImg')[0]
        // 此欄位Update才有
        var urlHiddenDom = parentNode.getElementsByClassName('urlHidden')[0]

        if (confirm('確認刪除?')) {
          if (urlHiddenDom) {
            urlHiddenDom.value = ''
          }
          customfileinputDom.value = ''
          customfilelabelDom.innerText = '請選擇...'
          var oldSrc = showImgDom.getAttribute('data-oldSrc')
          showImgDom.setAttribute('src', oldSrc)
        }
      });
      // 動態添加FileUpload
      (function () {
        var FileTemplate = (
          '<div class="form-group col-sm-3">' +
          '     <label for="">附檔</label>' +
          '     <div class="position-relative">' +
          '         <button type="button" class="close closeImgBtn position-absolute closeImgBtn-position" aria-label="Close">' +
          '             <span aria-hidden="true">&times;</span>' +
          '         </button>' +
          '         <img alt="" class="img-thumbnail round mb-3 img-fluid showImg" src="https://fakeimg.pl/610x226/?text=Choose%20file&font=museo">' +
          '     </div>' +
          '     <div class="custom-file">' +
          '         <input type="file" class="custom-file-input" id="{{Aims}}_{{Index}}" name="{{Aims}}_{{Index}}" aria-describedby="fileHelp">' +
          '         <label class="custom-file-label" for="{{Aims}}_{{Index}}">請選擇...</label>' +
          '     </div>' +
          ' </div>')

        $(document).on('click', '#AddFileBtn', CreateFileTemplate)
        function CreateFileTemplate () {
          var AimsKey = 'Annex'
          var AimsDOM = $('#FilesDOM')
          var Index = AimsDOM.children('div').length + 1
          var Template = FileTemplate.replace(/{{Aims}}/g, AimsKey).replace(/{{Index}}/g, Index)

          AimsDOM.append(Template)
        }
      }());

      // update view use，show Image
      (function ShowImg () {
        var urlHiddenDom = document.getElementsByClassName('urlHidden')
        for (var i = urlHiddenDom.length - 1; i > -1; i--) {
          var myValue = urlHiddenDom[i].value
          if (myValue !== '' && myValue !== 'undefined') {
            urlHiddenDom[i].parentElement.parentElement.getElementsByClassName('showImg')[0].setAttribute('src', myValue)
          }
        }
      }())
    }())
  }
}
</script>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
@import '../assets/FileUpload/FileUpload.css';
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';

@import '../assets/dataTables/dataTables.css';

</style>