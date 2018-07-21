<template>
  <div class="container-fluid my-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>生產報工表單
          </div>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="form-group col-sm-3 d-none d-sm-block"></div>
                <div class="form-group col-sm-2">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input addList" id="template1" />
                    <label class="custom-control-label" for="template1">保留報工者</label>
                  </div>
                </div>
                <div class="form-group col-sm-2">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input addList" id="template2" />
                    <label class="custom-control-label" for="template2">保留工序</label>
                  </div>
                </div>
                <div class="form-group col-sm-2">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input addList" id="template3" />
                    <label class="custom-control-label" for="template3">保留狀態</label>
                  </div>
                </div>
                <div class="form-group col-sm-3 d-none d-sm-block"></div>

              </div>
              <div class="form-group row">
                <div class="form-group col-sm-3 d-none d-sm-block"></div>
                <label for="template4" class="col-sm-1 col-form-label">報工者: </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="template4" value="" />
                </div>
              </div>
              <div class="form-group row">
                <div class="form-group col-sm-3 d-none d-sm-block"></div>
                <label for="template5" class="col-sm-1 col-form-label">工單條碼: </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="template5" value="" />
                </div>
              </div>
              <div class="form-group row">
                <div class="form-group col-sm-3 d-none d-sm-block"></div>
                <label for="template5" class="col-sm-1 col-form-label">工序: </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="template5" value="" />
                </div>
              </div>
              <div class="form-group row">
                <div class="form-group col-sm-3 d-none d-sm-block"></div>
                <label for="template5" class="col-sm-1 col-form-label">狀態: </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="template5" value="" />
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer text-center">
            <button type="button" class="btn btn-success col-sm-2 mb-3">執行</button>
            <button type="button" class="btn btn-danger col-sm-2 mb-3">清除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'copyform',
  created () { },
  mounted () { }
}
</script>
<style lang="css" scoped>
</style>
