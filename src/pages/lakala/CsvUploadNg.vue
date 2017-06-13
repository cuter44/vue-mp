<template>
  <div>
    <upload-sheet v-for="(item, index) in batches" :key="item.t" @submitted="appendSheet()">
    </upload-sheet>
  </div>
</template>

<script>
import UploadSheet from 'components/lakala/UploadSheetNg';

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
