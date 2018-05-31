<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            新增客訴單
          </div>

          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-md-3">
                <label for="input1">關聯訂單(必填)</label>
                <input type="text" class="form-control orderNum" id="input1" placeholder="" value="">
              </div>
              <div class="form-group col-md-3">
                <label for="input2">客诉编号(必填)</label>
                <input type="text" class="form-control complaintNum" id="input2" placeholder="" readonly value="CP-1712010003">
              </div>

              <div class="form-group col-md-6 d-none d-sm-block">
              </div>

              <div class="form-group col-md-3">
                <label for="input3">客訴目標</label>
                <select id="input3" class="form-control complaintTarget">
                </select>
              </div>

              <div class="form-group col-md-3">
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

      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i aria-hidden="true" class="fa fa-wpforms"></i>
            狀態
          </div>
          <div class="card-body">

            <div class="form-row">

              <div class="form-group col-md-3">
                <label for="inputState">處理狀態 </label>
                <div class="alert-secondary form-control" role="alert">
                  待處理
                </div>
              </div>
              <div class="form-group col-md-3">
                <label for="inputState">審核人</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>退費</option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="input3">處理日期</label>
                <input type="text" class="form-control" id="input3" placeholder="">
              </div>
              <div class="form-group col-md-3">
                <label for="inputState">拋轉狀態</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>拋轉成功</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12 text-right">
        <button type="submit" class="btn btn-success col-3">存檔</button>
      </div>

    </div>
  </div>
</template>
<script>
import 'jquery-ui/ui/widgets/autocomplete'
import {
  apiDataJQueryUIJQueryUIGetAll
} from '../api/api'
export default {
  name: 'complaintsCreate',

  created () { },
  mounted () {
    // autocomplete
    (function () {
      function autocompleteAjax (searchData, callback) {
        $.ajax({
          url: apiDataJQueryUIJQueryUIGetAll,
          type: 'GET',
          data: searchData,
          error: function () {
            console.log('error')
          },
          success: function (e) {
            if (callback) {
              callback(e)
            }
          }
        })
      }

      // 快取
      var cache = {}
      var autocompleteDom = document.getElementsByClassName('orderNum')[0]
      var complaintNumDom = document.getElementsByClassName('complaintNum')[0]
      var complaintTargetDom = document.getElementsByClassName('complaintTarget')[0]
      $(autocompleteDom).autocomplete({
        source: function (request, response) {
          var term = request.term
          if (term in cache) {
            response(cache)
          } else {
            autocompleteAjax(request, function (resp) {
              cache[term] = resp
              response(resp)
            })
          }
        },
        select: function (event, ui) {
          $(autocompleteDom).val(ui.item.order)
          $(complaintNumDom).val('CP-' + ui.item.order)

          // add select
          for (let index = (complaintTargetDom.options.length - 1); index >= 0; index--) {
            complaintTargetDom.remove(index)
          }
          for (let index = 0; index < ui.item.complaintsTarget.length; index++) {
            var option = document.createElement('option')
            option.text = ui.item.complaintsTarget[index]
            option.value = ui.item.complaintsTarget[index]
            complaintTargetDom.add(option)
          }

          return false
        }
      }).autocomplete('instance')._renderItem = function (ul, item) {
        return $('<li>')
          .append('<div>' + item.order + '</div>')
          .appendTo(ul)
      }
    }());
    (function () {

    }())
  }
}
</script>
<style lang="css">
@import 'jquery-ui/themes/base/all.css';
</style>