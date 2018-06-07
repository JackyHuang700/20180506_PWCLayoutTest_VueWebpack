<template>
  <div class="container-fluid">
    <div class="row">
      <form method="get" id="form1" action="/Supplier/Create">
        <div class="col-12 mt-4">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>業務夥伴主檔資料
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="">代碼</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="">幣別</label>
                  <select class="custom-select mr-sm-2" id="">
                    <option selected>請選擇...</option>
                    <option value="">奧大利亞元</option>
                    <option value="">菲律賓比索</option>
                    <option value="">港幣</option>
                    <option value="">加拿大元</option>
                    <option value="">美元</option>
                    <option value="">南非幣特</option>
                    <option value="">歐元</option>
                    <option value="">人民幣</option>
                    <option value="">日元</option>
                    <option value="">新台幣</option>
                    <option value="">新西關元</option>
                    <option value="">英鎊</option>
                    <option value="">所有幣別</option>
                  </select>
                </div>
                <div class="form-group col-sm-3">
                  <label for="">稅籍ID</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>一般
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="">電話</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="">行動電話</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="">傳真</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="">電子郵件</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="">聯絡人</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
                <div class="form-group col-sm-3">
                  <label for="">統一稅籍ID</label>
                  <input type="text" class="form-control" id="" value="">
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>付款條件
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-sm-3">
                  <label for="">付款條件</label>
                  <select class="custom-select mr-sm-2" id="">
                    <option selected>請選擇...</option>
                    <option value="">現金支付</option>
                    <option value="">立即付款</option>
                    <option value="">月結10天</option>
                    <option value="">月結15天</option>
                    <option value="">月結20天</option>
                    <option value="">月結25天</option>
                    <option value="">月結30天</option>
                    <option value="">月結45天</option>
                    <option value="">月結60天</option>
                    <option value="">月結90天</option>
                  </select>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>備註
            </div>
            <div class="card-body">

              <div class="form-row">
                <div class="form-group col-sm-12">
                  <label for="">備註</label>
                  <textarea class="form-control" name="" id="" cols="250" rows="30" placeholder="請輸入"></textarea>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-12 text-right">
          <button type="submit" class="btn btn-success col-3">儲存</button>
          <button type="button" class="btn btn-danger col-1" onclick="javascript:location.href='/Supplier/Index'">取消</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'supplier',
  created () { },
  mounted () { }
}
</script>
<style lang="css">
</style>
