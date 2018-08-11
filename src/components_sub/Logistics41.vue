<template>
  <div class="col-sm-12 mb-2">

    <!-- 物流資料匯出 -->
    <div class="form-row">
      <div class="form-group col-sm-3">
        <label class="float-left" for="inputText">快遞類別</label>
        <select id="inputText" name="inputText" class="form-control">
          <option selected></option>
          <option>DHL</option>
          <option>DHL(德遊小包)</option>
          <option>本地單號</option>
          <option>國際EUB</option>
          <option>國內快遞</option>
          <option>郵政</option>
          <option>專線</option>
        </select>
      </div>
      <div class="form-group col-sm-3">
        <label class="float-left" for="inputText2">快遞名稱(物流公司)</label>
        <select id="inputText2" name="inputText2" class="form-control">
          <option selected></option>
          <option>BBX</option>
          <option>CNE掛號小包</option>
          <option>CNE歐洲專線</option>
          <option>CNE全球特惠</option>
        </select>
      </div>
      <div class="form-group col-sm-3">
        <label class="float-left" for="inputText3">快遞匯出模板</label>
        <select id="inputText3" name="inputText3" class="form-control">
          <option selected>通用</option>
          <option>DHL</option>
          <option>CNE</option>
        </select>
      </div>
      <div class="col-sm-3 d-none d-sm-block"></div>


      <div class="form-group col-sm-3">
        <label class="float-left" for="inputText4">檢貨/訂單日期(起)</label>
        <input type="text" class="form-control" id="inputText4" />
      </div>
      <div class="form-group col-sm-3">
        <label class="float-left" for="inputText5">檢貨/訂單日期(迄)</label>
        <input type="text" class="form-control" id="inputText5" />
      </div>
    </div>


    <!-- 快遞單號輸入 -->
    <div class="form-row">
      <div class="form-group col-sm-3">
        <label class="float-left" for="inputText8">定製唯一碼(起)</label>
        <input type="text" class="form-control" id="inputText8" />
      </div>
      <div class="form-group col-sm-3">
        <label class="float-left" for="inputText9">定製唯一碼(迄)</label>
        <input type="text" class="form-control" id="inputText9" />
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'logistics41'
}
</script>
<style lang="css" scoped>
</style>
