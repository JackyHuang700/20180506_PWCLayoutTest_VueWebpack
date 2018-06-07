<template>
  <div class="coantiner-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>批次新增供應商-原物料
          </div>
          <div class="card-body">

            <table class="table table-striped" id="dynamicTable">
              <thead>
                <tr>
                  <th>
                    <button class="btn btn-success addColumns">+</button>
                  </th>
                  <th>
                    <button class="btn btn-danger ">-</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>

          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'materials',
  created () { },
  mounted () {
    (function () {
      var dynamicTableDom = document.getElementById('dynamicTable')
      var addColumnsDomList = document.getElementsByClassName('addColumns')

      //
      for (var i = 0; i < addColumnsDomList.length; i++) {
      // for (var item in addColumnsDomList) {
        addColumnsDomList[i].addEventListener('click', AddColumns)
      }

      function AddColumns (e) {
        var bodyDom = dynamicTableDom.querySelectorAll('tbody')[0]
        console.log(bodyDom)
      }
    }())
  }
}
</script>
<style lang="css" scoped>
</style>