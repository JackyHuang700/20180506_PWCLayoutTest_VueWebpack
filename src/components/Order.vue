<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
            基本信息
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-lg-3">
                <label for="input4">銷貨單號1</label>
                <input type="text" class="form-control" id="input4" placeholder="">
              </div>
              <div class="form-group col-lg-3">
                <label for="input5">部門1</label>
                <input type="text" class="form-control" id="input5" placeholder="">
              </div>
              <div class="form-group col-lg-3">
                <label for="input6">銷貨單號2</label>
                <input type="text" class="form-control" id="input6" placeholder="">
              </div>
              <div class="form-group col-lg-3">
                <label for="input7">部門2</label>
                <input type="text" class="form-control" id="input7" placeholder="">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-lg-4">
                <label for="input8">銷貨單號</label>
                <input type="text" class="form-control" id="input8" placeholder="">
              </div>
              <div class="form-group col-lg-4">
                <label for="input9">部門</label>
                <input type="text" class="form-control" id="input9" placeholder="">
              </div>
              <div class="form-group col-lg-4">
                <label for="input10">銷貨單號</label>
                <input type="text" class="form-control" id="input10" placeholder="">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-lg-6">
                <label for="input8">持有人</label>
                <input type="text" class="form-control" id="input8">
              </div>
              <div class="form-group col-lg-3">
                <label for="input9">狀態</label>
                <select id="input9" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-lg-3">
                <label for="input10">Zip</label>
                <input type="text" class="form-control" id="input10">
              </div>
            </div>

            <div class="form-group">
              <label for="input9">客戶性質</label>
              <select id="input9" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div class="form-group">
              <label for="input1">傳真</label>
              <input type="text" class="form-control" id="input1" placeholder="">
            </div>

            <div class="form-group">
              <label for="textarea">包裝方式</label>
              <textarea type="text" class="form-control" id="textarea" rows="3">備註備註備註備註</textarea>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
              <label class="form-check-label" for="inlineCheckbox1">1</label>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order',
  created () { },
  mounted () { }
}
</script>
<style lang="css" scoped>
</style>