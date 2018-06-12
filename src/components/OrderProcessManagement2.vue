<template>
  <div class="coantiner-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">...</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="template6">...</label>
                <select id="template6" name="template6" class="form-control" readonly>
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
              </div>

              <div class="form-group col-sm-3">
              </div>

              <div class="form-group col-sm-3">
                <label for="template7">供應商策略</label>
                <select id="template7" name="template7" class="form-control" readonly>
                  <option selected>Choose...</option>
                  <option>自製</option>
                  <option>外購</option>
                  <option></option>
                </select>
              </div>

            </div>

          </div>
          <div class="card-footer"></div>
        </div>

      </div>
      <div class="col-12 BomTable">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>建立Bom表
          </div>
          <div class="card-body"></div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-primary btn-lg">產生生產工單</button>
            <button type="button" class="btn btn-primary btn-lg">產生採購單</button>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'orderprocessmanagement2',
  created () { },
  mounted () {
    (function () {}(

    ))
  }
}
</script>
<style lang="css">
</style>
