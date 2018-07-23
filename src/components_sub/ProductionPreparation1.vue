<template>
  <div class="col-12">
    <div class="accordion" id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <i class="fa fa-wpforms" aria-hidden="true"></i>
          進階查詢
          <button class="btn btn-primary float-right" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <div class="form-group row">
              <div class="col-sm-12 mb-2">
                <div class="form-row">
                  <div class="form-group col-md-3">
                    <label class="float-left" for="inputText">編號</label>
                    <input type="text" class="form-control" id="inputText" placeholder="" />
                  </div>
                  <div class="form-group col-md-3">
                    <label class="float-left" for="inputText2">編號</label>
                    <input type="text" class="form-control" id="inputText2" placeholder="" />
                  </div>
                  <div class="form-group col-md-3">
                    <label class="float-left" for="inputText3">到期日(起)</label>
                    <input type="text" class="form-control" id="inputText3" placeholder="" />
                  </div>
                  <div class="form-group col-md-3">
                    <label class="float-left" for="inputText4">到期日(迄)</label>
                    <input type="text" class="form-control" id="inputText4" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 mb-2 text-right">
              <button type="button" class="btn btn-primary">查詢</button>
              <button type="button" class="btn btn-danger">重置</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productionpreparation1',
}
</script>
<style lang="css" scoped>
</style>
