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

                  <!-- 出貨確認 -->
                  <div class="col-sm-12 mb-2">
                    <div class="form-row">
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText11">簽單號碼</label>
                        <input type="text" class="form-control" id="inputText11" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText12">訂製唯一碼</label>
                        <input type="text" class="form-control" id="inputText12" />
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

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
            列表
          </div>
          <div class="card-body">

            <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col" class="align-middle"> 訂製唯一碼 </th>
                  <th scope="col" class="align-middle"> 料號 </th>
                  <th scope="col" class="align-middle"> 品名 </th>
                  <th scope="col" class="align-middle"> 檢貨數量 </th>
                  <th scope="col" class="align-middle"> 出貨數量 </th>
                </tr>
              </thead>
            </table>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import 'datatables.net'
import 'datatables.net-bs4'
import { language } from '../config/dataTable'
import { apiLogistics6Index } from '../api/api'
import Logistics42 from '../components_sub/Logistics42.vue'

export default {
  name: 'logistics5',
  created () {},
  mounted () {
    // dataTables
    ;(function () {
      //
      var dataTableObj = $('#example').DataTable({
        ajax: apiLogistics6Index,
        // ajax: '/Demo/TestLogisticsAPI5',
        scrollX: true,
        columns: [
          { data: 'mainData_1' },
          { data: 'mainData_2' },
          { data: 'mainData_3' },
          { data: 'mainData_4' },
          { data: 'mainData_5' },
        ],
        language: language
        // 'language': dataTablesModule.language()
      })
    })()
  },
  components: {
    Logistics42
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';
</style>
