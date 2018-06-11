<template>
  <div class="coantiner-fluid">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center mb-4">訂單流程管理</h2>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>訂單詳細資訊
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <label for="template1">...</label>
                <input type="text" class="form-control" id="template1" name="template1" placeholder="" readonly>
              </div>
              <div class="form-group col-sm-3">
                <label for="template6">...</label>
                <select id="template6" name="template6" class="form-control" readonly>
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <label for="template5">..</label>
                <textarea name="template5" id="template5" cols="30" rows="3" class="form-control" readonly></textarea>
              </div>
            </div>

          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>訂單細詳品項清單
          </div>
          <div class="card-body">

            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">明細編號</th>
                  <th scope="col" class="align-middle">產品名稱</th>
                  <th scope="col" class="align-middle">正面圖</th>
                  <th scope="col" class="align-middle">KU代碼</th>
                  <th scope="col" class="align-middle">顏色代碼</th>
                  <th scope="col" class="align-middle">產品尺寸</th>
                  <th scope="col" class="align-middle">明細總計</th>
                  <th scope="col" class="align-middle">交貨日期</th>
                  <th scope="col" class="align-middle">訂購數量</th>
                  <th scope="col" class="align-middle">供應策略</th>
                  <th scope="col" class="align-middle">操作</th>
                </tr>
              </thead>
            </table>

          </div>
          <div class="card-footer"></div>
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
// apiOrderProcessManagementGetThisOrderDetail
} from '../api/api'
export default {
  name: 'orderprocessmanagement',
  created () { },
  mounted () {
    // dataTable
    (function () {
      $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': {
          'url': '/OrderProcessManagement/GetThisOrderDetail',
          'data': function () {
            return {
              aa: 'bb'
            }
          }
        },
        'columns': [
          { 'data': 'detailNumber' },
          { 'data': 'productName' },
          { 'data': 'productImg' },
          { 'data': 'sKUCode' },
          { 'data': 'colorCode' },
          { 'data': 'productSize' },
          { 'data': 'total' },
          { 'data': 'deliveryDate' },
          { 'data': 'quantity' },
          { 'data': 'supplyStrategy' },
          {}
        ],
        'order': [
          [0, 'asc'],
          [1, 'asc'],
          [2, 'asc'],
          [3, 'asc'],
          [4, 'asc'],
          [5, 'asc'],
          [6, 'asc'],
          [7, 'asc'],
          [8, 'asc']
        ],
        'columnDefs': [
          {
            'targets': -1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              var aDomList = ''
              switch (row.supplyStrategy) {
                case '0':
                case 0:
                  aDomList += '<a class="dropdown-item" href="OrderProcessManagement/Create?id={{supplyStrategy}}">建立</a>'
                  break
                default:
                  aDomList += '<a class="dropdown-item" href="OrderProcessManagement/Update?id={{supplyStrategy}}">更新</a>'
                  aDomList += '<a class="dropdown-item" href="OrderProcessManagement/Detail?id={{supplyStrategy}}">詳細</a>'
                  break
              }

              return (
                '<div class="btn-group">' +
                '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</button>' +
                '<div class="dropdown-menu">' +
                 aDomList +
                '</div>' +
                '</div>'
              ).replace('{{supplyStrategy}}', row.supplyStrategy)
            }
          }
        ],
        'language': language
      })
    }())
  }
}
</script>
<style lang="css" >
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
</style>