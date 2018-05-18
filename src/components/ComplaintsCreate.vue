<template>
  <div class="container-fluid">
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
                <input type="text" class="form-control" id="input1" placeholder="">
              </div>
              <div class="form-group col-md-3">
                <label for="input2">客诉编号(必填)</label>
                <input type="text" class="form-control" id="input2" placeholder="">
              </div>
              <div class="form-group col-md-3">
                <label for="input3">客訴目標</label>
                <input type="text" class="form-control" id="input3" placeholder="">
              </div>
              <div class="form-group col-md-3">
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
              <div class="form-group col-md-3">
                <label for="inputState">解决方案 </label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>退費</option>
                </select>
              </div>
              <div class="form-group col-md-3">
                <label for="inputState">處理狀態 </label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>退費</option>
                </select>
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
              <div class="form-group col-md-12 text-right">
                <button type="submit" class="btn btn-success">存檔</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'complaintsCreate',

  created () { },
  mounted () { },
  methods: {}
}
</script>
<style lang="css" scoped>
</style>