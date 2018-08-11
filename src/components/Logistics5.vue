<template>
  <div class="container-fluid">
    <div class="row">

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

                  <Logistics42 />

                  <!-- 列印出貨面單 -->
                  <div class="col-sm-12 mb-2">
                    <div class="form-row">
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText10">起始訂單號碼</label>
                        <input type="text" class="form-control" id="inputText10" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText11">截止訂單號碼</label>
                        <input type="text" class="form-control" id="inputText11" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText12">指定列印格式</label>
                        <select id="inputText12" name="inputText12" class="form-control">
                          <option selected>EMS</option>
                          <option>FedEx</option>
                          <option>OCS</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="col-sm-12 mb-2 text-right">
                  <button type="button" class="btn btn-primary">查詢</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Logistics42 from '../components_sub/Logistics42.vue'

export default {
  name: 'logistics5',
  created () {},
  mounted () {},
  components: {
    Logistics42
  }
}
</script>
<style lang="css">
</style>
