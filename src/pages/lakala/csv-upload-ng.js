// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import Bootstrap from 'bootstrap-vue';
import CsvUploadNg from './CsvUploadNg';

Vue.use(Bootstrap);

var main = window.app = new Vue({
  name: 'main',
  el: '#main',
  template: '<csv-upload-ng/>',
  components: { CsvUploadNg }
})
