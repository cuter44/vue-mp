<template>
  <div id="main" class="container">
    <div class="row">
      <div class="col">
        <h1>拉卡拉数据上传</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p>
          使用下方的表单提交 CSV 文件, 仅限拉卡拉导出的数据表.
          <br />
          目前我们还无法自动甄别数据的提供商.
        </p>
        <p>
          将为每个提交创建卡片, 你可以在处理完成前提交下一个文件.
          <br />
          请于卡片处理完成后及早核对解析结果是否正确, 使用卡片右侧的 <button class="btn btn-sm">撤销</button> 可以撤回该批次数据. 撤销成功与否取决于缓存可用性. 因此建议不要在短时间内大量上传(你需要核对结果, 通常来说程序是可靠的, 而输入数据可能没有妥善格式化.).
        </p>
      </div>
    </div>
    <upload-sheet v-for="(item, index) in batches" :key="item.t" @submitted="appendSheet()">
    </upload-sheet>
  </div>
</template>

<script>
import UploadSheet from 'components/lakala/UploadSheet';

export default {
  name: 'main',
  data: function () {
    return {
      batches: [
      ]
    };
  },
  methods: {
    appendSheet: function () {
      this.$data.batches.push({t: new Date().getTime()});
    }
  },
  created: function () {
    this.appendSheet();
  },
  components: { UploadSheet }
}
</script>

<style>
  #bottom-upload {
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 12px;
  }
</style>
