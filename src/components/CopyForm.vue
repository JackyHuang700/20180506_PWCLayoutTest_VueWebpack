<template>
  <div class="container-fluid my-4">
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
                  <option selected>所有</option>
                  <option>...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="template5">單據內部標識</label>
                <input type="text" class="form-control" name="template5" id="template5" placeholder="">
              </div>
              <div class="form-group col-sm-3">
                <div class="row">
                  <label class="float-left col-sm-12" for="inputText6">到期日(未完成))</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control rangeInput" id="inputText6" placeholder="">
                    <span class="rangeInputSpan">~</span>
                    <input type="text" class="form-control rangeInput" id="inputText7" placeholder="">
                  </div>
                </div>
              </div>
              <!-- 空白 -->
              <div class="form-group col-sm-9 d-none d-sm-block"></div>
              <!-- 空白 -->
              <div class="form-group col-sm-12">
                <label for="template5">..</label>
                <textarea name="template5" id="template5" cols="30" rows="10" class="form-control"></textarea>
              </div>
            </div>

          </div>
          <div class="card-footer"></div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>表單2
          </div>
          <div class="card-body">
            <div class="form-group row">
              <label for="template6" class="col-sm-2 col-form-label">...</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="template6" placeholder="請填寫...">
              </div>
            </div>
            <div class="form-group row">
              <label for="template7" class="col-sm-2 col-form-label">...</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="template7" placeholder="請填寫...">
              </div>
            </div>

            <div class="form-group row">
              <label for="template9" class="col-sm-2 col-form-label">...</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="template9" placeholder="請填寫...">
              </div>
              <label for="template10" class="col-sm-2 col-form-label">...</label>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="template10" placeholder="請填寫...">
              </div>
            </div>

            <div class="form-group row">
              <label for="template11" class="col-sm-1 col-form-label">...</label>
              <div class="col-sm-3">
                <input type="text" class="form-control" id="template11" placeholder="請填寫...">
              </div>
              <label for="template12" class="col-sm-1 col-form-label">...</label>
              <div class="col-sm-3">
                <input type="text" class="form-control" id="template12" placeholder="請填寫...">
              </div>
              <label for="template13" class="col-sm-1 col-form-label">...</label>
              <div class="col-sm-3">
                <input type="text" class="form-control" id="template13" placeholder="請填寫...">
              </div>
            </div>

            <div class="form-group row">
              <label for="template8" class="col-sm-2 col-form-label">...</label>
              <div class="col-sm-10">
                <select id="template8" name="template8" class="form-control">
                  <option selected>所有</option>
                  <option>...</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="City">
              </div>
              <div class="col-sm">
                <input type="text" class="form-control" placeholder="State">
              </div>
              <div class="col-sm">
                <input type="text" class="form-control" placeholder="Zip">
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
          </div>
          <div class="card-footer"></div>
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
export default {
  name: 'copyform',
  created () { },
  mounted () { }
}
</script>
<style lang="css" scoped>
/* .rangeInput {
  width: 47%;
  display: inline-block;
  padding-left: 0px;
  padding-right: 0px;
}

.rangeInputSpan{
  width: 2%;
}

@media screen and (min-width: 1920px){
   .rangeInput{
    width: 48.5%;
  }
}

@media screen and (max-width: 1200px){
   .rangeInput{
    width: 48%;
  }
}

@media screen and (max-width: 575px){
  .rangeInput{
    width: 100%;
  }
} */
</style>
