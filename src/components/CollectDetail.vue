<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">&nbsp;</div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>基本信息
          </div>
          <div class="card-body">

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">收款編號</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">客戶</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">收款日期</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">支付方式</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">店鋪訂單號</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">幣種</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">交易編號</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">收款金額</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">備註</label>
              <div class="col-sm-10">
                <textarea class="form-control" id="" rows="3" disabled>備註備註備註備註</textarea>
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

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">沖帳帳號</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">沖帳狀態</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>部分沖帳</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">自動匹配</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>查無訂單</option>
                </select>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">沖帳日期</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">自動匹配訂單</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>&nbsp;</option>
                </select>
              </div>
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">拋轉狀態</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>無</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>沖帳明細
          </div>
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">沖帳帳號</th>
                <th scope="col">銷售單號</th>
                <th scope="col">幣種</th>
                <th scope="col">其他欄位</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">RD-1801040446-01</th>
                <td>1801010010</td>
                <td>美元</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <th scope="row">RD-1801040446-02</th>
                <td>1801010011</td>
                <td>美元</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'collectdetail',
  data () {
    return {}
  },
  created () { },
  mounted () { }
}
</script>
<style lang="css" scoped>
</style>