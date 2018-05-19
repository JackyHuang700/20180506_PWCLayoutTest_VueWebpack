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
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">銷貨單號</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="">
              </div>

              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">訂單渠道</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1">
                  <option>樂天</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">部門</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>英語組</option>
                </select>
              </div>

              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">店鋪名稱</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>台中店</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">持有人</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>ABE004-王大明</option>
                </select>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">店鋪訂單號</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled value="141425225">
              </div>
            </div>

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">市場</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>歐美市場</option>
                </select>
              </div>

              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">電商訂單狀態</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">備註</label>
              <div class="col-sm-4">
                <textarea class="form-control" id="" rows="3" disabled>備註備註備註備註</textarea>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>物流信息</div>
          <div class="card-body">

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">國家代碼</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>TW</option>
                </select>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">運送天數</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">

              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">出貨倉庫</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>彰化成品倉</option>
                </select>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">到貨日期</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">帳單人</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">帳單電話</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

            <div class="form-group row">
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">收貨人</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
              <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">收貨電話</label>
              <div class="col-sm-4">
                <input type="text" class="form-control form-control-sm" id="colFormLabelSm" placeholder="" disabled>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>銷售訂單明細</div>
          <div class="card-body">

            <div class="form-row">
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col" class="d-none d-sm-table-cell">操作</th>
                    <th scope="col" class="d-none d-sm-table-cell">正面圖</th>
                    <th scope="col">編號</th>
                    <th scope="col">產品名稱</th>
                    <th scope="col">其他欄位</th>
                    <th scope="col">訂製單</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle d-none d-sm-table-cell">
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">展開</button>
                    </td>
                    <td class="align-middle d-none d-sm-table-cell">
                      <img class="" src="http://fakeimg.pl/45x60/" alt="" width="45" height="60">
                    </td>
                    <td class="align-middle">180113000-01</td>
                    <td class="align-middle">產品1</td>
                    <td class="align-middle">&nbsp;</td>
                    <td class="align-middle">
                      <button type="button" class="btn btn-primary">瀏覽</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>當前金額
          </div>
          <div class="card-body">

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">支付方式</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>信用卡</option>
                </select>
              </div>
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">幣種</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>美元</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>狀態信息</div>
          <div class="card-body">

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">送審</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>無</option>
                </select>
              </div>
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">送審人</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>無</option>
                </select>
              </div>
            </div>

            <div class="form-group row">
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">審核</label>
              <div class="col-sm-4">
                <select class="form-control form-control-sm" id="exampleFormControlSelect1" disabled>
                  <option>無</option>
                </select>
              </div>
              <label for="exampleFormControlSelect1" class="col-sm-2 col-form-label col-form-label-sm">審核人</label>
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
            <i class="fa fa-wpforms" aria-hidden="true"></i>歷史信息
          </div>
          <div class="card-body">

            <div class="form-row">
              <table class="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">版次</th>
                    <th scope="col" class="d-none d-sm-table-cell">時間</th>
                    <th scope="col">作者</th>
                    <th scope="col">其他欄位</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle" scope="row">rev.1</td>
                    <td class="align-middle d-none d-sm-table-cell">2018/01/13 15:34:35</td>
                    <td class="align-middle">王大明</td>
                    <td class="align-middle">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'order',
  created () { },
  mounted () { }
}
</script>
<style lang="css" >
</style>