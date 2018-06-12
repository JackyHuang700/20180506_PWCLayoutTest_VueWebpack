<template>
  <div class="container-fluid mt-4">
    <div class="row">

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
            操作
          </div>
          <div class="card-body">

            <a class="btn btn-primary" href="//">建立</a>

          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="accordion" id="accordion">
          <div class="card">
            <div class="card-header">
              <i class="fa fa-wpforms" aria-hidden="true"></i>
              查詢條件
            </div>
            <div class="card-body">

              <div class="col-12">
                <div class="form-row">
                  <div class="form-group col-sm-3">
                    <label for="" class="">明細編號</label>
                    <input type="text" class="form-control form-control-sm" id="" name="" placeholder="" />
                  </div>
                  <div class="form-group col-sm-3">
                    <label for="" class="">訂單交期</label>
                    <input type="text" class="form-control form-control-sm" id="" name="" placeholder="" />
                  </div>

                </div>
              </div>
              <div class="col-12 text-right">
                <button type="button" class="btn btn-primary">查詢</button>
                <button type="button" class="btn btn-danger">重製</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>
            訂單流程管理
          </div>
          <div class="card-body">

            <table id="example" cellspacing="0" width="100%" class="table table-gray-100 table-hover display">
              <thead>
                <tr>
                  <th scope="col" class="align-middle">正面圖</th>
                  <th scope="col" class="align-middle">明細編號</th>
                  <th scope="col" class="align-middle">訂單審核日</th>
                  <th scope="col" class="align-middle">訂單交期</th>
                  <th scope="col" class="align-middle">時限標準</th>
                  <th scope="col" class="align-middle">經手人</th>
                  <th scope="col" class="align-middle">商品名稱</th>
                  <th scope="col" class="align-middle">商品編號</th>
                  <th scope="col" class="align-middle">KU</th>
                  <th scope="col" class="align-middle">COLOR</th>
                  <th scope="col" class="align-middle">SIZE</th>
                  <th scope="col" class="align-middle">數量</th>
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
  apiDataTableCopyTemplateGetAll
} from '../api/api'

export default {
  name: 'orderprocessmanagement3',
  created () { },
  mounted () {
    // dataTables
    (function () {
      $('#example').DataTable({
        'select': {
          selector: 'td:not(:first-child)',
          style: 'os'
        },
        'ajax': apiDataTableCopyTemplateGetAll,
        'columns': [
          { 'data': 'productImg' },
          { 'data': 'detailNumber' },
          { 'data': 'auditDate' },
          { 'data': 'deliveryDate' },
          { 'data': 'timeLimit' },
          { 'data': 'owner' },
          { 'data': 'productName' },
          { 'data': 'productNumber' },
          { 'data': 'sKUCode' },
          { 'data': 'colorCode' },
          { 'data': 'productSize' },
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
          [8, 'asc'],
          [9, 'asc'],
          [10, 'asc'],
          [11, 'asc']
        ],
        'columnDefs': [
          {
            'targets': -1,
            'data': '',
            'orderable': false,
            'render': function (data, type, row, meta) {
              return (
                '<div class="btn-group">' +
                '<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</button>' +
                '<div class="dropdown-menu">' +
                '  <a class="dropdown-item" href="/OrderProcessManagement/?supplystrategy={{supplystrategy}}">訂單流程管理檢視</a>' +
                '</div>' +
                '</div>'
              ).replace('{{supplystrategy}}', row.supplystrategy)
            }
          }
        ],
        'language': language
      })
    }())
  }
}
</script>
<style lang="css">
@import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
</style>
