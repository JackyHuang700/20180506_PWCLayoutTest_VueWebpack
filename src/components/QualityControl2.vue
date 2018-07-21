<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12">
        <h1>複製過去要刪除 - 質檢作業</h1>
      </div>

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
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText">編號</label>
                        <select id="inputText" name="inputText" class="form-control">
                          <option selected>外發採購單(成品)</option>
                          <option>生產工單(自製成品)</option>
                          <option>現貨質檢(存貨發貨單)</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText">狀態</label>
                        <select id="inputText" name="inputText" class="form-control">
                          <option selected>待質檢</option>
                          <option>已質檢</option>
                        </select>
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText2">供應商名稱/編號</label>
                        <input type="text" class="form-control" id="inputText2" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText5">訂製唯一碼(起)</label>
                        <input type="text" class="form-control" id="inputText5" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText5">訂製唯一碼(迄)</label>
                        <input type="text" class="form-control" id="inputText6" placeholder="" />
                      </div>

                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">收貨日期(起)</label>
                        <input type="text" class="form-control" id="inputText3" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText3">收貨日期(迄)</label>
                        <input type="text" class="form-control" id="inputText4" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText7">Barcode2</label>
                        <input type="text" class="form-control" id="inputText7" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText9">填寫寫入庫儲位</label>
                        <input type="text" class="form-control" id="inputText9" placeholder="" />
                      </div>
                      <div class="form-group col-sm-3">
                        <label class="float-left" for="inputText8">選擇列印內容選項</label>
                        <select id="inputText8" name="inputText8" class="form-control">
                          <option selected>條碼標籤</option>
                          <option>外包裝標註說明</option>
                        </select>
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
            <div class="row">
              <div class="col-12 saveBtnGroup text-right mb-4">
                <button type="button" class="btn btn-success saveBtn col-2">儲存</button>
              </div>
              <div class="col-12">
                <table id="example" cellspacing="0" width="100%" class="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle checkBoxColumn">#</th>
                      <th scope="col" class="align-middle badReason">不良原因</th>
                      <th scope="col" class="align-middle">訂製唯一碼</th>
                      <th scope="col" class="align-middle">BARCODE2</th>
                      <th scope="col" class="align-middle">廠商名稱</th>
                      <th scope="col" class="align-middle">項目號碼</th>
                      <th scope="col" class="align-middle">暫收總數量</th>
                      <th scope="col" class="align-middle">暫收數量</th>
                      <th scope="col" class="align-middle">取消質檢</th>
                      <th scope="col" class="align-middle">暫收次數</th>
                      <th scope="col" class="align-middle">合格數量</th>
                      <th scope="col" class="align-middle">新增合格數量</th>
                      <th scope="col" class="align-middle">單元重量</th>
                      <th scope="col" class="align-middle">不合格數量</th>
                      <th scope="col" class="align-middle">不量原因</th>
                      <th scope="col" class="align-middle">質檢備註</th>
                      <th scope="col" class="align-middle">質檢日期時間</th>
                      <th scope="col" class="align-middle">質檢人員</th>
                      <th scope="col" class="align-middle">來源單號</th>
                      <th scope="col" class="align-middle">採購列號</th>
                      <th scope="col" class="align-middle">入庫狀態</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="col-12">
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">不良原因</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <section id="badReasonList">
                  <div class="row" >
                    <div class="col-12">
                      <div class="alert alert-primary resetAlert" role="alert">上身部分</div>
                    </div>
                    <div class="col-12">
                      <div class="form-inline">
                        <div class="form-row align-items-center w-100">
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason" />
                              <label class="custom-control-label" for="badReason">上身部份-抓桿不對﹐扭</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason2" />
                              <label class="custom-control-label" for="badReason2">上身部份-抓桿漏止口</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason3" />
                              <label class="custom-control-label" for="badReason3">上身部份-臀圍尺寸太小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason4" />
                              <label class="custom-control-label" for="badReason4">上身部份-牽針沒固定好</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason5" />
                              <label class="custom-control-label" for="badReason5">上身部份-上身有臟</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason6" />
                              <label class="custom-control-label" for="badReason6">上身部份-有油污</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason7" />
                              <label class="custom-control-label" for="badReason7">上身部份-蕾絲燒黑﹐焦</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason8" />
                              <label class="custom-control-label" for="badReason8">上身部份-前後領口與圖片不一致</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason9" />
                              <label class="custom-control-label" for="badReason9">上身部份-沒車洗標</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason10" />
                              <label class="custom-control-label" for="badReason10">上身部份-沒車主標</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason11" />
                              <label class="custom-control-label" for="badReason11">上身部份-沒車尺碼標</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason12" />
                              <label class="custom-control-label" for="badReason12">上身部份-袖子長短不對</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason13" />
                              <label class="custom-control-label" for="badReason13">上身部份-袖圈漏裡</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason14" />
                              <label class="custom-control-label" for="badReason14">上身部份-肩至腋下圍大</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason15" />
                              <label class="custom-control-label" for="badReason15">上身部份-肩至腋下圍小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason16" />
                              <label class="custom-control-label" for="badReason16">上身部份-里布魚骨跳針</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason17" />
                              <label class="custom-control-label" for="badReason17">上身部份-魚骨不直車的</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason18" />
                              <label class="custom-control-label" for="badReason18">上身部份-魚骨車少﹐位置不對</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason19" />
                              <label class="custom-control-label" for="badReason19">上身部份-鬆緊短</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason20" />
                              <label class="custom-control-label" for="badReason20">上身部份-領口張口</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason21" />
                              <label class="custom-control-label" for="badReason21">上身部份-領口不順</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason22" />
                              <label class="custom-control-label" for="badReason22">上身部份-領口沒車防滑帶</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason23" />
                              <label class="custom-control-label" for="badReason23">上身部份-領口與圖片不一致</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason24" />
                              <label class="custom-control-label" for="badReason24">上身部份-袖子卡</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason25" />
                              <label class="custom-control-label" for="badReason25">上身部份-袖子短</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason26" />
                              <label class="custom-control-label" for="badReason26">上身部份-上手臂圍大</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason27" />
                              <label class="custom-control-label" for="badReason27">上身部份-上手臂圍小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason28" />
                              <label class="custom-control-label" for="badReason28">上身部份-上身接頭網與圖片不一致</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason29" />
                              <label class="custom-control-label" for="badReason29">上身部份-上身排花與圖片不一致</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason30" />
                              <label class="custom-control-label" for="badReason30">上身部份-上身有鬆珠 少珠 珠子不對</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason31" />
                              <label class="custom-control-label" for="badReason31">上身部份-上身胸棉車的有高低</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason32" />
                              <label class="custom-control-label" for="badReason32">上身部份-胸棉小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason33" />
                              <label class="custom-control-label" for="badReason33">上身部份-胸棉顏色發黃</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason34" />
                              <label class="custom-control-label" for="badReason34">上身部份-胸圍尺寸大小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason35" />
                              <label class="custom-control-label" for="badReason35">上身部份-腰圍尺寸大小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason36" />
                              <label class="custom-control-label" for="badReason36">上身部份-臀圍尺寸大小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason37" />
                              <label class="custom-control-label" for="badReason37">上身部份-膝圍尺寸大小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason38" />
                              <label class="custom-control-label" for="badReason38">上身部份-大腿圍尺寸大小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason39" />
                              <label class="custom-control-label" for="badReason39">上身部份-上身裡面有大小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason40" />
                              <label class="custom-control-label" for="badReason40">上身部份-上身前公主線不順</label>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                    <div class="col-12 mt-4">
                      <div class="alert alert-primary resetAlert" role="alert">中腰部分</div>
                    </div>
                    <div class="col-12">
                      <div class="form-inline">
                        <div class="form-row align-items-center w-100">
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason41" />
                              <label class="custom-control-label" for="badReason41">中腰部份-接腰不順</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason42" />
                              <label class="custom-control-label" for="badReason42">中腰部份-腰口袖皺沒分開抽</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason43" />
                              <label class="custom-control-label" for="badReason43">中腰部份-拉鍊不直</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason44" />
                              <label class="custom-control-label" for="badReason44">中腰部份-拉鍊有寬窄</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason45" />
                              <label class="custom-control-label" for="badReason45">中腰部份-染料與布料色有色差</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason46" />
                              <label class="custom-control-label" for="badReason46">中腰部份-扣環有大小</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason47" />
                              <label class="custom-control-label" for="badReason47">中腰部份-綁帶有長短</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason48" />
                              <label class="custom-control-label" for="badReason48">中腰部份-綁帶寬窄﹐扭</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason49" />
                              <label class="custom-control-label" for="badReason49">中腰部份-少綁帶</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason50" />
                              <label class="custom-control-label" for="badReason50">中腰部份-少配件</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason51" />
                              <label class="custom-control-label" for="badReason51">中腰部份-衣服有針</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason52" />
                              <label class="custom-control-label" for="badReason52">中腰部份-有抽絲</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason53" />
                              <label class="custom-control-label" for="badReason53">中腰部份-有破洞</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 mt-4">
                      <div class="alert alert-primary resetAlert" role="alert">下裙部分</div>
                    </div>
                    <div class="col-12">
                      <div class="form-inline">
                        <div class="form-row align-items-center w-100">
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason54" />
                              <label class="custom-control-label" for="badReason54">下裙部份-下裙來去逢車的有寬窄</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason55" />
                              <label class="custom-control-label" for="badReason55">下裙部份-爆口</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason56" />
                              <label class="custom-control-label" for="badReason56">下裙部份-不平不直</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason57" />
                              <label class="custom-control-label" for="badReason57">下裙部份-捲邊有寬窄</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason58" />
                              <label class="custom-control-label" for="badReason58">下裙部份-下爆口</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason59" />
                              <label class="custom-control-label" for="badReason59">下裙部份-排花位置不對</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason60" />
                              <label class="custom-control-label" for="badReason60">下裙部份-排花沒車靠邊</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason61" />
                              <label class="custom-control-label" for="badReason61">下裙部份-線頭蕾絲股線頭多</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason62" />
                              <label class="custom-control-label" for="badReason62">下裙部份-下裙有鬆珠 少珠子</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason63" />
                              <label class="custom-control-label" for="badReason63">下裙部份-珠子用的不對</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason64" />
                              <label class="custom-control-label" for="badReason64">下裙層次不對</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason65" />
                              <label class="custom-control-label" for="badReason65">下裙部份-上下身有色差</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason66" />
                              <label class="custom-control-label" for="badReason66">下裙部份-衣長有長短</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason67" />
                              <label class="custom-control-label" for="badReason67">下裙部份-沒加鞋高</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason68" />
                              <label class="custom-control-label" for="badReason68">下裙部份-沒加襯裙量</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason69" />
                              <label class="custom-control-label" for="badReason69">下裙部份-下擺沒打鎖鏈 下擺縫份開口</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason70" />
                              <label class="custom-control-label" for="badReason70">下裙部份-下擺沒修園順</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason71" />
                              <label class="custom-control-label" for="badReason71">下裙部份-外層蓋不住內層</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason72" />
                              <label class="custom-control-label" for="badReason72">下裙部份-拖尾內外尺寸不對</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason73" />
                              <label class="custom-control-label" for="badReason73">下裙部份-下裙沒車粗網</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason74" />
                              <label class="custom-control-label" for="badReason74">下裙部份-下裙沒車彈力網</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason75" />
                              <label class="custom-control-label" for="badReason75">下裙部份-下腳邊沒車2cm彈力網</label>
                            </div>
                          </div>
                          <div class="col-2 my-1">
                            <div class="custom-control custom-checkbox mr-sm-2">
                              <input type="checkbox" class="custom-control-input" id="badReason76" />
                              <label class="custom-control-label" for="badReason76">下裙部份-下裙邊彈力網抽絲</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary col-1" data-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-success col-2">儲存</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import 'datatables.net'
