<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">

        <table class="table table2 text-center">
          <!-- <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead> -->
          <tbody>
            <tr>
              <td colspan="11" class="text-center">
                <img src="../assets/barcode.png" alt="">
              </td>
            </tr>
            <tr>
              <td colspan="6">迅購婚紗量身訂制單</td>
              <td>ver: 0</td>
              <td>工价标准</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>單位: </td>
              <td>&nbsp;</td>
              <td>生产跟踪号: </td>
              <td>1802270041-01 </td>
              <td>产品号: </td>
              <td>１１１</td>
              <td>&nbsp;</td>
              <td>厂长提示 </td>
              <td>制作工位 </td>
            </tr>
            <!-- <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> -->
          </tbody>
        </table>

      </div>

      <div class="col-12">
        <button type="button" class="btn btn-primary d-print-none" onclick="window.print()">print</button>
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
<style lang="css">
body {
  background-color: #eeeeee;
  font-weight: 300;
  font-size: 13px;
}

.table2 {
  width: 100%;
  border: 1px solid #a4b7c1;
}

.table2 td {
  border: 1px solid #a4b7c1;
}

@media print {
  @page {
    /* size: A4; */
    size: 210mm 297mm;
    /* size: auto; */
    margin: 0;
    /* padding: 0; */
  }

  /* body { */
  /* padding-top: 10mm; */
  /* margin: 0; */
  /* padding: 0; */
  /* } */

  .table2 {
    width: 170mm;
  }
}
</style>