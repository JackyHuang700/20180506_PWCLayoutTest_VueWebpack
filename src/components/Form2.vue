<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">基本訊息</div>
          <div class="card-body">

            <form action="" method="post" id="commentForm2">
              <div class="form-group row">
                <label for="position" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="position" name="position" value="">
                </div>
              </div>
              <div class="form-group row">
                <label for="salary" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="salary" name="salary" placeholder="" value="">
                </div>
              </div>

              <div class="col-12 text-right">
                <input class="submit btn btn-primary" type="submit" value="Submit">
                <input class="submit btn btn-danger" type="button" value="Reset" id="reset">
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import iziToast from 'izitoast/dist/js/iziToast.min.js'
import 'jquery-validation'
import {
  apiDataTableDataTableUpdate,
  apiDataTableDataTableGet
} from '../api/api'
export default {
  name: 'form',
  created () { },
  mounted () {
    // get data
    $.ajax({
      url: apiDataTableDataTableGet,
      type: 'GET',
      data: {
        id: 1
      },
      error: function (xhr) {
        alert('Ajax request 發生錯誤')
      },
      success: function (response) {
        console.log('取道資料了:', response)
        var data = response.data
        for (var key in data) {
          // console.log('key:', key, ', value:', data[key])
          const dom = document.getElementById(key)
          if (dom) {
            dom.value = data[key]
          }
        }
      }
    })

    // validator
    var validator = $('#commentForm2').validate({
      rules: {
        position: {
          required: true,
          minlength: 2
        }
      },
      messages: {
        position: {
          required: '記得要輸入喔',
          minlength: '至少兩個字'
        }

      },
      submitHandler: function (form) {
        console.log('提交事件!', form)
        // form.submit()
        SaveData(form)
      },
      highlight: function (element, errorClass, validClass) {
        $(element.form).find('label[for=' + element.id + ']')
          .addClass('errorLabel')
        $(element.form).find('input[id=' + element.id + ']')
          .addClass('error')
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element.form).find('label[for=' + element.id + ']')
          .removeClass('errorLabel')
        $(element.form).find('input[id=' + element.id + ']')
          .removeClass('error')
      }

    })

    // 重設表單
    $('#reset').click(function () {
      validator.resetForm()
    })

    // 儲存資料
    function SaveData (form) {
      $.ajax({
        url: apiDataTableDataTableUpdate,
        type: 'POST',
        data: $(form).serialize(),
        error: function (xhr) {
          console.error('Ajax request 發生錯誤')
        },
        success: function (response) {
          console.log('更新資料完成, ', response)

          if (response.status.toUpperCase() === 'SUCCCESS') {
            iziToast.success({
              position: 'topRight',
              title: '更新成功',
              message: '即將回到首頁!'
            })
            setTimeout(function () {
              // window.location = '//'
              alert('asdf')
            }, 2000)
          } else {
            iziToast.error({
              position: 'topRight',
              title: '更新失敗',
              message: 'xxx原因，更新失敗'
            })
          }
        }
      })
    }
  }
}
</script>
<style>
@import 'izitoast/dist/css/iziToast.min.css';
@import '../assets/jquery-validation/jquery-validation.css';
</style>