import 'datatables.net-bs4'
import {
  language
} from '../config/dataTable'
import {
  apiQualityControl2Index
} from '../api/api'

export default {
  name: 'qualitycontrol2',
  created () { },
  mounted () {
    // dataTables
    (function () {
      //
      var dataTableObj = $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiQualityControl2Index,
        'scrollX': true,
        'bPaginate': false,
        'columns': [
          {},
          {},
          { 'data': 'mainData_1' },
          { 'data': 'mainData_2' },
          { 'data': 'mainData_3' },
          { 'data': 'mainData_4' },
          { 'data': 'mainData_5' },
          { 'data': 'mainData_6' },
          { 'data': 'mainData_7' },
          { 'data': 'mainData_8' },
          { 'data': 'mainData_9' },
          { 'data': 'mainData_10' },
          { 'data': 'mainData_11' },
          { 'data': 'mainData_12' },
          { 'data': 'mainData_13' },
          { 'data': 'mainData_14' },
          { 'data': 'mainData_15' },
          { 'data': 'mainData_16' },
          { 'data': 'mainData_17' },
          { 'data': 'mainData_18' },
          { 'data': 'mainData_19' },
        ],
        'drawCallback': function (settings) {
          $('.details-control').trigger('click')
        },
        'order': [
          [1, 'asc']
        ],
        'columnDefs': [
          {
            'targets': 0,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return ('<div class="custom-control custom-checkbox">' +
                '  <input type="checkbox" class="custom-control-input" id="{{id}}" {{checked}}>' +
                '  <label class="custom-control-label" for="{{id}}"></label>' +
                '</div>'
              ).replace(/{{id}}/g, 'checkgoxid' + row.id)
                .replace(/{{checked}}/g, 'checked')
            }
          },
          {
            'targets': 1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">勾選</button>' +
                '<button type="button" class="details-control d-none"></button>')
            }
          },
        ],
        'language': language
        // 'language': dataTablesModule.language()
      })

      // 明細
      $('#example tbody').on('click', '.details-control', function () {
        var tr = $(this).closest('tr')
        var row = dataTableObj.row(tr)

        if (row.child.isShown()) {
          row.child.hide()
          tr.removeClass('shown')
        } else {
          row.child(childRows(row.data().badReasonList)).show()
          tr.addClass('shown')
        }
      })

      function childRows (d) {
        var templateStr = document.getElementById('badReasonList').children[0].cloneNode(true)

        for (var key in d) {
          // $(templateStr).find('#' + key)[0].checked = d[key]
          var inputDom = templateStr.querySelector('#' + key)
          // inputDom[0].checked = d[key]
          inputDom.checked = d[key]
          // inputDom = inputDom.prop('checked', d[key])
          templateStr.querySelector('#' + key).replaceWith(inputDom)
        }

        return templateStr
      }
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
@import '../assets/dataTables/dataTables.css';

/* modal  另外添加*/
.dataTable {
  width: 100% !important;
}
.dataTables_scrollHeadInner {
  width: unset !important;
}

.modal-lg {
  max-width: 85%;
}
@media screen and (max-width: 750px) {
  .modal-lg {
    max-width: 100%;
  }

  .dataTables_wrapper {
    width: 100%;
  }
}

.resetAlert {
  border-color: #d2eef7;
}

.dataTables_wrapper.dataTables_wrapper .badReason {
  min-width: 60px;
}
</style>
