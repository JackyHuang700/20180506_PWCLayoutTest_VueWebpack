<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>表單
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">...</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template2">...</label>
                <input type="text" class="form-control" id="template2" name="template2" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template3">...</label>
                <input type="text" class="form-control" id="template3" name="template3" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template4">...</label>
                <input type="text" class="form-control" id="template4" name="template4" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <label for="template6">...</label>
                <select id="template6" name="template6" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-sm-12">
                <label for="template5">..</label>
                <textarea name="template5" id="template5" cols="30" rows="10" class="form-control"></textarea>
              </div>
            </div>
            
          </div>
           <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-12 text-right">
        <button type="submit" class="btn btn-success col-3">儲存</button>
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
