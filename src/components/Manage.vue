<template>
  <div class="card">
    <div class="card-header">
      <i class="fa fa-wpforms" aria-hidden="true"></i>表單
    </div>
    <div class="card-body">
      <div class="form-group row">
        <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
        </div>
      </div>
      <div class="form-group row">
        <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
        </div>
      </div>
    </div>
    <div class="card-footer text-right">
       <a href="" class="btn btn-primary col-sm-1 mb-3">返回</a>
        <a href="" class="btn btn-primary col-sm-1 mb-3">返回</a>
    </div>
  </div>

</template>
<script>
export default {
  name: 'manage'
}
</script>
<style lang="scss" scoped>
</style>