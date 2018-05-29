<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>基本訊息
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="">收款编号</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">收款日期</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">店鋪訂單號</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">支付方式</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">交易編號</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">幣種</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">收款金額</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">客戶</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-12">
                <label for="">備註</label>
                <textarea name="" id="" cols="250" rows="3" class="form-control"></textarea>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>處理狀態
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="">自動匹配</label>
                <select class="custom-select mr-sm-2" id="">
                  <option selected>Choose...</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="">自動匹配訂單</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">沖帳編號</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">沖帳狀態</label>
                <select class="custom-select mr-sm-2" id="">
                  <option selected>Choose...</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="">沖帳日期</label>
                <input type="text" class="form-control" id="" value="">
              </div>
              <div class="form-group col-sm-3">
                <label for="">拋轉日期</label>
                <select class="custom-select mr-sm-2" id="">
                  <option selected>Choose...</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true">沖帳明細</i>
          </div>
          <div class="card-body">

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">沖帳明細</th>
                  <th scope="col">銷售單號</th>
                  <th scope="col" class="d-none d-sm-table-cell">幣種</th>
                  <th scope="col">應付金額</th>
                  <th scope="col">訂單沖帳金額</th>
                  <th scope="col">收款編號</th>
                  <th scope="col" class="d-none d-sm-table-cell">幣種</th>
                  <th scope="col">收款金額</th>
                  <th scope="col">收款單沖帳金額</th>
                  <th scope="col" class="d-none d-md-table-cell">沖帳人</th>
                  <th scope="col" class="d-none d-md-table-cell">沖帳時間</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="//" target="_blank">-02</a>
                  </td>
                  <td>
                    <a href="//" target="_blank">1801010003</a>
                  </td>
                  <td class="d-none d-sm-table-cell">美元</td>
                  <td>116.78</td>
                  <td>3.31</td>
                  <td>
                     <a href="//" target="_blank">2171128001</a>
                  </td>
                  <td class="d-none d-sm-table-cell">菲律宾比索</td>
                  <td>123,456.00</td>
                  <td>100.00</td>
                  <td class="d-none d-md-table-cell">業務測試</td>
                  <td class="d-none d-md-table-cell">2018-01-13 15:15:18</td>
                </tr>
                <tr>
                  <td>
                    <a href="//" target="_blank">2171128001-01</a>
                  </td>
                  <td>
                    <a href="//" target="_blank">1712080011</a>
                  </td>
                  <td class="d-none d-sm-table-cell">日圓</td>
                  <td>24,341.90</td>
                  <td>10,000.00</td>
                  <td>
                     <a href="//" target="_blank">2171128001</a>
                  </td>
                  <td class="d-none d-sm-table-cell"> 菲律賓比索</td>
                  <td>123,456.00</td>
                  <td>100,000.00</td>
                  <td class="d-none d-md-table-cell">網站管理員</td>
                  <td class="d-none d-md-table-cell">2017-12-08 15:31:09</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

        <div class="col-12 text-right">
            <button type="button" class="btn btn-success col-3" onclick="window.close();">關閉</button>
        </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'collectionbalance2',
  data () {
    return {}
  },
  created () { },
  mounted () {

  }
}
</script>
<style lang="css" >
</style>