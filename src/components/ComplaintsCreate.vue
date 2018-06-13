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

                <select id="" class="js-data-example-ajax form-control orderNum">
                  <option value="" selected="selected">請選擇</option>
                </select>

              </div>
              <div class="form-group col-md-3">
                <label for="input2">客诉编号(必填)</label>
                <input type="text" class="form-control complaintNum" id="input2" placeholder="" readonly value="">
              </div>

              <div class="form-group col-md-6 d-none d-md-block">
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
import {
  apiDataJQueryUIJQueryUIGetAll
} from '../api/api'
import 'select2/dist/js/select2.full.min.js'
import { select2Module } from '../config/select2.js'
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
    }())
  }
}
</script>
<style lang="css">
@import 'select2/dist/css/select2.min.css';
</style>