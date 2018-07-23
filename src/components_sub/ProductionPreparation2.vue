<template>
  <div class="col-12">
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">備料</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="conatiner-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <i class="fa fa-wpforms" aria-hidden="true"></i>
                      生產工單資料
                    </div>
                    <div class="card-body">
                      Mars
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-3">
                  <div class="card">
                    <div class="card-header">
                      <i class="fa fa-wpforms" aria-hidden="true"></i>
                      原物料管理
                    </div>
                    <div class="card-body">
                      <table id="example2" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                        <thead>
                          <tr>
                            <th scope="col" class="text-center">#</th>
                            <th scope="col" class="text-center">號碼</th>
                            <th scope="col" class="text-center">說明</th>
                            <th scope="col" class="text-center">基礎數量</th>
                            <th scope="col" class="text-center">計畫數量</th>
                            <th scope="col" class="text-center">計量單位名稱</th>
                            <th scope="col" class="text-center">倉庫</th>
                            <th scope="col" class="text-center">發貨方法</th>
                            <th scope="col" class="text-center">已撿貨數量</th>
                            <th scope="col" class="text-center">出貨數量</th>
                            <th scope="col" class="text-center">操作</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="conatiner-fluid w-100">
              <div class="row">
                <div class="col-6 text-left">
                  <button type="button" class="btn btn-warning" id="updateBtn">更新</button>
                  <button type="button" class="btn btn-warning" id="maintainBtn">採購維護工令材料計劃需求</button>
                </div>
                <div class="col-6 text-right">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
                  <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
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
export default {
  name: 'productionpreparation2',
}
</script>
<style lang="css" scoped>
</style>
