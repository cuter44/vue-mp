<template>
  <div class="row mb-2">
    <div class="col">

    <!-- INIT -->
      <div class="card small" v-if="status=='init'">
        <div class="card-header bg-primary text-white">
          上传文件
        </div>
        <div class="card-block">
          <form class="inline-form">
            <div class="container">
              <div class="row">
                <!--<label for="data" class="col-2">CSV 文件</albel>-->
                <input name="data" class="form-control col-10" type="file" accept=".csv" placeholder="CSV 文件" @change="fdCsvUpload = $event.target.files[0]" required>
                <input class="form-control btn btn-primary col-2" type="submit" value="提交" @click="submitCsv($event)">
              </div>
            </div>
          </form>
        </div>
      </div>

    <!-- PROCESS -->
      <div class="card small" v-if="status=='process'">
        <div class="card-header bg-warning text-white">
          正在处理
        </div>
        <div class="card-block">
          {{ stDetail }}
        </div>
      </div>


    <!-- COMPLETED -->
      <div class="card" v-if="status=='completed'">
        <div class="card-header bg-success text-white">
          已解析
        </div>
        <div class="card-block">
          <form class="inline-form">
            <!--<label for="data" class="col-2">CSV 文件</albel>-->
            <input name="data" class="form-control" type="file" accept=".csv" placeholder="CSV 文件" >
            <button class="form-control btn btn-primary" @click="submitCsv">提交</button>
          </form>
        </div>
      </div>

    <!-- PROCESS FAIL -->
      <div class="card small" v-if="status=='process-fail'">
        <div class="card-header bg-danger text-white">
          上传失败
        </div>
        <div class="card-block">
          总之就是失败了.
        </div>
      </div>


    <!-- RETREAT -->
      <div class="card" v-if="status=='retreat'">
        <div class="card-header">
          正在撤销
        </div>
        <div class="card-block">
          <form class="inline-form">
            <!--<label for="data" class="col-2">CSV 文件</albel>-->
            <input name="data" class="form-control" type="file" accept=".csv" placeholder="CSV 文件" >
            <button class="form-control btn btn-primary" @click="submitCsv">提交</button>
          </form>
        </div>
      </div>


    <!-- RETREATED -->
      <div class="card" v-if="status=='retreated'">
        <div class="card-header bg-faded">
          已撤销
        </div>
        <div class="card-block">
          <form class="inline-form">
            <!--<label for="data" class="col-2">CSV 文件</albel>-->
            <input name="data" class="form-control" type="file" accept=".csv" placeholder="CSV 文件" >
            <button class="form-control btn btn-primary" @click="submitCsv">提交</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import API from './API';

export default {
  data: function () {
    return {
      status: 'init',
      fdCsvUpload: null,
      stDetail: ''
    }
  },
  methods: {
    submitCsv: function (ev) {
      if (!this.$data.fdCsvUpload) return;

      this.$emit('submitted');

      this.$data.status = 'process';
      this.$data.stDetail = '读取文件...';

      //var fr = new FileReader();
      //fr.onloadend = (event) => this.ajaxSubmitCsv(event);
      //fr.readAsArrayBuffer(this.$data.fdCsvUpload);
      API.CSVParse(this.$data.fdCsvUpload)
        .then(this.completeParse)
        .catch(this.failParse);

      this.$data.stDetail = '解析...';

      ev && ev.preventDefault();
    },
    completeParse: function (response) {
      this.$data.status = 'completed';

      console.log(response);
    },
    failParse: function (error) {
      this.$data.status = 'process-fail';

      console.log(error);
    }
  }
}
</script>

<style>
</style>
