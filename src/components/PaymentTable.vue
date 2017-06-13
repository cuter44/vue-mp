<template>
  <b-table class="table-sm table-striped">
    <template slot="tmPay" scope="item">
      {{ new Date(item.value).toLocaleString() }}
    </template>
    <template slot="grossPay" scope="item">
      {{ item.value.toFixed(2) }}
    </template>
    <template slot="netPay" scope="item">
      {{ item.value.toFixed(2) }}
    </template>
  </b-table>
</template>

<script>
import bTable from 'bootstrap-vue';

export default {
  extends: bTable,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Object,
      default: () => {
        return {
          contractId: {
            label: '订单ID'
          },
          tmPay: {
            label: '时间'
          },
          grossPay: {
            label: '应付'
          },
          netPay: {
            label: '实付'
          },
          remoteId0: {
            label: '远端同步ID'
          },
          remoteId1: {
            label: '本地同步ID'
          }
        }
      }
    }
  }
}


</script>

<style>
</style>
